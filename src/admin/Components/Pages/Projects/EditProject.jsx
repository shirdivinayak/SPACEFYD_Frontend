import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertSuccesMessage from "../../common/MessageSuccesAlert";
import useAddProjectApi from "../../../hooks/useAddProjectApi.js";
import useFetchCategories from "../../../hooks/useAllProjectApi.js";

// const categories = ["Electronics", "Furniture", "Clothing", "Toys"];
const subCategories = {
  Electronics: ["Phones", "Laptops", "Cameras"],
  Furniture: ["Chairs", "Tables", "Beds"],
  Clothing: ["Men", "Women", "Kids"],
  Toys: ["Indoor", "Outdoor"],
};
const brands = ["Samsung", "Ikea", "Nike", "Lego"];


const EditProjectScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { editProject, loading, error, success } = useAddProjectApi();
  const {
    categories,
    loading: Loading,
    error: categoriesError,
  } = useFetchCategories();
  // Placeholder image URL
  const placeholderImage = "https://placehold.co/600x400/EEE/31343C";

  // Initialize state with project data or fallback values
  const [projectDetails, setProjectDetails] = useState(() => {
    return {
      id: item?._id || "",
      name: item?.projectName || "",
      description: item?.projectDescription || "",
      category: item?.categoryName || "",
      categoryId: item?.categoryId || "",
      subCategory: item?.subCategory || "",
      brand: item?.brand || "",
      projectCode: item?.ProjectCode || "",
      displayInHome: item?.isVisible || false,
      images: item?.images || []
    };
  });

  // State for managing image display
  const [imageDisplay, setImageDisplay] = useState(() => {
    const imagesArray = item?.images || [];
    const mainImage = imagesArray.length > 0 ? imagesArray[0] : placeholderImage;
    const additionalImages = [...Array(3)].map((_, index) => {
      return (index + 1) < imagesArray.length ? imagesArray[index + 1] : placeholderImage;
    });

    return {
      mainImage: mainImage,
      additionalImages: additionalImages
    };
  });

  const handleEdit = () => {
    setIsEditing(true); // Switch to edit mode
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    setIsSubmitting(true);
    
    try {
      // Combine the main image with additional images for saving
      const allImages = [
        imageDisplay.mainImage !== placeholderImage ? imageDisplay.mainImage : null, 
        ...imageDisplay.additionalImages.filter(img => img !== placeholderImage)
      ].filter(Boolean); // Remove null/undefined values
      
      // Create the data object for the API
      const updatedProject = {
        id: projectDetails.id,
        projectName: projectDetails.name,
        projectDescription: projectDetails.description,
        categoryId: projectDetails.categoryId,
        categoryName: projectDetails.category,
        ProjectCode: projectDetails.projectCode,
        isVisible: projectDetails.displayInHome,
        brand: projectDetails.brand,
        images: allImages
      };
      await editProject(updatedProject);

      // Call your update project API here (replace with your actual API call)
      // await updateProject(updatedProject);
      console.log("Project updated:", updatedProject);
      
      setMessage("Project updated successfully.");
      setTimeout(() => {
        setMessage("");
        navigate(-1); // Navigate back after successful update
      }, 3000);
    } catch (error) {
      console.error("Error updating project:", error);
      setMessage("Error updating project. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setIsSubmitting(false);
      setIsEditing(false); // Exit edit mode
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setProjectDetails((prev) => ({
      ...prev,
      category: selectedCategory,
    }));
  };

  const handleBrandChange = (event) => {
    const { value } = event.target;
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      brand: value,
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
  };

  const handleCancel = () => {
    navigate(-1); // Navigate back without saving
    setIsEditing(false); // Exit edit mode
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
          <Nav.Link as={Link} to="/admin/projects/" className="me-2 opacity-50">
            All projects
          </Nav.Link>

          <span> &gt; </span>
          <span className="ms-2"> Edit Projects</span>
        </h4>
      </div>

      {/* Main Form Section */}
      <div
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
                name="name"
                value={projectDetails.name}
                onChange={handleChange}
                disabled={!isEditing}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(24, 75, 211, 1)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(200, 200, 200, 1)")
                }
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
                  name="description"
                  value={projectDetails.description}
                  onChange={handleChange}
                  disabled={!isEditing}
                  style={{
                    width: "100%",
                    padding: "5px",
                    height: "150px",
                    color: "rgba(71, 71, 71, 1)",
                    fontSize: "14px",
                    border: "1px solid rgba(224, 224, 224, 1)",
                    borderRadius: "4px",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(24, 75, 211, 1)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(200, 200, 200, 1)")
                  }
                />
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginTop: "10px",
                fontSize: "16px",
              }}
            >
              {/* Category Dropdown */}
              <label
                style={{
                  flex: "1",
                  color: "rgba(71, 71, 71, 0.51)",
                  display: "block",
                }}
              >
                Category:
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
                    disabled={!isEditing}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#757575",
                      }}
                    >
                      {projectDetails.category || "Select"}
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ width: "100%" }}>
                    {categories.map((category, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() =>
                          handleCategoryChange({ target: { value: category } })
                        }
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#757575",
                          padding: "8px",
                          cursor: "pointer",
                        }}
                      >
                        {category.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
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
              {/* <label
                style={{
                  flex: "1",
                  color: "rgba(71, 71, 71, 0.51)",
                  display: "block",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              >
                Brand:
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-brand"
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
                    disabled={!isEditing}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#757575",
                      }}
                    >
                      {projectDetails.brand || "Select"}
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ width: "100%" }}>
                    {brands.map((brand) => (
                      <Dropdown.Item
                        key={brand}
                        onClick={() =>
                          handleBrandChange({ target: { value: brand } })
                        }
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#757575",
                          padding: "8px",
                          cursor: "pointer",
                        }}
                      >
                        {brand}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </label> */}

              {/* <label
                style={{
                  flex: "1",
                  color: "rgba(71, 71, 71, 0.51)",
                  display: "block",
                  marginTop: "10px",
                }}
              >
                Project Code:
                <input
                  type="text"
                  name="projectCode"
                  value={projectDetails.projectCode}
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
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                  }}
                  disabled={!isEditing}
                />
              </label> */}
            </div>

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
                  fontSize: "14px",
                  color: "rgba(71, 71, 71, 0.51)",
                  display: "block",
                  paddingLeft: "6px",
                  flex: 1,
                }}
              >
                Display in Home Screen
              </label>

              <input
                type="checkbox"
                name="displayInHome"
                checked={projectDetails.displayInHome}
                disabled={!isEditing}
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
                  width: "400px",
                  height: "400px",
                  objectFit: "cover",
                  border: "1px solid #ddd",
                  padding: "5px",
                  cursor: isEditing ? "pointer" : "default",
                }}
                onClick={() => isEditing && document.getElementById("mainImageInput").click()}
              />
              {isEditing && (
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
              )}

              <input
                disabled={!isEditing}
                type="file"
                id="mainImageInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleMainImageUpload}
              />
            </div>

            {/* Display other images */}
            <div
              className="d-flex flex-wrap"
              style={{ gap: "10px", marginTop: "10px", paddingLeft: "50px" }}
            >
              {imageDisplay.additionalImages.map((img, index) => (
                <div
                  key={index}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <img
                    src={img}
                    alt={`Image-${index + 1}`}
                    style={{
                      width: "110px",
                      height: "110px",
                      objectFit: "cover",
                      border: "1px solid #ddd",
                      padding: "5px",
                      cursor: isEditing ? "pointer" : "default",
                    }}
                    onClick={() => isEditing && document.getElementById(`otherImageInput-${index}`).click()}
                  />
                  {isEditing && (
                    <button
                      onClick={() => handleDeleteOtherImage(index)}
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
                  )}
                  <input
                    type="file"
                    disabled={!isEditing}
                    id={`otherImageInput-${index}`}
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => handleOtherImageUpload(e, index)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 d-flex justify-content-end">
            {!isEditing ? (
              <span
                style={{
                  color: "#113DBC",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "none",
                  marginRight: "50px",
                }}
                onClick={handleEdit}
              >
                <i
                  className="bi bi-pencil"
                  style={{ fontSize: "16px", paddingRight: "10px" }}
                ></i>
                Edit
              </span>
            ) : (
              <>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#113DBC",
                    fontSize: "16px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                  onClick={handleCancel}
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </Button>
              </>
            )}
          </div>
          <AlertSuccesMessage message={message} />
        </div>
      </div>
    </div>
  );
};

export default EditProjectScreen;