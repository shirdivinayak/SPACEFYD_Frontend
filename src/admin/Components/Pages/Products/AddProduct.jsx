import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

// Import necessary hooks and APIs
import useAddProjectApi from "../../../hooks/useAddProjectApi";
import useFetchCategories from "../../../hooks/useAllProductApi"; // Adjust path
import AlertSuccesMessage from "../../common/MessageSuccesAlert";

const AddProject = () => {
  const navigate = useNavigate();
  
  // Project API hooks
  const { addProject, loading: addProjectLoading, error: addProjectError } = useAddProjectApi();
  
  // Categories and Subcategories hooks
  const { 
    categories, 
    subCategories,
    loading: categoriesLoading, 
    error: categoriesError,
    fetchSubCategories,
    subcategoriesLoading
  } = useFetchCategories();
  
 

  // Placeholder and state initialization
  const placeholderImage = "https://placehold.co/600x400/EEE/31343C";
  
  // Product/Project details state
  const [productDetails, setProductDetails] = useState({
    projectName: "",
    projectDescription: "",
    categoryId: "",
    subcategoryId: "", // Added subcategory
    ProjectCode: "",
    isVisible: false,
    brand: "",
    images: []
  });

  // Image display state
  const [imageDisplay, setImageDisplay] = useState({
    mainImage: placeholderImage,
    additionalImages: [
      placeholderImage,
      placeholderImage,
      placeholderImage,
    ]
  });

  // Submission and message states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch categories on component mount
  useEffect(() => {
    // Any additional setup for categories can be done here
  }, []);

  // Fetch subcategories when category changes
  useEffect(() => {
    if (productDetails.categoryId) {
      fetchSubCategories(productDetails.categoryId);
    }else {
      // Reset subcategories when no category is selected
      setProductDetails(prevState => ({
        ...prevState,
        subcategoryId: ""
      }));
    }
  }, [productDetails.categoryId]);

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Category change handler
  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    setProductDetails((prevState) => ({
      ...prevState,
      categoryId: selectedCategoryId,
      subcategoryId: "" // Reset subcategory when category changes
    }));
  };


  // Subcategory change handler
  const handleSubcategoryChange = (event) => {
    const selectedSubcategoryId = event.target.value;
    setProductDetails((prevState) => ({
      ...prevState,
      subcategoryId: selectedSubcategoryId
    }));
  };
  // Image upload and management methods (similar to previous implementation)
  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        
        setImageDisplay(prev => ({
          ...prev,
          mainImage: imageUrl
        }));
        
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
        
        setImageDisplay(prev => {
          const updatedAdditionalImages = [...prev.additionalImages];
          updatedAdditionalImages[index] = imageUrl;
          return {
            ...prev,
            additionalImages: updatedAdditionalImages
          };
        });
        
        setProductDetails(prev => {
          const updatedImages = [...prev.images];
          updatedImages[index + 1] = imageUrl;
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

  // Save project handler
  const handleSave = async () => {
    // Validation
    if (!productDetails.projectName || !productDetails.categoryId) {
      setMessage("Please fill in required fields.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setIsSubmitting(true);
    
    const allImages = [
      imageDisplay.mainImage, 
      ...imageDisplay.additionalImages.filter(img => img !== placeholderImage)
    ];
    
    const updatedProductDetails = {
      ...productDetails,
      images: allImages
    };
    
    try {
      await addProject(updatedProductDetails);
      navigate(-1);
    } catch (error) {
      console.error("Error saving project:", error);
      setMessage("Failed to save project. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Image deletion methods (similar to previous implementation)
  const handleDeleteMain = () => {
    setImageDisplay(prev => ({
      ...prev,
      mainImage: placeholderImage
    }));
    
    setProductDetails(prev => {
      const updatedImages = [...prev.images];
      updatedImages[0] = null;
      return {
        ...prev,
        images: updatedImages.filter(Boolean)
      };
    });
  };

  const handleDeleteOtherImage = (index) => {
    setImageDisplay(prev => {
      const updatedAdditionalImages = [...prev.additionalImages];
      updatedAdditionalImages[index] = placeholderImage;
      return {
        ...prev,
        additionalImages: updatedAdditionalImages
      };
    });
    
    setProductDetails(prev => {
      const updatedImages = [...prev.images];
      updatedImages[index + 1] = null;
      return {
        ...prev,
        images: updatedImages.filter(Boolean)
      };
    });
  };

  // Render additional images method (similar to previous implementation)
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

  // Render loading state
  if (categoriesLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "0" }}>
      {/* Breadcrumb Section */}
      <div
        className="d-flex justify-content-between align-items-center p-4"
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
          <Nav.Link as={Link} to="/admin/products" className="me-2 opacity-50">
            All Products
          </Nav.Link>

          <span> &gt; </span>
          <span className="ms-2"> Add Products</span>
        </h4>
      </div>

      {/* Main Form Section */}
      {isSubmitting ? (
        <div 
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
        </div>
      ) : (
        <div
          className="d-flex mx-4 px-4"
          style={{ backgroundColor: "white", marginTop: "20px" }}
        >
          {/* Left Section */}
          <div className="w-50 pe-4 py-4 px-4">
            <form>
              {/* Project Name Input */}
              <div>
                <label
                  style={{
                    color: "rgba(71, 71, 71, 0.51)",
                    display: "block",
                    marginTop: "10px",
                    fontSize: "16px",
                  }}
                >
                  Project Name *
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
                  required
                />
              </div>

              {/* Description Textarea */}
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

              {/* Category and Subcategory Dropdowns */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                {/* Category Dropdown */}
                <label
                  style={{
                    flex: "1",
                    color: "rgba(71, 71, 71, 0.51)",
                    display: "block",
                    marginTop: "20px",
                    marginBottom: "10px",
                  }}
                >
                  Category *:
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
                    required
                  >
                    <option value="">Select Category</option>
                    {categories && categories.map((category) => (
                      <option key={category._id} value={category._id}> 
                        {category.name}
                      </option>
                    ))}
                  </select>
                </label>

                {/* Subcategory Dropdown */}
                <label
                  style={{
                    flex: "1",
                    color: "rgba(71, 71, 71, 0.51)",
                    display: "block",
                    marginTop: "20px",
                    marginBottom: "10px",
                  }}
                >
                  Subcategory:
                  <select
                    value={productDetails.subcategoryId || ""}
                    onChange={handleSubcategoryChange}
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                    disabled={!productDetails.categoryId || subcategoriesLoading}
                  >
                    <option value="">
                      {!productDetails.categoryId 
                        ? "Select Category First" 
                        : subcategoriesLoading 
                          ? "Loading..." 
                          : "Select Subcategory"}
                    </option>
                    {subCategories && subCategories.map((subcategory) => (
      <option key={subcategory._id} value={subcategory._id}> 
        {subcategory.name}
      </option>
    ))}
                  </select>
                </label>
              </div>

              {/* Brand Input */}
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
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                  }}
                >
                  Brand:
                  <input
                    type="text"
                    name="brand"
                    value={productDetails.brand}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "8px",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#757575",
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      marginTop: "5px",
                    }}
                  />
                </label>

                <label
                  style={{
                    flex: "1",
                    color: "rgba(71, 71, 71, 0.51)",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                  }}
                >
                  Project Code:
                  <input
                    type="text"
                    name="ProjectCode"
                    value={productDetails.ProjectCode}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "8px",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#757575",
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      marginTop: "5px",
                    }}
                  />
                </label>
              </div>

              {/* Visibility Checkbox */}
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginTop: "20px",
                  padding: "7px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label
                  style={{
                    color: "rgba(71, 71, 71, 0.51)",
                    display: "block",
                    paddingLeft: "6px",
                    flex: 1,
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
                    marginRight: "6px",
                    transform: "scale(1.5)",
                    cursor: "pointer",
                  }}
                />
              </div>
            </form>
          </div>

          {/* Right Section - Image Upload */}
          <div className="ps-4 py-4">
            <div>
              {/* Main Image Upload */}
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
                    width: "400px",
                    height: "400px",
                    objectFit: "cover",
                    border: "1px solid #ddd",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    document.getElementById("mainImageInput").click()
                  }
                />
                <button
                  onClick={handleDeleteMain}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "rgba(255, 224, 224, 0.56)",
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
                  style={{ display: "none" }}
                  onChange={handleMainImageUpload}
                />
              </div>

              {/* Additional Images */}
              <div style={{ marginTop: "10px" }}>
                {renderAdditionalImages()}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 d-flex justify-content-end">
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#113DBC",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <div style={{ paddingRight: "10px" }}></div>
              <Button
                style={{
                  backgroundColor: "#184BD3",
                  border: "none",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </div>
            <AlertSuccesMessage message={message} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProject;