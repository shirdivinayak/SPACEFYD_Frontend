import React, { useState, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryTabs from "./CategoryTabs";
import AlertMessage from "../../../common/MessageSuccesAlert";
import EditCategoryModal from "./EditCategoryModal";
import useProductCategoryApi from "../../../../hooks/useCategoryApi"; // Adjust the path as needed
import theme from "../../../../Assets/colors/styles";
import Spinner from "react-bootstrap/Spinner";

const ProductCategory = () => {
  const {
    fetchProjectCategories,
    loading,
    error,
    message,
    setMessage,
    setError,
    deleteCategory,
    categories, // Use the categories from the hook
  } = useProductCategoryApi();
  const [items, setItems] = useState([]); // Initialize with CategoryData
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const [showCategoryTabs, setShowCategoryTabs] = useState(false); // Toggle state for CategoryTabs
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  

  useEffect(() => {
    if (categories.length > 0) {
      const formattedCategories = categories.map((category) => ({
        id: category._id,
        category: category.name,
        subCategory: category.subCategory || "",
      }));
      setItems(formattedCategories);
    }
  }, [categories]); // Depend on `categories` from the hook

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
    setMessage("Category updated successfully.");
  };


  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelected) =>
    {
      if (prevSelected.includes(id)) {
        // If it is, remove it (uncheck)
        return prevSelected.filter((itemId) => itemId !== id);
      } else {
        // If it's not, add it (check)
        return [...prevSelected, id];
      }
    }
    );
  };
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(items.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleRemoveSelected = async () => {
    if (selectedItems.length > 0) {
      try {
        await deleteCategory(selectedItems); // Call API to delete categories

        // Update local state after successful deletion
        setItems((prevItems) =>
          prevItems.filter((item) => !selectedItems.includes(item.id))
        );
        await fetchProjectCategories();
        setMessage(`${selectedItems.length} item(s) removed successfully.`);
        setSelectedItems([]);
      } catch (error) {
        setMessage("Failed to remove selected items.");
      }
    } else {
      setMessage("No items selected to remove.");
    }
  };


  const toggleCategoryTabs = () => {
    setShowCategoryTabs(!showCategoryTabs);
  };

  // Filter items based on the selected category
  // const filteredItems =
  //   selectedCategory === "Categories"
  //     ? items
  //     : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="container " style={{ padding: "0" }}>
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
          <span className="ms-2">Categories/ Products</span>
        </h4>
      </div>

      {/* Add a custom gap here */}
      <div style={{ marginTop: "22px" }}></div>
      <div>
        <div
          className="mx-4 px-2"
          style={{ backgroundColor: "white", minHeight: "70px" }}
        >
          <div
            className="d-flex justify-content-between"
            style={{
              backgroundColor: "white",
              paddingTop: "20px",
              paddingLeft: "25px",
              paddingRight: "15px",
            }}
          >
            <h4
              className="mb-0"
              style={{ fontSize: "20px", color: "#4C6559", fontWeight: 500 }}
            >
              Add more
            </h4>
            <i
              className={`bi ${
                showCategoryTabs ? "bi-dash-circle" : "bi-plus-circle"
              }`}
              style={{
                color: "rgba(1, 17, 64, 1)",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={toggleCategoryTabs}
            ></i>
          </div>

          {/* Render the CategoryTabs only if showCategoryTabs is true */}
          {showCategoryTabs && (
            <div>
              <CategoryTabs />
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: "22px" }}></div>

      {/* Product Table */}
        {loading ? (
          <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "transparent",
                        marginTop: "15%",
                        width: "100%", // Ensures it takes up full width of the container
                        width: "100%", // Full width
                      }}
                    >
                      <Spinner animation="border" variant="primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
            <div className="  mx-4 px-4" style={{ backgroundColor: "white" }}>
          <Table hover responsive>
            <thead>
              <tr>
                <th
                  style={{
                    height: "60px",
                    padding: "20px 10px",
                    borderBottom: true,
                    fontWeight: 500,
                    fontSize: 14,
                    color: theme.colors.TextPrimary,
                    width: "10%",
                  }}
                >
                  <Form.Check
                    type="checkbox"
                    onChange={handleSelectAll}
                    style={{
                      transform: "scale(1.2)", // Scale the checkbox size
                      paddingLeft: "10px",
                      fontSize: "20px",
                    }}
                  />
                </th>

                <th
                  style={{
                    height: "60px",
                    padding: "20px 10px",
                    borderBottom: true,
                    fontWeight: 500,
                    fontSize: 16,
                    color: theme.colors.TextPrimary,
                    width: "20%",
                  }}
                >
                  Category
                </th>
                <th
                  style={{
                    height: "60px",
                    padding: "20px 10px",
                    borderBottom: true,
                    fontWeight: 500,
                    fontSize: "16px",
                    color: theme.colors.TextPrimary,
                    width: "50%",
                  }}
                >
                  Sub-Category
                </th>
                <th
                  style={{
                    height: "60px",
                    padding: "20px 10px",
                    borderBottom: true,
                    fontWeight: 500,
                    fontSize: "16px",
                    color: theme.colors.TextPrimary,
                  }}
                ></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td style={{ borderBottom: true, padding: " 10px" }}>
                    <Form.Check
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                      style={{
                        transform: "scale(1.2)",
                        borderColor: "rgba(1, 17, 64, 1)",
                        accentColor: "#4C6559",
                        paddingLeft: "10px",
                        visibility: "visible",
                        fontSize: "20px",
                      }}
                    />
                  </td>
                  <td
                    style={{
                      borderBottom: true,
                      padding: "20px 10px",
                      fontSize: 16,
                    }}
                  >
                    {item.category}
                  </td>
                  <td
                    style={{
                      borderBottom: true,
                      padding: "20px 10px",
                      fontSize: 16,
                      overflow: "hidden", // Hide overflow content
                      textOverflow: "ellipsis", // Add ellipsis for overflowed content
                    }}
                  >
                    {item.subCategory}
                  </td>

                  <td style={{ borderTop: true, padding: "20px 10px" }}>
                    <Button
                      size="sm"
                      onClick={() => handleEdit(item)}
                      style={{
                        color: "blue",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    >
                      <i
                        className="bi bi-pencil"
                        style={{ color: "blue", fontSize: "20px" }}
                      ></i>{" "}
                      <span style={{ fontWeight: 500, fontSize: "16px" }}>
                        Edit
                      </span>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
      </div>
        )}

      {currentItem && (
        <EditCategoryModal
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          categoryData={currentItem}
          onSave={handleSave}
        />
      )}

      {/* Message section */}
      <AlertMessage message={message} />

      {/* Footer section */}
      {selectedItems.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "82%",
            backgroundColor: "#f8f9fa",
            padding: "0px 20px",
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #ddd",
            boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)", // Adjusted to remove side shadows
            height: "80px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1220px",
            }}
          >
            {/* Left: Number of selected items */}
            <span
              style={{ color: "#4C6559", fontWeight: 500, fontSize: "22px" }}
            >
              {selectedItems.length} Selected
            </span>

            {/* Right: Remove button */}
            <div>
              <Button
                onClick={handleRemoveSelected}
                style={{
                  backgroundColor: "rgba(194, 0, 0, 0.6)", // 60% opacity
                  border: "none", // Match border color to the background color
                }}
              >
                <i className="bi bi-trash" style={{ marginRight: "15px" }}></i>
                Remove
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
