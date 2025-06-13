import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useFetchProjects from "../../../hooks/useAllProjectlistApi";
import useFetchCategories from "../../../hooks/useAllProjectApi";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertMessage from "../../common/MessageAlert";
import Spinner from "react-bootstrap/Spinner";

const ProductTable = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const {
    projects,
    loading: projectsLoading,
    error: projectsError,
    refetch,
    fetchMoreProjects,
    hasMore,
    lastFetchedId,  // Track lastFetchedId for pagination
  } = useFetchProjects(
    selectedCategory === "All Projects" ? null : selectedCategory
  );
  const {
    deleteCategory,
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetchCategories();

  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [message, setMessage] = useState("");
  const tabsRef = useRef(null);
  const [isOnLive, setIsOnLive] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const observer = useRef();
  const lastItemRef = useCallback(
    (node) => {
      if (projectsLoading || loadingMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLoadingMore(true);
          fetchMoreProjects(lastFetchedId) // Pass lastFetchedId for pagination
            .finally(() => setLoadingMore(false));
        }
      });

      if (node) observer.current.observe(node);
    },
    [projectsLoading, loadingMore, hasMore, fetchMoreProjects, lastFetchedId]
  );

  useEffect(() => {
    if (projectsError) {
      console.log(projectsError);
    }
    if (categoriesError) {
      console.log(categoriesError);
    }
  }, [projectsError, categoriesError]);

  // Setting the default selected category
  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory("All Projects");
    }
  }, [selectedCategory]);

  const placeholderImage = "https://placehold.co/600x400/EEE/31343C";

  useEffect(() => {
    if (projects) {
      const formattedProjects = projects.map((item) => ({
        id: item._id,
        projectName: item.projectName || "Unnamed",
        projectDescription: item.projectDescription || "",
        categoryId: item.categoryId || "", // Store categoryId for filtering
        category: item.categoryName || "Uncategorized",
        brand: item.brand || "N/A",
        image: item?.images?.length > 0 ? item.images[0] : null,
        images: item?.images || [], // Keep all images, don't slice
        isVisible: item.isVisible || false, // Use isVisible property for filtering
        originalItem: item,
      }));

      // Remove duplicates based on `_id` and append new projects to the existing list
      setItems((prevItems) => {
        const newItems = [...prevItems, ...formattedProjects];
        
        // Use Set to remove duplicates based on project `id`
        const uniqueItems = [
          ...new Map(newItems.map(item => [item.id, item])).values()
        ];

        return uniqueItems;
      });
    }
  }, [projects]);

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
    setSelectedItems(
      e.target.checked ? items.map((item) => item.id) : [] // Updated to use items directly
    );
  };

  const handleEdit = (item) => {
    navigate("/admin/projects/editprojects", {
      state: { item: item.originalItem ? item.originalItem : item },
    });
  };

  const handleRemoveSelected = async () => {
    if (selectedItems.length > 0) {
      try {
        await deleteCategory(selectedItems);

        setItems((prevItems) =>
          prevItems.filter((item) => !selectedItems.includes(item.id))
        );
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
    setItems([]); // Clear items when changing category

    // If "All Projects" is explicitly selected or the same category is clicked again, reset to "All Projects"
    setSelectedCategory(
      categoryId === selectedCategory ? "All Projects" : categoryId
    );
  };

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === "right" ? 120 : -120;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredItems = items.filter((item) => {
    return !isOnLive || item.isVisible === true;
  });

  const filteredAndSortedCategories =
    categories && Array.isArray(categories)
      ? categories
          .filter((category) => category.name)
          .sort((a, b) => a.name.localeCompare(b.name))
      : [];

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
            backgroundColor: "#9A715B",
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
          {categoriesLoading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "40px" }}
            >
              <p>Loading...</p>
            </div>
          ) : (
            <div
              className="d-flex overflow-hidden"
              ref={tabsRef}
              style={{
                maxWidth: "950px",
                overflowX: "auto",
                whiteSpace: "nowrap",
                height: "40px",
              }}
            >
              <Button
                variant={selectedCategory === "All Projects" ? "primary" : "btn-light"}
                className="mx-1"
                onClick={() => handleCategorySelect("All Projects")}
                style={{
                  backgroundColor:
                    selectedCategory === "All Projects" ? "rgba(154, 113, 91, 0.2" : "white",
                  color:
                    selectedCategory === "All Projects" ?"#9A715B" : "#5A5A5A",
                  border: "none",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                All Projects
              </Button>
              {filteredAndSortedCategories.map((category) => (
                <Button
                  key={category._id}
                  variant={selectedCategory === category._id ? "primary" : "btn-light"}
                  className="mx-1"
                  onClick={() => handleCategorySelect(category._id)}
                  style={{
                    backgroundColor:
                      selectedCategory === category._id ? "rgba(154, 113, 91, 0.2)" : "white",
                    color:
                      selectedCategory === category._id ? "#9A715B" : "#5A5A5A",
                    border: "none",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          )}
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
      <div className="mx-4 px-12">
        {projectsLoading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%", // Ensures it takes up full height of the container
              width: "100%", // Ensures it takes up full width of the container
              color: "transparent",
              marginTop: "15%",
            }}
          >
            <Spinner
              animation="border"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
              variant="primary"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
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
                    checked={
                      selectedItems.length === filteredItems.length &&
                      filteredItems.length > 0
                    }
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

                <th style={{ border: "none", width: "140px", borderBottom: true }}>
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
                          backgroundColor: isOnLive ? "#4C6559" : "#ccc",
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
            <tbody>
              {filteredItems.map((item, index) => {
                const isLastItem = index === filteredItems.length - 1;

                return (
                  <tr key={item.id} ref={isLastItem ? lastItemRef : null}>
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
                    <td style={{ borderBottom: true }}>
                      <Button
                        size="sm"
                        onClick={() => handleEdit(item)}
                        style={{
                          color: "#9A715B",
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                      >
                        <i
                          className="bi bi-pencil"
                          style={{ color: "9A715B", fontSize: "20px" }}
                        ></i>{" "}
                        <span style={{ fontWeight: 500, fontSize: "16px" }}>
                          Edit
                        </span>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
        {loadingMore && (
          <div className="text-center my-3">
            <Spinner animation="border" variant="primary" size="sm" />
            <span className="ms-2">Loading more projects...</span>
          </div>
        )}
        {!hasMore && items.length > 0 && (
          <div className="text-center my-3 text-muted">
            No more projects to load
          </div>
        )}
      </div>
      <AlertMessage message={message} />
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
              style={{ color: "#4C6559", fontWeight: 500, fontSize: "22px" }}
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
