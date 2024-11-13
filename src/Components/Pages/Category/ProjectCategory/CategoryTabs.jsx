import React, { useState } from "react";
import { Tab, Nav, Form, Button, Row, Col, Alert } from "react-bootstrap";
import AlertSuccesMessage from "../../../common/MessageSuccesAlert";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("addCategory");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // State for validation error messages

  const categories = ["furniture", "casde", "erje", "rtdt"]; // Example categories

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (!subCategoryName.trim()) {
      setError("Category name is required.");
      return;
    }

    const msg = `New Category added`;
    console.log(msg);
    setMessage(msg);
    setError("");
    setSubCategoryName("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleAddSubCategory = () => {
    if (!selectedCategory.trim()) {
      setError("Please select a category.");
      return;
    }
    if (!categoryName.trim()) {
      setError("Sub Category name is required.");
      return;
    }

    const msg = `New Sub Category added.`;
    console.log(msg);
    setMessage(msg);
    setError("");
    setCategoryName("");
    setSelectedCategory("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="container px-4 py-4" style={{ maxWidth: "100%", paddingLeft: "0" }}>
      <Tab.Container activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}>
        <Nav variant="pills" className="justify-content-start">
          <Nav.Item>
            <Nav.Link
              eventKey="addCategory"
              style={{
                color: activeTab === "addCategory" ? "#184BD3" : "rgba(24, 75, 211, 0.6)",
                borderBottom: activeTab === "addCategory" ? "5px solid #184BD3" : "none",
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
                color: activeTab === "addSubCategory" ? "#184BD3" : "rgba(24, 75, 211, 0.6)",
                borderBottom: activeTab === "addSubCategory" ? "5px solid #184BD3" : "none",
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
                    <Form.Label>Select Category</Form.Label>
                    <Form.Select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      onKeyDown={handleKeyDown}
                      style={{
                        width: "100%",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#757575",
                      }}
                    >
                      <option value="">Select</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="categoryInput">
                    <Form.Label>Sub Category Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter sub category name"
                      value={categoryName}
                      onChange={(e) => setCategoryName(e.target.value)}
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
                <Col md={4} className="px-4">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleAddSubCategory}
                    style={{
                      width: "auto",
                      height: "38px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      marginTop: "30px",
                      backgroundColor: "#184BD3",
                    }}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Tab.Pane>
          <Tab.Pane eventKey="addCategory">
            <Form style={{ maxWidth: "600px", marginLeft: "0" }}>
              {error && <Alert variant="danger">{error}</Alert>}
              <Row className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                <Col md="auto">
                  <Form.Group controlId="subCategoryInput">
                    <Form.Label style={{ fontSize: "16px", fontWeight: "400", color: "#474747", opacity: "0.51" }}>
                      New Category Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter category name"
                      value={subCategoryName}
                      onChange={(e) => setSubCategoryName(e.target.value)}
                      onKeyDown={handleKeyDown}
                      style={{ width: "281px" }}
                    />
                  </Form.Group>
                </Col>
                <Col md="auto" className="d-flex justify-content-start">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleAddCategory}
                    style={{
                      width: "auto",
                      height: "38px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      marginTop: "30px",
                      backgroundColor: "#184BD3",
                    }}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      <AlertSuccesMessage message={message} />
    </div>
  );
};

export default CategoryTabs;
