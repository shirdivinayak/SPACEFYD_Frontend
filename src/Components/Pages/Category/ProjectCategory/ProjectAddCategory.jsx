import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import AlertSuccesMessage from "../../../common/MessageSuccesAlert";

const ProjectAddCategory = () => {
  const [subCategoryName, setSubCategoryName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleAddCategory = () => {
    if (!subCategoryName.trim()) {
      setError("Category name is required.");
      return;
    }

    const msg = `New category "${subCategoryName}" added.`;
    console.log(msg);
    setMessage(msg);
    setError("");
    setSubCategoryName("");

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
      <Form style={{ maxWidth: "600px", marginLeft: "0" }}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Row className="mb-3" style={{ display: "flex", alignItems: "center" }}>
          <Col md="auto">
            <Form.Group controlId="subCategoryInput">
              <Form.Label
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#474747",
                  opacity: "0.8",
                }}
              >
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
                height: "38px",
                paddingLeft: "20px",
                paddingRight: "20px",
                marginTop: "30px",
                backgroundColor: "#184BD3",
                border: "none",
              }}
            >
              Submit
            </Button>
          </Col>
        </Row>

        
      </Form>

      {/* Success Message */}
      <AlertSuccesMessage message={message} />
    </div>
  );
};

export default ProjectAddCategory;
