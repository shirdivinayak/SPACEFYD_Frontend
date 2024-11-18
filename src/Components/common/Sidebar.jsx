import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { BiChevronDown, BiGrid, BiHome, BiBox, BiClipboard, BiTag } from "react-icons/bi";
import { Link } from "react-router-dom";
import GroupImage from "../../Assets/Images/Group.png";


const Sidebar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // To track the active option

  const handleCategoriesClick = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  // Inline styles for hover and active states
  const linkStyles = {
    base: {
      textDecoration: "none",
      color: "white",
      padding: "10px",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      transition: "background-color 0.3s ease",
    },
    hover: {
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Hover color
    },
    active: {
      backgroundColor: "#012A6C", // Active selection color
    },
  };

  return (
    <div
      className="Sidebar"
      style={{
        width: "268px",
        height: "100vh",
        backgroundColor: "#011140",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      {/* App Logo */}
      <div className="text-center mb-4">
        <Link to="/">
          <img
            src={GroupImage}
            alt="Group Logo"
            style={{
              width: "150px",
              height: "auto",
            }}
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <Nav className="flex-column">
        {/* Home Link */}
        <Nav.Link
          as={Link}
          to="/"
          onClick={() => setSelectedOption("Home")}
          className="mb-3"
          style={{
            ...linkStyles.base,
            ...(selectedOption === "Home" ? linkStyles.active : {}),
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = linkStyles.hover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              selectedOption === "Home" ? linkStyles.active.backgroundColor : "transparent")
          }
        >
          <BiHome size={20} className="me-3" />
          <span>Home</span>
        </Nav.Link>

        {/* Categories Button with Toggle */}
        <Nav.Link
          as="button"
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          className="mb-3"
          style={{
            ...linkStyles.base,
            ...(isCategoriesOpen ? linkStyles.active : {}),
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = linkStyles.hover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              isCategoriesOpen ? linkStyles.active.backgroundColor : "transparent")
          }
        >
          <BiGrid size={20} className="me-3" />
          <span>Categories</span>
          <BiChevronDown
            size={20}
            className={`ms-auto ${isCategoriesOpen ? "rotate-180" : ""}`}
            style={{
              transform: isCategoriesOpen ? "rotate(180deg)" : "rotate(0)",
              transition: "transform 0.3s ease",
            }}
          />
        </Nav.Link>

        {/* Sub-links for Products and Projects */}
        {isCategoriesOpen && (
          <div style={{ paddingLeft: "1.5rem" }}>
            <Nav.Link
              as={Link}
              to="/categories/products"
              onClick={() => setSelectedOption("Products")}
              className="mb-2"
              style={{
                ...linkStyles.base,
                ...(selectedOption === "Products" ? linkStyles.active : {}),
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = linkStyles.hover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  selectedOption === "Products" ? linkStyles.active.backgroundColor : "transparent")
              }
            >
              <BiBox size={18} className="me-3" />
              <span>Products</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/categories/projects"
              onClick={() => setSelectedOption("Projects")}
              className="mb-2"
              style={{
                ...linkStyles.base,
                ...(selectedOption === "Projects" ? linkStyles.active : {}),
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = linkStyles.hover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  selectedOption === "Projects" ? linkStyles.active.backgroundColor : "transparent")
              }
            >
              <BiClipboard size={18} className="me-3" />
              <span>Projects</span>
            </Nav.Link>
          </div>
        )}

        {/* All Products Link */}
        <Nav.Link
          as={Link}
          to="/products"
          onClick={() => setSelectedOption("All Products")}
          className="mb-3"
          style={{
            ...linkStyles.base,
            ...(selectedOption === "All Products" ? linkStyles.active : {}),
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = linkStyles.hover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              selectedOption === "All Products" ? linkStyles.active.backgroundColor : "transparent")
          }
        >
          <BiBox size={20} className="me-3" />
          <span>All Products</span>
        </Nav.Link>

        {/* All Projects Link */}
        <Nav.Link
          as={Link}
          to="/projects"
          onClick={() => setSelectedOption("All Projects")}
          className="mb-3"
          style={{
            ...linkStyles.base,
            ...(selectedOption === "All Projects" ? linkStyles.active : {}),
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = linkStyles.hover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              selectedOption === "All Projects" ? linkStyles.active.backgroundColor : "transparent")
          }
        >
          <BiClipboard size={20} className="me-3" />
          <span>All Projects</span>
        </Nav.Link>

        {/* Brands Link */}
        <Nav.Link
          as={Link}
          to="/brands"
          onClick={() => setSelectedOption("Brands")}
          className="mb-3"
          style={{
            ...linkStyles.base,
            ...(selectedOption === "Brands" ? linkStyles.active : {}),
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = linkStyles.hover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              selectedOption === "Brands" ? linkStyles.active.backgroundColor : "transparent")
          }
        >
          <BiTag size={20} className="me-3" />
          <span>Brands</span>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
