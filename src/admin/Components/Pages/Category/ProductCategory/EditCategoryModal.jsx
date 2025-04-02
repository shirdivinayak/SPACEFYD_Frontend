import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import useFetchCategories from "../../../../hooks/useDeleteSubCat"; // Adjust path as needed

const EditCategoryModal = ({ show, handleClose, categoryData, onSave }) => {
  const [categoryName, setCategoryName] = useState(categoryData.category);
  const [subCategoryName, setSubCategoryName] = useState(
    categoryData.subCategory
  );
  const [isAddingSubcategory, setIsAddingSubcategory] = useState(false);
  const [newSubcategory, setNewSubcategory] = useState("");
  const { deleteProducts, error } = useFetchCategories();

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

  const handleRemoveWord = async (wordToRemove) => {
    // Find the subcategory object that matches the name being removed
    const subcategoryToRemove = categoryData.subCategoryData.find(
      (subCat) => subCat.name.trim() === wordToRemove.trim()
    );
    
    if (subcategoryToRemove) {
      console.log("Removing subcategory with ID:", subcategoryToRemove._id);
      
      try {
        // Call the API to delete the subcategory
        await deleteProducts(subcategoryToRemove._id);
        
        // Update the UI only after successful deletion
        const updatedSubCategories = subCategoryName
          .split(",")
          .filter((word) => word.trim() !== wordToRemove.trim())
          .join(",");
        setSubCategoryName(updatedSubCategories);
      } catch (err) {
        console.error("Failed to delete subcategory:", err);
        // Optionally show an error message to the user
      }
    }
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
              {subCategoryName.length > 0 ?
              (<Form.Group controlId="subCategoryName" className="mt-3">
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
              </Form.Group>)
              : (null)}

          
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
                    color: "#9A715B", // Text color
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
                    backgroundColor: "#9A715B", // Background color
                    border: "none", // Removes border
                    color: "white", // Text color
                    fontSize: "16px", // Font size
                    fontWeight: 600, // Font weight
                    textDecoration: "none", // Ensures no text decoration
                    boxShadow: "none", // Removes Bootstrap's default focus shadow
                    border: "none",
                    outline: "none",
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
