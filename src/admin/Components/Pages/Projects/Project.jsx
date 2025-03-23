import React, { useState, useRef, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useFetchProducts from "../../../hooks/useAllProjectlistApi"; 
import useFetchCategories from "../../../hooks/useAllProjectApi"; 
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertMessage from "../../common/MessageAlert";
import Spinner from 'react-bootstrap/Spinner';

const ProductTable = () => {
  const navigate = useNavigate();
  const {
    products,
    loading: productsLoading,
    error: productsError,
    refetch,
  } = useFetchProducts();
  const {
    deleteCategory,
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
  
  const placeholderImage = "https://placehold.co/600x400/EEE/31343C";

  useEffect(() => {
    if (products) {
      const formattedProducts = products.map((item) => ({
        id: item._id,
        projectName: item.projectName || "Unnamed",
        projectDescription: item.projectDescription || "",
        categoryId: item.categoryId || "", // Store categoryId for filtering
        category: item.categories || "Uncategorized",
        brand: item.brand || "N/A",
        image: item?.images?.length > 0 ? item.images[0] : null,
        images: item?.images || [], // Keep all images, don't slice
        isVisible: item.isVisible || false, // Use isVisible property for filtering
        // Pass the entire item to ensure no data is lost
        originalItem: item
      }));
      setItems(formattedProducts.reverse());
    }
  }, [products]);

  // Handling message timeout
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const handleAdd = () => {
    navigate("/admin/projects/addprojects");
  };

  const handleGlobalToggle = () => {
    setIsOnLive((prev) => !prev);
  };

  const handleSelectAll = (e) => {
    setSelectedItems(e.target.checked ? items.map((item) => item.id) : []);
  };

  const handleEdit = (item) => {
    // Pass the entire item object with all properties
    navigate("/admin/projects/editprojects", {
      state: { item: item.originalItem ? item.originalItem : item },
    });
  };
  
  const handleRemoveSelected = async () => {
    if (selectedItems.length > 0) {
      try {
        await deleteCategory(selectedItems);
  
        setItems((prevItems) => prevItems.filter((item) => !selectedItems.includes(item.id)));
        setMessage(`${selectedItems.length} item(s) removed successfully.`);
        setSelectedItems([]);
        refetch();
      } catch (error) {
        setMessage("Failed to remove selected items.");
      }
    } else {
      setMessage("No items selected to remove.");
    }
  };
  
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === "right" ? 120 : -120;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (categoriesLoading) {
    return  <div 
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
  }
  // Fix filtering to properly use categoryId and isVisible
  const filteredItems = items.filter((item) => {
    // First check if the onlive filter is active
    const passesOnliveFilter = !isOnLive || item.isVisible === true;
    
    // Then check category filter - use categoryId for comparison
    const passesCategoryFilter = 
      selectedCategory === "All Projects" || 
      item.categoryId === selectedCategory;
    
    return passesOnliveFilter && passesCategoryFilter;
  });

  // Add "All Projects" to category list if not present
  const allProjectsOption = { _id: "All Projects", name: "All Projects" };
  
  // Ensure categories is an array before attempting to filter/sort
  const filteredAndSortedCategories = categories && Array.isArray(categories)
    ? [allProjectsOption, ...categories.filter(category => category.name)]
      .sort((a, b) => {
        if (a.name === "All Projects") return -1;
        if (b.name === "All Projects") return 1;
        return a.name.localeCompare(b.name);
      })
    : [allProjectsOption];

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
          <Nav.Link as={Link} to="/admin" className="me-2 opacity-50">
            Home
          </Nav.Link>
          <span> &gt; </span>
          <span className="ms-2">All Projects</span>
        </h4>

        <Button
          height="12px"
          onClick={handleAdd}
          variant="primary"
          className="text-white"
          style={{
            backgroundColor: "#184BD3",
            border: "none",
          }}
        >
          <i className="bi bi-plus-circle"></i> Add Project
        </Button>
      </div>

      <div style={{ marginTop: "22px" }}></div>

      {/* Category Tabs */}
      <div
        className="d-flex align-items-center mx-4 px-2"
        style={{ backgroundColor: "white" }}
      >
        <div className="m-3">
          <div
            className="d-flex overflow-hidden"
            ref={tabsRef}
            style={{
              // paddingRight: "90px",
              maxWidth: "950px",
              overflowX: "auto",
              whiteSpace: "nowrap",
              height: "40px",
            }}
          >
            {filteredAndSortedCategories.map((category) => (
              <Button
                key={category._id}
                variant={
                  selectedCategory === category._id ? "primary" : "btn-light"
                }
                className="mx-1"
                onClick={() => handleCategorySelect(category._id)}
                style={{
                  backgroundColor:
                    selectedCategory === category._id ? "#E0E8FF" : "white",
                  color:
                    selectedCategory === category._id ? "#184BD3" : "#011140",
                  border: "none",
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
            borderRadius: "50%",
            padding: "5px",
            margin: "0 10px",
            border: "1px solid #ddd",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            width: "24px",
            height: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i className="bi bi-chevron-compact-left"></i>
        </Button>

        <Button
          variant="light"
          onClick={() => scrollTabs("right")}
          style={{
            borderRadius: "15px",
            padding: "5px",
            margin: "0 10px",
            border: "1px solid #ddd",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            width: "24px",
            height: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i className="bi bi-chevron-compact-right"></i>
        </Button>
      </div>

      {/* Project Table */}
      <div className="mx-4 px-12" 
      // style={{ backgroundColor: "white" }}
      >
      {productsLoading ? (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%", // Ensures it takes up full height of the container
    width: "100%", // Ensures it takes up full width of the container
    color:'transparent',
    marginTop:"15%"
  }}>
    <Spinner animation="border"
     role="status" 
    style={{ width: "3rem", height: "3rem" }}
    variant="primary"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
  ):(
        <Table hover responsive>
          <thead>
            <tr>
              <th
                style={{
                  height: "60px",
                  padding: "20px 30px",
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
                    transform: "scale(1.2)",
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
                Brand
              </th>
             
              <th
                style={{ border: "none", width: "140px", borderBottom: true }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{
                    width: "100%",
                    border: "1px solid #ddd",
                    padding: "10px",
                    borderRadius: "5px",
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
                        backgroundColor: isOnLive ? "#011140" : "#ccc",
                        width: "42px",
                        height: "24px",
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
          {/* <div style={{ position: "relative", minHeight: "300px" }}> */}
  {/* </div> */}
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td style={{ borderBottom: true }}>
                  <Form.Check
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    style={{
                      transform: "scale(1.2)",
                      fontSize: "20px",
                      paddingLeft: "30px",
                    }}
                  />
                </td>
                <td style={{ borderBottom: true }}>{item.projectName}</td>
                <td style={{ borderBottom: true }}>
                  <img
                    src={item.image || placeholderImage}
                    alt={item.projectName}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td style={{ borderBottom: true }}>{item.category}</td>
                <td style={{ borderBottom: true }}>{item.brand}</td>
                <td style={{ borderBottom: true }}>
                  <Button
                    size="sm"
                    onClick={() => handleEdit(item)}
                    style={{
                      color: "blue",
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  >
                    <i
                      className="bi bi-pencil"
                      style={{ color: "blue", fontSize: "20px" }}
                    ></i>{" "}
                    <span style={{ fontWeight: 500, fontSize: "16px" }}>
                      {" "}
                      Edit
                    </span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table> )}
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
            boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
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
            <span
              style={{ color: "#011140", fontWeight: 500, fontSize: "22px" }}
            >
              {selectedItems.length} Selected
            </span>

            <div>
              <Button
                onClick={handleRemoveSelected}
                style={{
                  backgroundColor: "rgba(194, 0, 0, 0.6)",
                  border: "none",
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