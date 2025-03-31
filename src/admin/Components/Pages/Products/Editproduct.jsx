import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertSuccesMessage from "../../common/MessageSuccesAlert";
import Spinner from 'react-bootstrap/Spinner';
import useAddProductApi from "../../../hooks/useAddProduct";
import useFetchCategories from "../../../hooks/useAllProductApi";

const EditProductScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { editProduct, loading, error, success } = useAddProductApi();  const { 
    categories, 
    subCategories,
    loading: categoriesLoading, 
    error: categoriesError,
    fetchSubCategories,
    subcategoriesLoading
  } = useFetchCategories();

  const [productDetails, setProductDetails] = useState({
    id: item._id,
    productName: item.productName || "Unnamed",
    productDescription: item.description || "",
    categoryId: item.categoryId || "", // Store categoryId for filtering
    category: item.categoryName || "Uncategorized",
    subcategoryId: item.subCategoryId || "", // Store categoryId for filtering
    subCategory: item.subCategoryName || "Uncategorized",
    brand: item.brand || "N/A",
    productCode: item.productCode || "",
    displayInHome: item?.displayInHome || false,
    images: item?.image || [], // Keep all images, don't slice
  });
  const placeholderImage = "https://placehold.co/600x400/EEE/31343C";
  const prevCategoryIdRef = useRef(null); // Track previous categoryId to avoid redundant calls

  const [imageDisplay, setImageDisplay] = useState(() => {
    const imagesArray = item?.image || [];
    const mainImage = imagesArray.length > 0 ? imagesArray[0] : placeholderImage;
    const additionalImages = [...Array(3)].map((_, index) => 
      (index + 1) < imagesArray.length ? imagesArray[index + 1] : placeholderImage
    );
    return { mainImage, additionalImages };
  });

   

