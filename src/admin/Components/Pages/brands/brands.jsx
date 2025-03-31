import React, { useState, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertMessage from "../../common/MessageSuccesAlert";
import EditBrandModal from "./EditBrand";
import AddBrand from "./AddBrands";
import useBrandCategoryApi from "../../../hooks/usebrandApi"; // Adjust the path as needed
import Spinner from "react-bootstrap/Spinner";

const BrandTable = () => {
  const { fetchBrandCategories, loading, error, message, setMessage } = useBrandCategoryApi();
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCategoryTabs, setShowCategoryTabs] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const loadCategories = async () => {
    const response = await fetchBrandCategories(); // Call the API hook
    if (response && Array.isArray(response.data)) {
      const formattedCategories = response.data.map((name, index) => ({
        id: index + 1,
        category: name,
      }));
      setItems(formattedCategories.reverse());
    } else {
      console.error("Invalid data format:", response);
      setItems([]);
    }
  };
  
  useEffect(() => {
    loadCategories();
  }, []);
  
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  const handleEdit = (item) => {
    setCurrentItem(item);
    setShowEditModal(true);
  };

  const handleSave = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setMessage("Brand updated successfully.");
  };

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = (e) => {
    setSelectedItems(e.target.checked ? items.map((item) => item.id) : []);
  };

  const handleRemoveSelected = () => {
    if (selectedItems.length > 0) {
      setItems(items.filter((item) => !selectedItems.includes(item.id)));
      setMessage(`${selectedItems.length} item(s) removed.`);
      setSelectedItems([]);
    } else {
      setMessage("No items selected to remove.");
    }
  };

  return (
    <div className="container" style={{ padding: "0" }}>
      {/* Header Section */}
      <div
        className="d-flex justify-content-between align-items-center p-4"
        style={{ backgroundColor: "white", minHeight: "85px", padding: "0" }}
      >
        <h4
          className="d-flex align-items-center mb-0 m-0"
          style={{ fontSize: "20px" }}
        >
          <Nav.Link as={Link} to="/" className="me-2 opacity-50">
            Home
          </Nav.Link>
          <span> &gt;</span>
          <span className="ms-2">Brands</span>
        </h4>
      </div>

      {/* Add Category Section */}
      <div className="my-3 bg-white px-3 py-2 mx-4">
        <div className="d-flex justify-content-between align-items-center">
          <h4
            style={{
              fontSize: "20px",
              color: "#4C6559",
              fontWeight: 500,
              padding: "10px",
            }}
          >
            Add Brand
          </h4>
          <i
            className={`bi ${
              showCategoryTabs ? "bi-dash-circle" : "bi-plus-circle"
            }`}
            style={{ color: "#4C6559", fontSize: "20px", cursor: "pointer" }}
            onClick={() => setShowCategoryTabs(!showCategoryTabs)}
          ></i>
        </div>
        {showCategoryTabs && <AddBrand />}
      </div>

      {/* Category Table */}
      {loading ? (
 <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%", // Ensures it takes up full height of the container
              width: "100%", // Ensures it takes up full width of the container
              color: "transparent",
              marginTop: "15%",
            }}
          >
            <Spinner
              animation="border"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
              variant="primary"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
      ):(

      <div className="my-3 bg-white px-3 mx-4">
        <Table hover responsive>
          <thead>
            <tr>
              <th style={{ width: "7%", paddingLeft: "12px" }}>
                <Form.Check type="checkbox" onChange={handleSelectAll} />
              </th>
              <th style={{ width: "80%", fontWeight: 500, fontSize: "16px" }}>
                Brand
              </th>
              <th style={{ width: "23%" }}></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <Form.Check
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td>{item.category}</td>
                {/* <td>
                  <Button
                    size="sm"
                    onClick={() => handleEdit(item)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "blue",
                    }}
                  >
                    <i className="bi bi-pencil"></i>
                    <span> Edit </span>
                  </Button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      )}
      {/* Edit Modal */}
      {currentItem && (
        <EditBrandModal
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          categoryData={currentItem}
          onSave={handleSave}
        />
      )}

      {/* Alert Message */}
      <AlertMessage message={message} />

      {/* Footer Action */}
      {selectedItems.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "80%",
            backgroundColor: "#f8f9fa",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #ddd",
          }}
        >
          <span style={{ color: "#4C6559", fontWeight: 500, fontSize: "18px" }}>
            {selectedItems.length} Selected
          </span>
          <Button
            onClick={handleRemoveSelected}
            style={{
              backgroundColor: "rgba(194, 0, 0, 0.6)",
              border: "none",
              color: "#fff",
            }}
          >
            <i className="bi bi-trash" style={{ marginRight: "5px" }}></i>
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

export default BrandTable;