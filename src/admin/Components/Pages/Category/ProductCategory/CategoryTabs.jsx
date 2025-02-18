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

    await addCategory({ name: categoryName });
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
      category: selectedCategory,
      name: subCategoryName,
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
                  activeTab === "addCategory" ? "5px solid #184BD3" : "none",
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
                  activeTab === "addSubCategory" ? "5px solid #184BD3" : "none",
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
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown"
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
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {selectedCategory || "Select"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                       style={{ 
                        width: "100%", 
                        maxHeight: "200px",  // Limit the dropdown's height
                        overflowY: "auto",   // Enable vertical scrolling
                        scrollbarWidth: "none", // For Firefox: hides scrollbar
                        msOverflowStyle: "none", // For IE and Edge: hides scrollbar
                      }}
                      >
                        {filteredCategories.length === 0 ? (
                          <Dropdown.Item disabled style={{ padding: "10px" }}>
                            No categories available
                          </Dropdown.Item>
                        ) : (
                          filteredCategories.map((category) => (
                            <Dropdown.Item
                              key={category._id}
                              onClick={() => setSelectedCategory(category.name)}
                            >
                              {category.name}
                            </Dropdown.Item>
                          ))
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
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
                        width: "100%",
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
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      marginTop: "30px",
                      backgroundColor: theme.colors.primary
                    }}
                  >
                    Submit
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
                      onChange={(e) => setCategoryName(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  </Form.Group>
                </Col>
                <Col md="auto">
                  <Button
                    variant="primary"
                    onClick={handleAddCategory}
                    disabled={loading}
                    style={{
                      width: "auto",
                      height: "38px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      marginTop: "30px",
                      backgroundColor: theme.colors.primary
                    }}
                  >
                    Submit
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
