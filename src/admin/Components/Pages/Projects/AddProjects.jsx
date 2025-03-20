import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertSuccesMessage from "../../common/MessageSuccesAlert";
import useAddProjectApi from "../../../hooks/useAddProjectApi.js";
import useFetchCategories from "../../../hooks/useAllProjectApi"; 

const categories = ["Electronics", "Furniture", "Clothing", "Toys"];
const brands = ["Samsung", "Ikea", "Nike", "Lego"];


const AddProject = () => {
  const { addProject, loading, error, success } = useAddProjectApi();
 const {
    categories,
    loading: Loading,
    error: categoriesError,
  } = useFetchCategories();
  const [productDetails, setProductDetails] = useState({
    projectName: "",
    projectDescription: "",
    categoryId: "",
    ProjectCode: "",
    isVisible: false,
    brand:"",
    images: [],
  });

  // Handle form input changes

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleSave = async () => {
    await addProject(productDetails);
  };

  const navigate = useNavigate();

  const [image, setImage] = useState({
    image: "https://placehold.co/600x400/EEE/31343C",
    images: [
      "https://placehold.co/600x400/EEE/31343C",
      "https://placehold.co/600x400/EEE/31343C",
      "https://placehold.co/600x400/EEE/31343C",
    ],
  });

  const [message, setMessage] = useState("");

  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
  
    setProductDetails((prevState) => ({
      ...prevState,
      categoryId: selectedCategoryId, // Store only the _id as a string
    }));
  };

  const handleBrandChange = (event) => {
    const { value } = event.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      brand: value, // Update the selected brand in the product details
    }));
  };

  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage((prevState) => {
          const updatedImages = [e.target.result, ...prevState.images]; // Ensure main image is first
  
          setProductDetails((prevDetails) => ({
            ...prevDetails,
            images: updatedImages, // Update images in productDetails
          }));
  
          return { 
            image: e.target.result, 
            images: updatedImages, 
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
        setImage((prevState) => {
          const updatedImages = [...prevState.images];
          updatedImages[index + 1] = e.target.result;
  
          setProductDetails((prevDetails) => ({
            ...prevDetails,
            images: updatedImages, // Ensure updated images are stored in productDetails
          }));
  
          return { 
            ...prevState, 
            images: updatedImages, 
          };
        });
      };
      reader.readAsDataURL(file);
    }
  };
  
  
  const handleDeleteMain = () => {
    setImage((prevState) => {
      const updatedImages = prevState.images.length > 1 ? prevState.images.slice(1) : [];
      
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        images: updatedImages, // Ensure deleted image is reflected in productDetails
      }));
  
      return { 
        image: "https://placehold.co/600x400/EEE/31343C", 
        images: updatedImages,
      };
    });
  };

  
  const handleDeleteOtherImage = (index) => {
    setImage((prevState) => {
      const updatedImages = [...prevState.images];
      updatedImages.splice(index + 1, 1); // Remove the selected image
  
      return { ...prevState, images: updatedImages };
    });
  };
  

  const handleCancel = () => {
    navigate(-1); // Navigate back without saving
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
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}> 
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>

              {/* <label
                style={{
                  flex: "1",
                  color: "rgba(71, 71, 71, 0.51)",
                  display: "block",
                  marginTop: "10px", // Adjust the margin as needed
                }}
              >
                Brand:
                <input
                type="text"
                name="brand"
                value={productDetails.ProjectCode}
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
              </label> */}
            {/* </div>

            <div
              style={{
                borderRadius: "5px",
                display: "flex", // Flexbox for alignment
              }}
            > */}
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
        <div className=" ps-4 py-4">
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
                src={image.image}
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

            {/* Display other images */}
            <div
              className="d-flex"
              style={{ gap: "10px", marginTop: "10px", paddingLeft: "50px" }}
            >
              {image.images.map((img, index) => (
                <div
                  key={index}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <img
                    src={img}
                    alt={`image-${index}`}
                    style={{
                      width: "110px",
                      height: "110px",
                      border: "1px solid #ddd",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      document
                        .getElementById(`otherImageInput-${index}`)
                        .click()
                    } // Trigger file input click
                  />

                  <button
                    onClick={() => handleDeleteOtherImage(index)} // Pass the index for other images
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
                    id={`otherImageInput-${index}`}
                    accept="image/*"
                    style={{ display: "none" }} // Hidden file input
                    onChange={(e) => handleOtherImageUpload(e, index)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Display other images */}

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
      </div>
    </div>
  );
};

export default AddProject;
