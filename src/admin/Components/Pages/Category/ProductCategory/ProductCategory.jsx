import React, { useState, useEffect, useRef } from "react";
import { Button, Table, Form, Tab, Row, Col, Alert } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryTabs from "./CategoryTabs";
import AlertMessage from "../../../common/MessageSuccesAlert";
import EditCategoryModal from "./EditCategoryModal";
import useProductCategoryApi from "../../../../hooks/useCategoryApi";
import theme from "../../../../Assets/colors/styles";
import Spinner from "react-bootstrap/Spinner";
import AlertSuccesMessage from "../../../common/MessageSuccesAlert";
import Upload from "../../../../Assets/Images/upload.svg";

const ProductCategory = () => {
  const [activeTab, setActiveTab] = useState("addCategory");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");


  const {
    fetchProjectCategories,
    loading,
    error,
    addCategory,
    editCategory,
    addSubCategory,
    message,
    setMessage,
    setError,
    deleteCategory,
    categories, // Use the categories from the hook
  } = useProductCategoryApi();

  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCategoryTabs, setShowCategoryTabs] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [filteredCategories, setFilteredCategories] = useState([]);
  useEffect(() => {
    // Filter out categories with empty or null names
    const validCategories = categories.filter(
      (category) => category.name && category.name.trim() !== ""
    );
    setFilteredCategories(validCategories);
  }, [categories]);

  const [imageDisplay, setImageDisplay] = useState({ mainImage: null });
  const [productDetails, setProductDetails] = useState({ image: [] });
  const fileInputRef = useRef(null);
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
  
        setImageDisplay((prev) => ({
          ...prev,
          mainImage: imageUrl,
        }));
  
        setProductDetails((prev) => ({
          ...prev,
          image: [imageUrl, ...prev.image.slice(1)],
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setMessage("Please upload a valid image file.");
      setTimeout(() => setMessage(""), 3000);
    }
  };
  
  const handleClick = () => {
    fileInputRef.current.click(); // Trigger file input on click
  };
  
  const handleRemove = (event) => {
    event.stopPropagation(); // Prevent triggering file input click
  
    setImageDisplay((prev) => ({
      ...prev,
      mainImage: null,
    }));
  
    setProductDetails((prev) => ({
      ...prev,
      image: [],
    }));
  };
  
  const handleAddCategory = async () => {
    if (!categoryName.trim()) {
      setError("Please enter the category.");
      setTimeout(() => setError(""), 3000);
      return;
    }
  
    if (!imageDisplay.mainImage) { // Check if an image is uploaded
      setError("Please upload an image.");
      setTimeout(() => setError(""), 3000);
      return;
    }
  
    await addCategory({
      name: categoryName,
      type: "product",
      image: imageDisplay.mainImage,
    });
  
    setCategoryName("");
    setImageDisplay({ mainImage: null });
    setProductDetails({ image: [] });
    setMessage("Category added successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleAddSubCategory = async () => {
    if (!selectedCategory) {
      setError("Please select a category.");
      return;
    }

    if (!subCategoryName.trim()) {
      setError("Sub Category name is required.");
      return;
    }

    await addSubCategory({
      categoryId: selectedCategory._id,
      name: subCategoryName,
      // type:'product'
    });
    setSubCategoryName("");
    setSelectedCategory("");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  useEffect(() => {
    if (categories.length > 0) {
      // Transform the API response data to display each category once
      // with subcategories as comma-separated string
      const formattedCategories = categories.map((category) => {
        // Join all subcategory names with commas
        const subCategoryNames =
          category.subCategory && category.subCategory.length > 0
            ? category.subCategory.map((subCat) => subCat.name).join(", ")
            : "";

        return {
          id: category._id,
          category: category.name,
          image: category.image,
          subCategory: subCategoryNames,
          // Store subcategory data for potential editing
          subCategoryData: category.subCategory || [],
        };
      });

      setItems(formattedCategories);
    }
  }, [categories]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  const handleEdit = (item) => {
    setCurrentItem(item);
    setShowEditModal(true);
    console.log(item);
  };

  const handleSave = async  (updatedItem) => {
console.log(updatedItem,"=======")
    await editCategory({
      id: updatedItem.id,
      name: updatedItem.category,
      type: "product",
      image:updatedItem.image
    });
    // setItems((prevItems) =>
    //   prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    // );
    // fetchProjectCategories();
    setMessage("Category updated successfully.");
  };

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((itemId) => itemId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
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
        await deleteCategory(selectedItems);
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
    setError('')
  };

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
          <span> &gt; </span>
          <span className="ms-2">Categories/ Products</span>
        </h4>
      </div>

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

          {showCategoryTabs && (
            <div
              className="container px-4 py-4"
              style={{ maxWidth: "100%", paddingLeft: "0" }}
            >
              <Tab.Container
                activeKey={activeTab}
                onSelect={(tab) => (setActiveTab(tab), setError(''))}
                >
                <Nav variant="pills" className="justify-content-start">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="addCategory"
                      style={{
                        color:
                          activeTab === "addCategory"
                            ? theme.colors.primary
                            : theme.colors.secondaryButton,
                        borderBottom:
                          activeTab === "addCategory"
                            ? "5px solid #9A715B"
                            : "none",
                        backgroundColor: "transparent",
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                    >
                      Add Category
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="addSubCategory"
                      style={{
                        color:
                          activeTab === "addSubCategory"
                            ? theme.colors.primary
                            : theme.colors.secondaryButton,
                        borderBottom:
                          activeTab === "addSubCategory"
                            ? "5px solid #9A715B"
                            : "none",
                        backgroundColor: "transparent",
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                    >
                      Add Sub Category
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <div
                  style={{ borderBottom: "1px solid #ccc", marginTop: "0px" }}
                ></div>

                <Tab.Content className="mt-4">
                  <Tab.Pane eventKey="addSubCategory">
                    <Form style={{ maxWidth: "600px", marginLeft: "0" }}>
                      {error && <Alert variant="danger">{error}</Alert>}
                      <Row className="mb-3">
                        <Col md={4}>
                          <Form.Group controlId="categorySelect">
                            <Form.Label
                              style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                color: theme.colors.TextPrimary,
                                opacity: "0.51",
                              }}
                            >
                              Select Category
                            </Form.Label>
                            <select
                              value={selectedCategory._id || ""}
                              onChange={(e) => {
                                const selected = filteredCategories.find(
                                  (cat) => cat._id === e.target.value
                                );
                                setSelectedCategory(selected || {});
                              }}
                              style={{
                                width: "100%",
                                fontSize: "14px",
                                fontWeight: "400",
                                color: "#757575",
                                backgroundColor: "white",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                padding: "8px",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                appearance: "none", // Hides default dropdown arrow
                              }}
                            >
                              <option value="" disabled>
                                Select
                              </option>
                              {filteredCategories.length === 0 ? (
                                <option disabled>
                                  No categories available
                                </option>
                              ) : (
                                filteredCategories.map((category) => (
                                  <option
                                    key={category._id}
                                    value={category._id}
                                  >
                                    {category.name}
                                  </option>
                                ))
                              )}
                            </select>
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group controlId="categoryInput">
                            <Form.Label
                              style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                color: theme.colors.TextPrimary,
                                opacity: "0.51",
                              }}
                            >
                              Sub Category Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter sub category name"
                              value={subCategoryName}
                              onChange={(e) =>
                                setSubCategoryName(e.target.value)
                              }
                              onKeyDown={handleKeyDown}
                              style={{
                                width: "150%",
                                fontSize: "14px",
                                fontWeight: 400,
                                color: "#757575",
                              }}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Button
                            variant="primary"
                            onClick={handleAddSubCategory}
                            disabled={loading}
                            style={{
                              width: "auto",
                              height: "38px",
                              marginLeft: "80px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                              marginTop: "30px",
                              backgroundColor: theme.colors.primary,
                              boxShadow: "none", // Removes Bootstrap's default focus shadow
                              border: "none",
                              outline: "none",
                            }}
                          >
                            {loading ? "Submitting..." : "Submit"}
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Tab.Pane>

                  <Tab.Pane eventKey="addCategory">
                    <Form style={{ maxWidth: "600px" }}>
                      {error && <Alert variant="danger">{error}</Alert>}
                      <Row className="mb-3">
                        <Col md="auto">
                          <Form.Group controlId="subCategoryInput">
                            <Form.Label
                              style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                color: theme.colors.TextPrimary,
                                opacity: "0.51",
                              }}
                            >
                              New Category Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter category name"
                              value={categoryName}
                              onChange={(e) => {
                                setCategoryName(e.target.value);
                                setError("");
                              }}
                              onKeyDown={handleKeyDown}
                            />
                          </Form.Group>
                        </Col>
                        <Col md="auto">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            ref={fileInputRef}
                            style={{ display: "none" }} // Hide the input
                          />
                          <div
                            onClick={handleClick}
                            style={{
                              width: 120,
                              height: 120,
                              border: "2px dashed #ccc",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                              overflow: "hidden",
                              position: "relative",
                              textAlign: "center",
                              backgroundColor: "#f8f9fa",
                            }}
                          >
                            {imageDisplay.mainImage ? (
                              <>
                                <img
                                  src={imageDisplay.mainImage}
                                  alt="Preview"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                                <i
                                  className="bi bi-trash"
                                  style={{
                                    color: "red",
                                    position: "absolute",
                                    top: 5,
                                    right: 5,
                                    cursor: "pointer",
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                    padding: "2px",
                                  }}
                                  onClick={handleRemove}
                                />
                              </>
                            ) : (
                              <span
                                style={{ fontSize: "14px", color: "#6c757d" }}
                              >
                                Upload Image
                              </span>
                            )}
                          </div>
                        </Col>
                        <Col md="auto">
                          <Button
                            variant="primary"
                            onClick={() => {
                              setError(""); // Clear error
                              handleAddCategory(); // Call function
                            }}
                            disabled={loading}
                            style={{
                              width: "auto",
                              height: "38px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                              marginTop: "30px",
                              backgroundColor: theme.colors.primary,
                              boxShadow: "none", // Removes Bootstrap's default focus shadow
                              border: "none",
                              outline: "none",
                            }}
                          >
                            {loading ? "Submitting..." : "Submit"}
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
                {message && (
                  <AlertSuccesMessage
                    message={message}
                    onClose={() => setMessage("")}
                  />
                )}
              </Tab.Container>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: "22px" }}></div>

      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            marginTop: "15%",
            width: "100%",
          }}
        >
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="mx-4 px-4" style={{ backgroundColor: "white" }}>
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
                      transform: "scale(1.2)",
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
                    fontSize: 16,
                    color: theme.colors.TextPrimary,
                    width: "20%",
                  }}
                >
                  Image
                </th>
                <th
                  style={{
                    height: "60px",
                    padding: "20px 10px",
                    borderBottom: true,
                    fontWeight: 500,
                    fontSize: "16px",
                    color: theme.colors.TextPrimary,
                    width: "40%",
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
                  <td style={{ borderBottom: true }}>
                    <img
                      src={item.image || Upload}
                      alt={item.productName}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td
                    style={{
                      borderBottom: true,
                      padding: "20px 10px",
                      fontSize: 16,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.subCategory}
                  </td>

                  <td style={{ borderTop: true, padding: "20px 10px" }}>
                    <Button
                      size="sm"
                      onClick={() => handleEdit(item)}
                      style={{
                        color: "#9A715B",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    >
                      <i
                        className="bi bi-pencil"
                        style={{ color: "#9A715B", fontSize: "20px" }}
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

      <AlertMessage message={message} />

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
            boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
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
            <span
              style={{ color: "#4C6559", fontWeight: 500, fontSize: "22px" }}
            >
              {selectedItems.length} Selected
            </span>

            <div>
              <Button
                onClick={handleRemoveSelected}
                style={{
                  backgroundColor: "rgba(194, 0, 0, 0.6)",
                  border: "none",
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
