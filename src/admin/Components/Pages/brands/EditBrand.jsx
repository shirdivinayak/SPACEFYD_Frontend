import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const EditBrandModal = ({ show, handleClose, categoryData, onSave }) => {
  const [categoryName, setCategoryName] = useState(categoryData.category);
  

  useEffect(() => {
    setCategoryName(categoryData.brand);
  }, [categoryData]);

  const handleSave = () => {
    onSave({
      ...categoryData,
      category: categoryName,
    });
    handleClose();
  };



  return (
    <>
      {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
            backdropFilter: "blur(2px)",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              width: "536px",
              position: "relative",
            }}
          >
            <h5 style={{ marginBottom: "30px" }}>Edit Brand</h5>
            <Form>
              {/* Category Name */}
              <Form.Group controlId="categoryName">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </Form.Group>

             
              

              {/* Footer Buttons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "transparent", // Background color
                    border: "none", // Removes border
                    color: "#113DBC", // Text color
                    fontSize: "16px", // Font size
                    fontWeight: 600, // Font weight
                    textDecoration: "none", // Ensures no text decoration
                  }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>

                <div style={{ paddingRight: "10px" }}></div>
                <Button
                  style={{
                    backgroundColor: "#184BD3", // Background color
                    border: "none", // Removes border
                    color: "white", // Text color
                    fontSize: "16px", // Font size
                    fontWeight: 600, // Font weight
                    textDecoration: "none", // Ensures no text decoration
                  }}
                  onClick={handleSave}
                >
                  Save Changes
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditBrandModal;
