import React, { useState, useRef, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useFetchProducts from "../../../hooks/useAllProjectlistApi"; 
import useFetchCategories from "../../../hooks/useAllProjectApi"; 
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertMessage from "../../common/MessageAlert";

const ProductTable = () => {
  const navigate = useNavigate();
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useFetchProducts();
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetchCategories();

  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [message, setMessage] = useState("");
  const tabsRef = useRef(null);
  const [isOnLive, setIsOnLive] = useState(false);
  // Setting the default selected category
  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory("All Projects");
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (products) {
      const formattedProducts = products.map((item) => ({
        id: item._id,
        name: item.projectName || "Unnamed",
        category: item.categoryName || "Uncategorized",
        location: item.location || "N/A",
        sqrFt: item.ProjectCode || "N/A",
        image: item.image || null,
        onlive: item.isVisible || "false",
      }));
      setItems(formattedProducts.reverse());
    }
  }, [products]);

  // Handling message timeout
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [message]);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const handleAdd = (Products) => {
    navigate("/projects/addprojects");
  };

  const handleGlobalToggle = () => {
    setIsOnLive((prev) => !prev);
  };

  const handleSelectAll = (e) => {
    setSelectedItems(e.target.checked ? items.map((item) => item.id) : []);
  };

  const handleEdit = (s) => {
    navigate("/projects/editprojects", {
      state: { item: items.find((i) => i.id === s) },
    });
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

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };


  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === "right" ? 120 : -120; // Slightly larger scroll amount
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (productsLoading || categoriesLoading) return <p>Loading...</p>;
  if ( categoriesError  || !categories) {
    return <p>Error loading data or no data available</p>;
  };

  const filteredItems =
  selectedCategory === "All Projects"
    ? items.filter((item) => (isOnLive ? item.onlive === "true" : true))
    : items.filter(
        (item) =>
          item.category === selectedCategory &&
          (isOnLive ? item.onlive === "true" : true)
      );


  const filteredAndSortedCategories = categories
  ?.filter((category) => category.name)
  ?.concat()
  ?.sort((a, b) => {
    if (a.name === "All Projects") return -1;
    if (b.name === "All Projects") return 1;
    return a.name.localeCompare(b.name);
  });


  return (
    <div className="container " style={{ padding: "0" }}>
      <div
        className="d-flex justify-content-between align-items-center p-4"
        style={{ backgroundColor: "white", minHeight: "70px", padding: "0" }}
      >
        <h4
          className="d-flex align-items-center mb-0 m-0"
          style={{ fontSize: "20px" }}
        >
          <Nav.Link as={Link} to="/" className="me-2 opacity-50">
            Home
          </Nav.Link>
          <span> &gt; </span> {/* This ensures the ">" symbol is inline */}
          <span className="ms-2">All Projects</span>
        </h4>

        <Button
          height="12px"
          onClick={() => handleAdd()}
          variant="primary" // Keeps the button style, but we'll override the color
          className="text-white"
          style={{
            backgroundColor: "#184BD3", // Replace with any custom color (example: orange-red)
            border: "none", // Match border color to the background color
          }}
        >
          <i className="bi bi-plus-circle"></i> Add Project
        </Button>
      </div>

      {/* Add a custom gap here */}
      <div style={{ marginTop: "22px" }}></div>

      {/* Category Tabs */}
      <div
        className="d-flex align-items-center  mx-4 px-4"
        style={{ backgroundColor: "white" }}
      >
        <div className="m-3">
          <div
            className="d-flex overflow-hidden"
            ref={tabsRef}
            style={{
              paddingRight: "90px",

              maxWidth: "950px", // Control the visible width
              overflowX: "auto", // Enable horizontal scrolling
              whiteSpace: "nowrap",
              height: "40px", // Set a fixed height for category tabs
            }}
          >
          {filteredAndSortedCategories.map((category) => (
              <Button
                key={category.name}
                variant={
                  selectedCategory === category ? "primary" : "btn-light"
                }
                className="mx-1"
                onClick={() => handleCategorySelect(category.name)}
                style={{
                  backgroundColor:
                    selectedCategory === category.name ? "#E0E8FF" : "white", // Custom background color
                  color:
                    selectedCategory === category.name ? "#184BD3" : "#011140", // Custom text color
                  border: "none", // Match border color to the background color
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                {category.name}
              </Button>
            ))}
          </div>
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
            width: "24px",
            height: "24px",
            display: "flex", // Enables flexbox
            justifyContent: "center", // Centers content horizontally
            alignItems: "center",
          }}
        >
          <i className="bi bi-chevron-compact-left"></i>
        </Button>

        <Button
          variant="light"
          onClick={() => scrollTabs("right")}
          style={{
            borderRadius: "15px", // Makes the button circular
            padding: "5px", // Adds space inside the button
            margin: "0 10px", // Adds space between buttons and other elements
            border: "1px solid #ddd", // Optional: Adds a border to the circular button
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional: Adds shadow to the button
            width: "24px",
            height: "24px",
            display: "flex", // Enables flexbox
            justifyContent: "center", // Centers content horizontally
            alignItems: "center",
          }}
        >
          <i className="bi bi-chevron-compact-right"></i>
        </Button>
      </div>

      {/* Project Table */}
      <div className="  mx-4 px-4" style={{ backgroundColor: "white" }}>
        <Table hover responsive>
          <thead>
            <tr>
              <th
                style={{
                  height: "60px",
                  padding: "20px 10px",
                  borderBottom: true,
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#474747",
                }}
              >
                <Form.Check
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedItems.length === items.length && items.length > 0}
                  style={{
                    transform: "scale(1.2)", // Scale the checkbox size
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                />
              </th>
              <th
                style={{
                  height: "60px",
                  padding: "20px 10px",
                  borderBottom: true,
                  fontWeight: 500,
                  fontSize: 14,

                  color: "#474747",
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: "20px 10px",
                  borderBottom: true,
                  fontWeight: 500,
                  fontSize: 14,
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
                  fontWeight: 500,
                  fontSize: 14,
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
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#474747",
                }}
              >
                Location
              </th>
              <th
                style={{
                  height: "60px",
                  padding: "20px 10px",
                  borderBottom: true,
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#474747",
                }}
              >
                Sqr ft
              </th>
              <th
                style={{ border: "none", width: "140px", borderBottom: true }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{
                    width: "100%",
                    border: "1px solid #ddd", // Adds a light border
                    padding: "10px", // Optional: Adds padding inside the div
                    borderRadius: "5px", // Optional: Adds rounded corners to the div
                  }}
                >
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="liveToggle"
                      checked={isOnLive}
                      onChange={handleGlobalToggle}
                      style={{
                        backgroundColor: isOnLive ? "#011140" : "#ccc", // Color when active or inactive
                        width: "42px", // Increase the width of the switch
                        height: "24px", // Increase the height of the switch
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="liveToggle"
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        marginLeft: "10px",
                      }}
                    >
                      On live
                    </label>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
          {filteredItems.map((item) => (
           
              <tr key={item.id}>
                <td style={{ borderBottom: true }}>
                  <Form.Check
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    style={{
                      transform: "scale(1.2)", // Scale the checkbox size
                      fontSize: "20px",
                      paddingLeft: "10px",
                    }}
                  />
                </td>
                <td style={{ borderBottom: true }}>{item.name}</td>
                <td style={{ borderBottom: true }}>
                  <img
                    src={item.image || "/default-image.png"}
                    alt={item.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td style={{ borderBottom: true }}>{item.category}</td>
                <td style={{ borderBottom: true }}>{item.location}</td>
                <td style={{ borderBottom: true }}>{item.sqrFt}</td>
                <td style={{ borderBottom: true }}>
                  <Button
                    size="sm"
                    onClick={() => {
                      handleEdit(item);
                    }}
                    style={{
                      color: "blue", // Text color
                      backgroundColor: "transparent", // Background color set to transparent
                      border: "none", // Remove the border if needed
                      // Adjust this to change the size of the text "Edit"
                    }}
                  >
                    <i
                      className="bi bi-pencil"
                      style={{ color: "blue", fontSize: "20px" }}
                    ></i>{" "}
                    {/* Increase icon size */}
                    <span style={{ fontWeight: 500, fontSize: "16px" }}>
                      {" "}
                      Edit
                    </span>{" "}
                    {/* Increase text size */}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/*message section*/}
      <AlertMessage message={message} />

      {/* Footer section */}
      {selectedItems.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "81%",
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
              width: "1220px",
            }}
          >
            {/* Left: Number of selected items */}
            <span
              style={{ color: "#011140", fontWeight: 500, fontSize: "22px" }}
            >
              {selectedItems.length} Selected
            </span>

            {/* Right: Remove button */}
            <div>
              <Button
                onClick={handleRemoveSelected}
                style={{
                  backgroundColor: "rgba(194, 0, 0, 0.6)", // 60% opacity
                  border: "none", // Match border color to the background color
                }}
              >
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
