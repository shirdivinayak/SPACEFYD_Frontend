import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertSuccesMessage from "../../common/MessageSuccesAlert";

const categories = ["Electronics", "Furniture", "Clothing", "Toys"];
const subCategories = {
  Electronics: ["Phones", "Laptops", "Cameras"],
  Furniture: ["Chairs", "Tables", "Beds"],
  Clothing: ["Men", "Women", "Kids"],
  Toys: ["Indoor", "Outdoor"],
};
const brands = ["Samsung", "Ikea", "Nike", "Lego"];

const EditProductScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  // Initialize state with product data or fallback values
  const [productDetails, setProductDetails] = useState({
    name: item?.name || "",
    description: item?.description || "",
    category: item?.category || categories[0],
    subCategory: item?.subCategory || "",
    brand: item?.brand || brands[0],
    productCode: item?.productCode || "",
    displayInHome: item?.displayInHome || false,
    displayInTrending: item?.displayInTrending || false,
  });
  const [image, setImage] = useState({
    image: "https://via.placeholder.com/400", // Example main image URL
    images: [
      "https://via.placeholder.com/100", // Example thumbnail image URLs
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],
  });
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true); // Switch to edit mode
  };

  useEffect(() => {
    if (item && item.category) {
      setProductDetails((prev) => ({
        ...prev,
        subCategory: item.subCategory || subCategories[item.category][0],
      }));
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    console.log("Item saved:", productDetails);
    setMessage("Category updated successfully.");
    setTimeout(() => {
      setMessage("");
    }, 3000);
    setIsEditing(false); // Exit edit mode
  };
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setProductDetails((prev) => ({
      ...prev,
      category: selectedCategory,
      subCategory: subCategories[selectedCategory]?.[0] || "", // Default to empty if no subcategory
    }));
  };

  const handleSubCategoryChange = (e) => {
    const selectedSubCategory = e.target.value;
    setProductDetails((prev) => ({
      ...prev,
      subCategory: selectedSubCategory,
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
        setImage((prevState) => ({ ...prevState, image: e.target.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setMessage("Please upload a valid image file.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleOtherImageUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage((prevState) => {
          const updatedImages = [...prevState.images];
          updatedImages[index] = e.target.result;
          return { ...prevState, images: updatedImages };
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDeleteMain = () => {
    setImage((prevState) => ({
      ...prevState,
      image: "https://via.placeholder.com/448",
    }));
  };
  const handleDeleteOtherImage = (index) => {
    setImage((prevState) => {
      const updatedImages = [...prevState.images];
      updatedImages[index] = "https://via.placeholder.com/100"; // Reset to placeholder
      return { ...prevState, images: updatedImages };
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
          <Nav.Link as={Link} to="/" className="me-2 opacity-50">
            Home
          </Nav.Link>
          <span style={{ marginRight: "8px" }}>&gt;</span>
          <Nav.Link as={Link} to="/products" className="me-2 opacity-50">
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
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={productDetails.name}
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
                  name="description"
                  value={productDetails.description}
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
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown"
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      fontWeight: "400",
                      fontSize: "14px",

                      color: "#757575", // Updated text color
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "8px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center", // Align text and icon properly
                    }}
                    disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#757575",
                      }}
                    >
                      {productDetails.category || "Select"}{" "}
                      {/* Displays selected category or placeholder */}
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
                        {category}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
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
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-subcategory"
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#757575", // Updated text color
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "8px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center", // Align text and icon properly
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#757575",
                      }}
                      disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
                    >
                      {productDetails.subCategory || "Select"}{" "}
                      {/* Displays selected subcategory or placeholder */}
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ width: "100%" }}>
                    {(subCategories[productDetails.category] || []).map(
                      (sub, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() =>
                            handleSubCategoryChange({ target: { value: sub } })
                          }
                          style={{
                            fontSize: "14px",
                            fontWeight: "400",
                            color: "#757575",
                            padding: "8px",
                            cursor: "pointer",
                          }}
                        >
                          {sub}
                        </Dropdown.Item>
                      )
                    )}
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
              <label
                style={{
                  flex: "1",
                  color: "rgba(71, 71, 71, 0.51)",
                  display: "block",
                  marginTop: "20px", // Adjust the margin as needed
                  marginBottom: "10px", // Space between label and dropdown
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
                      color: "#757575", // Updated text color
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "8px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Same box-shadow as dropdown
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center", // Align text and icon properly
                    }}
                    disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#757575",
                      }}
                    >
                      {productDetails.brand || "Select"}{" "}
                      {/* Displays selected brand or placeholder */}
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
                Display in Home Screen
              </label>

              <input
                type="checkbox"
                name="displayInHome"
                checked={productDetails.displayInHome}
                disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
                onChange={handleChange}
                style={{
                  marginRight: "6px", // Margin for spacing on the right
                  transform: "scale(1.5)", // Scales the checkbox by 1.5 times (you can adjust this value)
                  cursor: "pointer", // Optional: To improve UX, change cursor on hover
                }}
              />
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
                disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
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
                    disabled={!isEditing} // Disable the dropdown toggle if not in editing mode
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
                    onChange={(e) => handleOtherImageUpload(e, index)}
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
