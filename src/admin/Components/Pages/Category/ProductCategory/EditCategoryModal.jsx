import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const EditCategoryModal = ({ show, handleClose, categoryData, onSave }) => {
  const [categoryName, setCategoryName] = useState(categoryData.category);
  const [subCategoryName, setSubCategoryName] = useState(
    categoryData.subCategory
  );
  const [isAddingSubcategory, setIsAddingSubcategory] = useState(false);
  const [newSubcategory, setNewSubcategory] = useState("");

  useEffect(() => {
    setCategoryName(categoryData.category);
    setSubCategoryName(categoryData.subCategory);
  }, [categoryData]);

  const handleSave = () => {
    onSave({
      ...categoryData,
      category: categoryName,
      subCategory: subCategoryName,
    });
    handleClose();
  };

  const handleRemoveWord = (wordToRemove) => {
    const updatedSubCategories = subCategoryName
      .split(",")
      .filter((word) => word.trim() !== wordToRemove.trim())
      .join(",");
    setSubCategoryName(updatedSubCategories);
  };

  const handleAddSubcategory = () => {
    if (newSubcategory.trim()) {
      setSubCategoryName(subCategoryName + ", " + newSubcategory);
      setNewSubcategory(""); // Clear input field
      setIsAddingSubcategory(false); // Close input field
    }
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
            <h5 style={{ marginBottom: "30px" }}>Edit Category</h5>
            <Form>
              {/* Category Name */}
              <Form.Group controlId="categoryName">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </Form.Group>

              {/* Subcategory Name */}
              <Form.Group controlId="subCategoryName" className="mt-3">
                <Form.Label>Subcategory Name</Form.Label>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    border: "1px solid #ccc",
                    padding: "10px",
                    overflowY: "scroll",
                  }}
                >
                  {subCategoryName.split(",").map((word, index) => (
                    <span
                      key={index}
                      style={{
                        borderRadius: "5px",
                        padding: "5px 10px",
                        paddingRight: "30px",
                        backgroundColor: "rgba(203, 217, 255, 0.6)",
                        display: "inline-block",
                        position: "relative", // Position the icon inside the box
                      }}
                    >
                      {word.trim()}{" "}
                      <i
                        className="bi bi-x-circle"
                        onClick={() => handleRemoveWord(word.trim())}
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          fontSize: "16px",
                          color: "#A1A1A1",
                          right: "5px", // Position the icon towards the right
                          top: "50%", // Center the icon vertically
                          transform: "translateY(-50%)", // Adjust for proper vertical centering
                        }}
                      />
                    </span>
                  ))}
                </div>
              </Form.Group>

              {/* Add Subcategory Section */}
              <div
                className="mt-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid #ccc",
                  borderRadius: "8px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "10px",
                }}
              >
                {/* Toggle add new subcategory button */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between", // This will space out the items
                    width: "100%", // Ensures the content spans the full width of the container
                  }}
                >
                  {/* This is the "Add Subcategory" text on the leftmost */}
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#184BD3",
                    }}
                  >
                    Add Subcategory
                  </div>

                  {/* This is the icon with the onClick function on the rightmost */}
                  <div
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => setIsAddingSubcategory(!isAddingSubcategory)} // Only the icon toggles the state
                  >
                    {isAddingSubcategory ? (
                      <i
                        className="bi bi-dash-circle"
                        style={{ fontSize: "23px" }}
                      />
                    ) : (
                      <i
                        className="bi bi-plus-circle"
                        style={{ fontSize: "23px" }}
                      />
                    )}
                  </div>
                </div>

                {/* Input field for adding a new subcategory */}
                {isAddingSubcategory && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {/* Sub Category Name */}
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "rgba(71, 71, 71, 0.51)",
                        textAlign: "left",
                        marginBottom: "8px", // Adds spacing between the label and the input field
                      }}
                    >
                      Sub Category Name
                    </div>

                    {/* Input and Button Row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: "20px",
                      }}
                    >
                      <Form.Control
                        type="text"
                        value={newSubcategory}
                        onChange={(e) => setNewSubcategory(e.target.value)}
                        placeholder="Enter new subcategory"
                        style={{
                          flex: 1,
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "rgba(117, 117, 117, 1)",
                        }}
                      />
                      <Button
                        className="ms-2"
                        style={{ color: " #184BD3" }}
                        onClick={handleAddSubcategory}
                      >
                        <i
                          className="bi bi-plus"
                          style={{ color: "white", fontSize: "20px" }}
                        />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

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

export default EditCategoryModal;
