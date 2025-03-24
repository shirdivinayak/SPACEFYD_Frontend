import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertSuccesMessage from "../../common/MessageSuccesAlert";
import useAddProjectApi from "../../../hooks/useAddProjectApi.js";
import useFetchCategories from "../../../hooks/useAllProjectApi"; 
import Spinner from 'react-bootstrap/Spinner';

const AddProject = () => {
  const { addProject, loading, error, success } = useAddProjectApi();
  const {
    categories,
    loading: Loading,
    error: categoriesError,
  } = useFetchCategories();
  
  const placeholderImage = "https://placehold.co/600x400/EEE/31343C";
  
  // Initialize product details with empty images array
  const [productDetails, setProductDetails] = useState({
    projectName: "",
    projectDescription: "",
    categoryId: "",
    ProjectCode: "",
    isVisible: false,
    brand: "",
    images: []
  });

  // Separate state for UI rendering of images
  const [imageDisplay, setImageDisplay] = useState({
    mainImage: placeholderImage,
    additionalImages: [
      placeholderImage,
      placeholderImage,
      placeholderImage,
      placeholderImage,
      placeholderImage,
      placeholderImage
    ]
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const handleSave = async () => {
    setIsSubmitting(true); // Show loader on submission
    // Combine the main image with additional images for saving
    const allImages = [
      imageDisplay.mainImage, 
      ...imageDisplay.additionalImages.filter(img => img !== placeholderImage)
    ];
    
    // Update product details with all images before saving
    const updatedProductDetails = {
      ...productDetails,
      images: allImages
    };
    
    try {
      await addProject(updatedProductDetails);
      // Only navigate back if the save was successful
      navigate(-1);
    } catch (error) {
      console.error("Error saving project:", error);
      // Handle error case if needed
    }finally{
      setIsSubmitting(false); // Hide loader after process completes
    }
  };

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    setProductDetails((prevState) => ({
      ...prevState,
      categoryId: selectedCategoryId
    }));
  };

  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        
        // Update the main image in the display state
        setImageDisplay(prev => ({
          ...prev,
          mainImage: imageUrl
        }));
        
        // Update the images array in product details (main image at index 0)
        setProductDetails(prev => {
          const updatedImages = [...prev.images];
          updatedImages[0] = imageUrl;
          return {
            ...prev,
            images: updatedImages
          };
        });
      };
      reader.readAsDataURL(file);
    } else {
      setMessage("Please upload a valid image file.");
      setTimeout(() => setMessage(""), 3000);
    }
  };
  
  const handleOtherImageUpload = (event, index) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        
        // Update the additional image in the display state
        setImageDisplay(prev => {
          const updatedAdditionalImages = [...prev.additionalImages];
          updatedAdditionalImages[index] = imageUrl;
          return {
            ...prev,
            additionalImages: updatedAdditionalImages
          };
        });
        
        // Update the images array in product details (additional images start at index 1)
        setProductDetails(prev => {
          const updatedImages = [...prev.images];
          updatedImages[index + 1] = imageUrl; // +1 because index 0 is reserved for main image
          return {
            ...prev,
            images: updatedImages
          };
        });
      };
      reader.readAsDataURL(file);
    } else {
      setMessage("Please upload a valid image file.");
      setTimeout(() => setMessage(""), 3000);
    }
  };
  
  const handleDeleteMain = () => {
    // Reset main image to placeholder
    setImageDisplay(prev => ({
      ...prev,
      mainImage: placeholderImage
    }));
    
    // Remove main image from product details (index 0)
    setProductDetails(prev => {
      const updatedImages = [...prev.images];
      updatedImages[0] = null; // Set to null or remove
      return {
        ...prev,
        images: updatedImages.filter(Boolean) // Remove null/undefined values
      };
    });
  };
  
  const handleDeleteOtherImage = (index) => {
    // Reset additional image to placeholder
    setImageDisplay(prev => {
      const updatedAdditionalImages = [...prev.additionalImages];
      updatedAdditionalImages[index] = placeholderImage;
      return {
        ...prev,
        additionalImages: updatedAdditionalImages
      };
    });
    
    // Remove additional image from product details
    setProductDetails(prev => {
      const updatedImages = [...prev.images];
      updatedImages[index + 1] = null; // +1 because index 0 is reserved for main image
      return {
        ...prev,
        images: updatedImages.filter(Boolean) // Remove null/undefined values
      };
    });
  };

  const handleCancel = () => {
    navigate(-1); // Navigate back without saving
  };

  // Render the additional images in rows of 3
  const renderAdditionalImages = () => {
    const rows = [];
    for (let i = 0; i < imageDisplay.additionalImages.length; i += 3) {
      const rowImages = imageDisplay.additionalImages.slice(i, i + 3);
      rows.push(
        <div 
          key={`row-${i/3}`} 
          className="d-flex" 
          style={{ gap: "10px", marginTop: i > 0 ? "10px" : "0", paddingLeft: "50px" }}
        >
          {rowImages.map((img, idx) => {
            const actualIndex = i + idx;
            return (
              <div
                key={actualIndex}
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={img}
                  alt={`image-${actualIndex}`}
                  style={{
                    width: "110px",
                    height: "110px",
                    border: "1px solid #ddd",
                    padding: "5px",
                    cursor: "pointer",
                    objectFit: "cover"
                  }}
                  onClick={() =>
                    document
                      .getElementById(`otherImageInput-${actualIndex}`)
                      .click()
                  }
                />
                <button
                  onClick={() => handleDeleteOtherImage(actualIndex)}
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <i className="bi bi-trash" style={{ color: "red" }}></i>
                </button>
                <input
                  type="file"
                  id={`otherImageInput-${actualIndex}`}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleOtherImageUpload(e, actualIndex)}
                />
              </div>
            );
          })}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="container " style={{ padding: "0" }}>
      {/* Breadcrumb Section */}
      <div
        className="d-flex justify-content-between align-items-center p-4 "
        style={{ backgroundColor: "white", minHeight: "85px", padding: "0" }}
      >
        <h4
          className="d-flex align-items-center mb-0 m-0"
          style={{ fontSize: "20px" }}
        >
          <Nav.Link as={Link} to="/admin" className="me-2 opacity-50">
            Home
          </Nav.Link>
          <span style={{ marginRight: "8px" }}>&gt;</span>
          <Nav.Link as={Link} to="/admin/projects" className="me-2 opacity-50">
            All Projects
          </Nav.Link>

          <span> &gt; </span>
          <span className="ms-2"> Add Projects</span>
        </h4>
      </div>

      {/* Main Form Section */}
      { isSubmitting ? 
    (   <div 
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        zIndex: 9999
      }}
    >
      <Spinner animation="border" role="status" style={{ width: "5rem", height: "5rem" }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>)
    :
          (<div
        className="d-flex mx-4 px-4 "
        style={{ backgroundColor: "white", marginTop: "20px" }}
      >
        {/* Left Section */}
        <div className="w-50 pe-4 py-4 px-4">
          <form>
            <div>
              <label
                style={{
                  color: "rgba(71, 71, 71, 0.51)",
                  display: "block",
                  marginTop: "10px",
                  fontSize: "16px",
                }}
              >
                Project Name
              </label>
               <input
                type="text"
                name="projectName"
                value={productDetails.projectName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "5px",
                  fontSize: "14px",
                  color: "rgba(71, 71, 71, 1)",
                  border: "1px solid rgba(224, 224, 224, 1)",
                  borderRadius: "4px",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  color: "rgba(71, 71, 71, 0.51)",
                  display: "block",
                  marginTop: "10px",
                  fontSize: "16px",
                }}
              >
                Description:
                <textarea
                name="projectDescription"
                value={productDetails.projectDescription}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "5px",
                  height: "150px",
                  color: "rgba(71, 71, 71, 1)",
                  fontSize: "14px",
                  border: "1px solid rgba(224, 224, 224, 1)",
                  borderRadius: "4px",
                }}
              />
              </label>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <label
                style={{
                  flex: "1",
                  color: "rgba(71, 71, 71, 0.51)",
                  display: "block",
                  marginTop: "20px", // Adjust the margin as needed
                  marginBottom: "10px", // Space between label and dropdown
                }}
              >
                Category:
                <select
                  value={productDetails.categoryId || ""}
                  onChange={handleCategoryChange}
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  <option value="">Select</option>
                  {categories && categories.map((category) => (
                    <option key={category._id} value={category._id}> 
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>

              <label
                style={{
                  flex: "1",
                  color: "rgba(71, 71, 71, 0.51)",
                  display: "flex", // Flexbox for vertical alignment
                  flexDirection: "column", // Stack label and input vertically
                  marginTop: "10px", // Adjust the margin as needed
                }}
              >
                Brand:
                <input
                  type="text"
                  name="ProjectCode"
                  value={productDetails.ProjectCode}
                  onChange={handleChange}
                  style={{
                    width: "100%", // Full width for better alignment
                    padding: "8px", // Adjust padding for input field
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#757575",
                    backgroundColor: "white", // Set background color to white
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Same box-shadow as dropdown
                    cursor: "pointer", // Add cursor pointer for better UX
                    marginTop: "5px", // Add space between label and input
                  }}
                />
              </label>
            </div>

            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginTop: "20px",
                padding: "7px",
                display: "flex", // Added flexbox to align items
                justifyContent: "space-between", // Space between label and checkbox
                alignItems: "center", // Vertically center the items
              }}
            >
              <label
                style={{
                  color: "rgba(71, 71, 71, 0.51)",
                  display: "block",
                  paddingLeft: "6px", // Padding to left side
                  flex: 1, // Allow label to take available space
                }}
              >
                Display in Home
              </label>
              <input
                type="checkbox"
                name="isVisible"
                checked={productDetails.isVisible}
                onChange={handleChange}
                style={{
                  marginRight: "6px", // Margin for spacing on the right
                  transform: "scale(1.5)", // Scales the checkbox by 1.5 times (you can adjust this value)
                  cursor: "pointer", // Optional: To improve UX, change cursor on hover
                }}
              />
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="ps-4 py-4">
          <div>
            {/* Display the main image */}
            <div
              style={{
                position: "relative",
                display: "inline-block",
                paddingLeft: "50px",
              }}
            >
              <img
                src={imageDisplay.mainImage}
                alt="Main"
                style={{
                  width: "400px", // Fixed width
                  height: "400px", // Fixed height
                  objectFit: "cover", // Ensures the image fills the area while maintaining its aspect ratio
                  border: "1px solid #ddd",
                  padding: "5px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  document.getElementById("mainImageInput").click()
                } // Trigger file input click
              />
              <button
                onClick={handleDeleteMain}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: " rgba(255, 224, 224, 0.56)",
                  color: "white",
                  border: "none",
                  borderRadius: "5%",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <i
                  className="bi bi-trash"
                  style={{ color: "red", paddingRight: "10px" }}
                ></i>
                <span style={{ color: "red" }}>Remove cover image</span>
              </button>

              <input
                type="file"
                id="mainImageInput"
                accept="image/*"
                style={{ display: "none" }} // Hidden file input
                onChange={handleMainImageUpload}
              />
            </div>

            {/* Display other images rendered in rows of 3 */}
            <div style={{ marginTop: "10px" }}>
              {renderAdditionalImages()}
            </div>
          </div>

          <div className="mt-4 d-flex justify-content-end">
            <Button
              style={{
                backgroundColor: "transparent", // Background color
                border: "none", // Removes border
                color: "#113DBC", // Text color
                fontSize: "16px", // Font size
                fontWeight: 600, // Font weight
                textDecoration: "none", // Ensures no text decoration
              }}
              onClick={handleCancel}
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
          <AlertSuccesMessage message={message} />
        </div>
      </div>)}
    </div>
  );
};

export default AddProject;