useEffect(() => {
    // Only fetch subcategories if categoryId has changed and is valid
    if (productDetails.categoryId && productDetails.categoryId !== prevCategoryIdRef.current) {
      fetchSubCategories(productDetails.categoryId);
      prevCategoryIdRef.current = productDetails.categoryId; // Update the ref after fetching
    }
  }, [productDetails.categoryId, fetchSubCategories]);

  const handleEdit = () => setIsEditing(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Category change handler
  const handleCategoryChange = (e) => {
    const selectedCategoryId = e.target.value;
    const selectedCategory = categories.find(cat => cat._id === selectedCategoryId);
    setProductDetails((prev) => ({
      ...prev,
      categoryId: selectedCategoryId,
      category: selectedCategory ? selectedCategory.name : "",
      subcategoryId: "", // Reset subcategory
      subCategory: ""
    }));
  };
  const handleSubcategoryChange = (e) => {
    const selectedSubcategoryId = e.target.value;
    const selectedSubcategory = subCategories.find(sub => sub._id === selectedSubcategoryId);
    setProductDetails((prev) => ({
      ...prev,
      subcategoryId: selectedSubcategoryId,
      subCategory: selectedSubcategory ? selectedSubcategory.name : ""
    }));
  };

  const handleSave = async () => {
    if (!productDetails.productName || !productDetails.categoryId) {
      setMessage("Product name and category are required.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setIsSubmitting(true);
    try {
      const allImages = [
        imageDisplay.mainImage !== placeholderImage ? imageDisplay.mainImage : null,
        ...imageDisplay.additionalImages.filter(img => img !== placeholderImage)
      ].filter(Boolean);

      const updatedProduct = {
        id: productDetails.id,
        productName: productDetails.productName,
        productDescription: productDetails.productDescription,
        categoryId: productDetails.categoryId,
        categoryName: productDetails.category,
        subcategoryId: productDetails.subcategoryId,
        subCategoryName: productDetails.subCategory,
        productCode: productDetails.productCode,
        isVisible: productDetails.displayInHome,
        brand: productDetails.brand,
        image: allImages
      };

      await editProduct(updatedProduct);
      setMessage("Product updated successfully.");
      setTimeout(() => {
        setMessage("");
        navigate(-1);
      }, 3000);
    } catch (error) {
      console.error("Error updating product:", error);
      setMessage("Error updating product. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setIsSubmitting(false);
      setIsEditing(false);
    }
  };

 

  const handleImageUpload = (event, isMain = false, index = null) => {
    const file = event.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      setMessage("Please upload a valid image file.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setImageDisplay(prev => {
        if (isMain) {
          return { ...prev, mainImage: imageUrl };
        }
        const updatedAdditionalImages = [...prev.additionalImages];
        updatedAdditionalImages[index] = imageUrl;
        return { ...prev, additionalImages: updatedAdditionalImages };
      });
    };
    reader.readAsDataURL(file);
  };
  const handleDeleteMain = () => {
    setImageDisplay(prev => ({ ...prev, mainImage: placeholderImage }));
  };
  const handleDeleteOtherImage = (index) => {
    setImageDisplay(prev => {
      const updatedAdditionalImages = [...prev.additionalImages];
      updatedAdditionalImages[index] = placeholderImage;
      return { ...prev, additionalImages: updatedAdditionalImages };
    });
  };

  const handleCancel = () => {
    navigate(-1);
    setIsEditing(false);
  };
  
  if (categoriesLoading || loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
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
          <Nav.Link as={Link} to="/admin/products" className="me-2 opacity-50">
            All Products
          </Nav.Link>

          <span> &gt; </span>
          <span className="ms-2"> Edit Products</span>
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
                Product Name *
              </label>
              <input
                 type="text"
                 name="productName"
                 value={productDetails.productName}
                 onChange={handleChange}
                disabled={!isEditing} // Disable input when not editing
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
                  name="productDescription"
                  value={productDetails.productDescription}
                  onChange={handleChange}
                  disabled={!isEditing} // Disable input when not editing
                  style={{
                    width: "100%",
                    padding: "5px",
                    height: "150px", // Adjusted height
                    color: "rgba(71, 71, 71, 1)",
                    fontSize: "14px",

                    border: "1px solid rgba(224, 224, 224, 1)",
                    borderRadius: "4px", // Optional for rounded edges
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(24, 75, 211, 1)")
                  } // Border color on focus
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(200, 200, 200, 1)")
                  } // Border color on blur
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
                    disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
                  >
                    <option value="">Select Category</option>
                    {categories && categories.map((category) => (
                      <option key={category._id} value={category._id}> 
                        {category.name}
                      </option>
                    ))}
                  </select>
              </label>

              {/* Sub-Category Dropdown */}
              {/* Sub-Category Dropdown */}
              <label
                style={{
                  flex: "1",
                  color: "rgba(71, 71, 71, 0.51)",
                  display: "block",
                }}
              >
                Sub-Category:
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
                    disabled={!productDetails.categoryId || subcategoriesLoading || !isEditing}
                    >
                  <option value="">
                    {!productDetails.categoryId ? "Select Category First" : 
                     subcategoriesLoading ? "Loading..." : "Select Subcategory"}
                  </option>
                  {subCategories?.map((subcategory) => (
                    <option key={subcategory._id} value={subcategory._id}>{subcategory.name}</option>
                  ))}
                  </select>
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
                  display: "block",
                  marginTop: "10px", // Adjust the margin as needed
                }}
              >
                Product Code:
                <input
                  type="text"
                  name="productCode"
                  value={productDetails.productCode}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px", // Adjust padding for input field
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#757575",
                    backgroundColor: "white", // Set background color to white
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Same box-shadow as dropdown
                    cursor: "pointer", // Add cursor pointer for better UX
                  }}
                  disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
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
                  fontSize: "14px",

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
                name="displayInHome"
                checked={productDetails.displayInHome}  // Fixed: Changed from isVisible to displayInHome
                disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
                onChange={handleChange}
                style={{
                  marginRight: "6px", // Margin for spacing on the right
                  transform: "scale(1.5)", // Scales the checkbox by 1.5 times (you can adjust this value)
                  cursor: "pointer", // Optional: To improve UX, change cursor on hover
                }}
              />
            </div>

            {/* <div
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
                Display in Trending
              </label>
              <input
                type="checkbox"
                name="displayInTrending"
                checked={productDetails.displayInTrending}
                disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
                onChange={handleChange}
                style={{
                  marginRight: "6px", // Margin for spacing on the right
                  transform: "scale(1.5)", // Scales the checkbox by 1.5 times (you can adjust this value)
                  cursor: "pointer", // Optional: To improve UX, change cursor on hover
                }}
              />
            </div> */}
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
                  src={imageDisplay.mainImage}
                  alt="Main"
                disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
                style={{
                  width: "400px", // Fixed width
                  height: "400px", // Fixed height
                  objectFit: "cover", // Ensures the image fills the area while maintaining its aspect ratio
                  border: "1px solid #ddd",
                  padding: "5px",
                  cursor: "pointer",
                }}
                onClick={() => isEditing && 
                  document.getElementById("mainImageInput").click()
                } // Trigger file input click
              />
              {isEditing && (
                <button
                  onClick={handleDeleteMain}
                  disabled={!isEditing} // Disable button if not in editing mode
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
              )}

              <input
                disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
                type="file"
                id="mainImageInput"
                accept="image/*"
                style={{ display: "none" }} // Hidden file input
                onChange={(e) => handleImageUpload(e, true)}                />
            </div>

            {/* Display other images */}
            <div
              className="d-flex"
              style={{ gap: "10px", marginTop: "10px", paddingLeft: "50px" }}
            >
              {imageDisplay.additionalImages.map((img, index) => (
                <div
                  key={index}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <img
                    src={img}
                    disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
                    alt={`Image-${index + 1}`}
                    style={{
                      width: "110px",
                      height: "110px",
                      border: "1px solid #ddd",
                      padding: "5px",
                      cursor: isEditing ? "pointer" : "default",
                    }}
                    onClick={() => isEditing && document.getElementById(`otherImageInput-${index}`).click()}
                  />
                  {isEditing && (
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
                  )}
                  <input
                    type="file"
                    disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
                    id={`otherImageInput-${index}`}
                    accept="image/*"
                    style={{ display: "none" }} // Hidden file input
                    onChange={(e) => handleImageUpload(e, false, index)}
                    />
                </div>
              ))}
            </div>
          </div>
          {/* Display other images */}

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
                {" "}
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
                    backgroundColor: "transparent", // Background color
                    border: "none", // Removes border
                    color: "#113DBC", // Text color
                    fontSize: "16px", // Font size
                    fontWeight: 600, // Font weight
                    textDecoration: "none", // Ensures no text decoration
                  }}
                  onClick={handleCancel}
                  disabled={isSubmitting}
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

export default EditProductScreen;
