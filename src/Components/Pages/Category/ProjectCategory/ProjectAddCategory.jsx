import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import AlertSuccesMessage from "../../../common/MessageSuccesAlert";
import useProjectCategoryApi from "../../../../hooks/useProjectCategoryApi";

const ProjectAddCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const {
    addCategory,
    error,
    loading,
    message,
    setMessage,
    setError,
  } = useProjectCategoryApi();

  const handleAddCategory = async () => {
    if (!categoryName.trim()) {
      setError("Category name is required.");
      return;
    }

    await addCategory({ name: categoryName });
    setCategoryName(""); // Clear input field
    setTimeout(() => {
      setMessage(""); // Clear success message after 3 seconds
      setError(null);  // Clear error message if present
    }, 3000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission on Enter
      handleAddCategory(); // Optionally trigger submit on Enter
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
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
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
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Success Message */}
      {message && <AlertSuccesMessage message={message} />}
    </div>
  );
};

export default ProjectAddCategory;
