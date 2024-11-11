import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Table, Form } from "react-bootstrap";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const categories = [
    "All Products",
    "Furniture",
    "Plants",
    "Decorations",
    "Living",
    "Dining",
    "Lighting",
    "Outdoor",
    "Storage",
    "On Sale",
    "Lighting",
    "Outdoor",
    "Storage",
    "On Sale",
  ];

  const productData = [
    {
      id: `#56674`,
      name: "Rigo Solid Wood",
      category: "Furniture",
      subCategory: "Seating",
      brand: "Home Centre",
      image: "https://via.placeholder.com/50",
      onlive: "1",
    },
    {
      id: `#56675`,
      name: "Modern Sofa",
      category: "Furniture",
      subCategory: "Seating",
      brand: "Furniture Plus",
      image: "https://via.placeholder.com/50",
      onlive: "1",
    },
    {
      id: `#56676`,
      name: "Indoor Plant",
      category: "Plants",
      subCategory: "Greenery",
      brand: "Green Homes",
      image: "https://via.placeholder.com/50",
      onlive: "0",
    },
    {
      id: `#56677`,
      name: "Decorative Vase",
      category: "Decorations",
      subCategory: "Vases",
      brand: "Home Living",
      image: "https://via.placeholder.com/50",
      onlive: "1",
    },
    {
      id: `#56678`,
      name: "Dining Table Set",
      category: "Dining",
      subCategory: "Furniture",
      brand: "Luxury Furnishings",
      image: "https://via.placeholder.com/50",
      onlive: "1",
    },
    {
      id: `#56679`,
      name: "Wall Art",
      category: "Decorations",
      subCategory: "Art",
      brand: "DecorCraft",
      image: "https://via.placeholder.com/50",
      onlive: "0",
    },
    {
      id: `#56680`,
      name: "LED Ceiling Light",
      category: "Lighting",
      subCategory: "Ceiling Lights",
      brand: "Bright Lights",
      image: "https://via.placeholder.com/50",
      onlive: "0",
    },
    {
      id: `#56681`,
      name: "Outdoor Chair",
      category: "Outdoor",
      subCategory: "Furniture",
      brand: "Outdoor Living",
      image: "https://via.placeholder.com/50",
      onlive: "1",
    },
    {
      id: `#56682`,
      name: "Storage Shelf",
      category: "Storage",
      subCategory: "Shelves",
      brand: "Space Saver",
      image: "https://via.placeholder.com/50",
      onlive: "1",
    },
    {
      id: `#56683`,
      name: "Table Lamp",
      category: "Lighting",
      subCategory: "Lamps",
      brand: "Lighting World",
      image: "https://via.placeholder.com/50",
      onlive: "0",
    },
  ];

  const [items, setItems] = useState(productData);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [message, setMessage] = useState("");
  const tabsRef = useRef(null);
  const [isOnLive, setIsOnLive] = useState(false);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleCheckboxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleGlobalToggle = () => {
    setIsOnLive((prevIsOnLive) => !prevIsOnLive);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(items.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleRemoveSelected = () => {
    if (selectedItems.length > 0) {
      const updatedItems = items.filter(
        (item) => !selectedItems.includes(item.id)
      );
      setItems(updatedItems);
      setMessage(`${selectedItems.length} item removed`);
      setSelectedItems([]);
    } else {
      setMessage("No items selected to remove.");
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === "right" ? 100 : -100;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredItems =
    selectedCategory === "All Products"
      ? items.filter((item) => (isOnLive ? item.onlive === "1" : true))
      : items
          .filter((item) => item.category === selectedCategory)
          .filter((item) => (isOnLive ? item.onlive === "1" : true));

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="d-flex align-items-center mb-0">
          <Nav.Link as={Link} to="/" className="p-0 me-2 opacity-50">
            Home
          </Nav.Link>
          <span> &gt; </span> {/* This ensures the ">" symbol is inline */}
          <span className="ms-2">All Products</span>
        </h4>

        <Button
          size="sm"
          onClick={() => handleRemoveSelected()}
          variant="primary" // Makes the button blue
          className="text-white" // Makes the text white
        >
          <i className="bi bi-plus-circle"></i> Add Product
        </Button>
      </div>

      {/* Add a custom gap here */}
      <div style={{ marginTop: "40px", color: "gray" }}></div>

      {/* Category Tabs */}
      <div className="d-flex align-items-center my-3">
        <div
          className="d-flex overflow-hidden mx-3"
          ref={tabsRef}
          style={{
            maxWidth: "1000px", // Control the visible width
            overflowX: "auto", // Enable horizontal scrolling
            whiteSpace: "nowrap",
            height: "40px", // Set a fixed height for category tabs
          }}
        >
          {categories.map((category, index) => (
            <Button
            key={index}
            variant={selectedCategory === category ? "primary" : "btn-light"}
            className="mx-1"
            onClick={() => handleCategorySelect(category)}
            style={{
              backgroundColor: selectedCategory === category ? "#E0E8FF" : "white", // Custom background color
              color: selectedCategory === category ? "#184BD3" : "#011140", // Custom text color
              border: "none" // Removes border


            }}
          >
            {category}
          </Button>
          
          ))}
        </div>
        <Button
          variant="light"
          onClick={() => scrollTabs("left")}
          style={{
            borderRadius: "50%", // Makes the button circular
            padding: "5px", // Adds space inside the button
            margin: "0 10px", // Adds space between buttons and other elements
            border: "1px solid #ddd", // Optional: Adds a border to the circular button
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional: Adds shadow to the button
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>

        <Button
          variant="light"
          onClick={() => scrollTabs("right")}
          style={{
            borderRadius: "50%", // Makes the button circular
            padding: "5px", // Adds space inside the button
            margin: "0 10px", // Adds space between buttons and other elements
            border: "1px solid #ddd", // Optional: Adds a border to the circular button
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional: Adds shadow to the button
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </div>

      {/* Product Table */}
      <Table  hover responsive>
        <thead>
          <tr>
            <th
              style={{
                height: "60px",
                padding: "20px 10px",
                borderBottom: true,
                fontWeight: "normal",
                color: "#474747",
              }}
            >
              <Form.Check type="checkbox" onChange={handleSelectAll} />
            </th>
            <th
              style={{
                height: "60px",
                padding: "20px 10px",
                borderBottom: true,
                fontWeight: "normal",
                color: "#474747",
              }}
            >
              Product ID
            </th>
            <th
              style={{
                height: "60px",
                padding: "20px 10px",
                borderBottom: true,
                fontWeight: "normal",
                color: "#474747",
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: "20px 10px",
                borderBottom: true,
                fontWeight: "normal",
                color: "#474747",
              }}
            >
              Image
            </th>
            <th
              style={{
                height: "60px",
                padding: "20px 10px",
                borderBottom: true,
                fontWeight: "normal",
                color: "#474747",
              }}
            >
              Category
            </th>
            <th
              style={{
                height: "60px",
                padding: "20px 10px",
                borderBottom: true,
                fontWeight: "normal",
                color: "#474747",
              }}
            >
              Sub-Category
            </th>
            <th
              style={{
                height: "60px",
                padding: "20px 10px",
                borderBottom: true,
                fontWeight: "normal",
                color: "#474747",
              }}
            >
              Brand
            </th>
            <th style={{ border: "none", width: "140px" ,  borderBottom: true,}}>
              <div
                className="global-toggle d-flex align-items-center"
                style={{ width: "100%" }}
              >
                <label className="switch" style={{ width: "40px" }}>
                  <input
                    type="checkbox"
                    checked={isOnLive}
                    onChange={handleGlobalToggle}
                  />
                  <span className="slider round"></span>
                </label>
                <span className="ms-2" style={{ marginLeft: "10px" }}>
                  On live
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              
              <td style={{borderBottom: true, }}>
                <Form.Check
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              <td style={{borderBottom: true, }}>{item.id}</td>
              <td style={{borderBottom: true, }}>{item.name}</td>
              <td style={{borderBottom: true, }}>
                <img src={item.image} alt={item.name} width="50" />
              </td>
              <td style={{borderBottom: true, }}>{item.category}</td>
              <td style={{borderBottom: true, }}>{item.subCategory}</td>
              <td style={{borderBottom: true, }}>{item.brand}</td>
              <td style={{borderBottom: true, }}>
                <Button
                  size="sm"
                  onClick={() => {}}
                  variant="light"
                >
                  <i className="bi bi-pencil" style={{ color: "blue" }}></i>{" "}
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/*message section*/}
      {message && (
        <div
          className="alert alert-danger mt-3"
          role="alert"
          style={{
            position: "fixed", // Position at the bottom of the screen
            bottom: "20px", // Add some spacing from the bottom
            left: "50%", // Center the alert horizontally
            transform: "translateX(-50%)", // Center the alert horizontally
            maxWidth: "400px", // Limit the width of the alert
            width: "auto", // Adjust width based on content
            zIndex: 9999, // Make sure it appears above other content
          }}
        >
          {message}
        </div>
      )}

      {/* Footer section */}
      {selectedItems.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            backgroundColor: "#f8f9fa",
            padding: "0px 20px",
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #ddd",
            boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)", // Adjusted to remove side shadows
            height: "80px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1100px",
            }}
          >
            {/* Left: Number of selected items */}
            <span>{selectedItems.length} Selected</span>

            {/* Right: Remove button */}
            <div>
              <Button variant="danger" onClick={handleRemoveSelected}>
                <i className="bi bi-trash" style={{ marginRight: "15px" }}></i>
                Remove
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
