import React, { useState, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertMessage from "../../../common/MessageSuccesAlert";
import EditCategoryModal from "./EditCategoryModal";
import ProjectAddCategory from "./ProjectAddCategory";

const CategoryData = [
  { id: `#56674`, category: "Furniture" },
  { id: `#56675`, category: "Furniture" },
  { id: `#56676`, category: "Plants" },
  { id: `#56677`, category: "Decorations" },
  { id: `#56678`, category: "Dining" },
  { id: `#56679`, category: "Decorations" },
  { id: `#56680`, category: "Lighting" },
  { id: `#56681`, category: "Outdoor" },
  { id: `#56682`, category: "Storage" },
  { id: `#56683`, category: "Lighting" },
];

const ProjectCategory = () => {
  const [items, setItems] = useState(CategoryData);
  const [selectedItems, setSelectedItems] = useState([]);
  const [message, setMessage] = useState("");
  const [showCategoryTabs, setShowCategoryTabs] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleEdit = (item) => {
    setCurrentItem(item);
    setShowEditModal(true);
  };

  const handleSave = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setMessage("Category updated successfully.");
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

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
    <div className="container " style={{ padding: "0" }}>
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
          <span> &gt; </span> {/* This ensures the ">" symbol is inline */}
          <span className="ms-2">Categories/ Projects</span>
        </h4>
      </div>

      {/* Add Category Section */}
      <div className="my-3 bg-white px-3 py-2 mx-4">
        <div className="d-flex justify-content-between align-items-center ">
          <h4 style={{ fontSize: "20px", color: "#011140", fontWeight: 500 ,padding:"10px" }}>
            Add Category
          </h4>
          <i
            className={`bi ${showCategoryTabs ? "bi-dash-circle" : "bi-plus-circle"}`}
            style={{ color: "#011140", fontSize: "20px", cursor: "pointer" }}
            onClick={() => setShowCategoryTabs(!showCategoryTabs)}
          ></i>
        </div>
        {showCategoryTabs && <ProjectAddCategory />}
      </div>

      {/* Category Table */}
      <div className="my-3 bg-white px-3 mx-4">
        <Table hover responsive>
          <thead style={{ }}>
            <tr >
              <th style={{ width: "7%" , paddingLeft:"12px", fontSize: "20px",paddingTop:"20px", paddingBottom:"20px"}}>
                <Form.Check type="checkbox" onChange={handleSelectAll} />
              </th>
              <th style={{ width: "80%", fontWeight: 500, fontSize: "16px",color:"rgba(71, 71, 71, 0.5)",paddingTop:"20px", paddingBottom:"20px"}}>Category</th>
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
                    style={{ transform: "scale(1.2)", paddingLeft:"10px" }}
                  />
                </td>
                <td style={{ fontSize: "16px" , color:"rgba(71, 71, 71, 1)"}}>{item.category}</td>
                <td>
                  <Button
                    size="sm"
                    onClick={() => handleEdit(item)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "blue",
                    }}
                  >
                    <i className="bi bi-pencil" style={{ fontSize: "16px" }}></i>
                    <span> Edit </span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Edit Modal */}
      {currentItem && (
        <EditCategoryModal
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
          <span style={{ color: "#011140", fontWeight: 500, fontSize: "18px" }}>
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

export default ProjectCategory;
