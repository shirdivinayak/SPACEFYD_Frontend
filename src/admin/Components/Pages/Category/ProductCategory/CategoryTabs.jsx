import React, { useState, useEffect } from "react";
import {
  Tab,
  Nav,
  Form,
  Button,
  Row,
  Col,
  Alert,
  Dropdown,
} from "react-bootstrap";
import AlertSuccesMessage from "../../../common/MessageSuccesAlert";
import useCategoryApi from "../../../../hooks/useCategoryApi";
import theme from "../../../../Assets/colors/styles";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("addCategory");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");

  const {
    categories,
    addCategory,
    addSubCategory,
    loading,
    error,
    message,
    setMessage,
    setError,
  } = useCategoryApi();

  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    // Filter out categories with empty or null names
    const validCategories = categories.filter(
      (category) => category.name && category.name.trim() !== ""
    );
    setFilteredCategories(validCategories);
  }, [categories]);

  const handleAddCategory = async () => {
    if (!categoryName.trim()) {
      setError("Please enter the category.");
      return;
    }

    await addCategory({ name: categoryName, type: "product" });
    setCategoryName("");
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

  return (
    <div
      className="container px-4 py-4"
      style={{ maxWidth: "100%", paddingLeft: "0" }}
    >
      <Tab.Container
        activeKey={activeTab}
        onSelect={(tab) => setActiveTab(tab)}
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
                  activeTab === "addCategory" ? "5px solid #9A715B" : "none",
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
                  activeTab === "addSubCategory" ? "5px solid #9A715B" : "none",
                backgroundColor: "transparent",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              Add Sub Category
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div style={{ borderBottom: "1px solid #ccc", marginTop: "0px" }}></div>

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
                        <option disabled>No categories available</option>
                      ) : (
                        filteredCategories.map((category) => (
                          <option key={category._id} value={category._id}>
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
                      onChange={(e) => setSubCategoryName(e.target.value)}
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
                
                {/* <Col md="auto">
                  <h3>Add Image</h3>
                </Col> */}
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
  );
};

export default CategoryTabs;
