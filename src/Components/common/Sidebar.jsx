<<<<<<< HEAD
import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import GroupImage from "../Assets/Images/Group.png"; // Corrected path
=======
import GroupImage from "../../Assets/Images/Group.png";
>>>>>>> origin/main

const Sidebar = () => {
  // State to manage the visibility of the sub-buttons
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Toggle the visibility of the "Products" and "Projects" sub-buttons
  const handleCategoriesClick = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className="Sidebar">
      <div
        className="d-flex flex-column text-white min-vh-100 p-3"
        style={{ width: 268, height: 1721, backgroundColor: "#011140" }}
      >
        {/* App Title */}
        <Nav.Link as={Link} to="/" className="text-center">
          <img
            src={GroupImage}
            alt="Group"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "150px",
              margin: "0 auto",
            }}
          />
        </Nav.Link>

        {/* Navigation Links */}
        <Nav className="flex-column mt-2">
          {/* Home Link */}
          <Nav.Link
            as={Link}
            to="/"
            className="btn btn-secondary text-white d-flex align-items-center"
=======
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="d-flex flex-column bg-white border border-dashed text-black vh-100 p-3">
        {/* App Title */}
        <Nav.Link as={Link} to="/" className="display-1 text-center text-black">
          SPACIFYD
        </Nav.Link>

        {/* Navigation Links */}
        <Nav className="flex-column mt-4">
          <Nav.Link
            as={Link} // Use as={Link} to apply Link behavior
            to="/" // Use "to" for the path instead of "href"
            className="btn btn-secondary text-black d-flex align-items-center"
>>>>>>> ab8b85bc1554dbb9eb706d0507dc490e5db36073
          >
            <i className="bi bi-house-door me-2"></i>
            Home
          </Nav.Link>

<<<<<<< HEAD
          {/* Categories Button with Toggle */}
          <Nav.Link
            as="button"
            onClick={handleCategoriesClick}
            className="btn btn-secondary text-white d-flex align-items-center"
          >
            <i className="bi bi-grid me-2"></i>
            Categories
            <BiChevronDown className="ms-2" />
          </Nav.Link>

          {/* Conditional rendering of Product and Project buttons */}
          {isCategoriesOpen && (
            <>
              <Nav.Link
                as={Link}
                to="/categories/products"
                className="btn btn-secondary text-white d-flex align-items-center sub-button"
                style={{ marginLeft: "1.5rem" }}
              >
                <i className="bi bi-box me-2"></i>
                Products
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/categories/projects"
                className="btn btn-secondary text-white d-flex align-items-center sub-button"
                style={{ marginLeft: "1.5rem" }}
              >
                <i className="bi bi-clipboard-data me-2"></i>
                Projects
              </Nav.Link>
            </>
          )}

          {/* All Products Link */}
          <Nav.Link
            as={Link}
            to="/products"
            className="btn btn-secondary text-white d-flex align-items-center"
=======
          <Nav.Link
            as={Link}
            to="/categories"
            className="btn btn-secondary text-black d-flex align-items-center"
          >
            <i className="bi bi-grid me-2"></i>
            Categories
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/products"
            className="btn btn-secondary text-black d-flex align-items-center"
>>>>>>> ab8b85bc1554dbb9eb706d0507dc490e5db36073
            style={{ whiteSpace: "nowrap" }}
          >
            <i className="bi bi-box me-2"></i>
            All Products
          </Nav.Link>

<<<<<<< HEAD
          {/* All Projects Link */}
          <Nav.Link
            as={Link}
            to="/projects"
            className="btn btn-secondary text-white d-flex align-items-center"
=======
          <Nav.Link
            as={Link}
            to="/projects"
            className="btn btn-secondary text-black d-flex align-items-center"
>>>>>>> ab8b85bc1554dbb9eb706d0507dc490e5db36073
            style={{ whiteSpace: "nowrap" }}
          >
            <i className="bi bi-clipboard-data me-2"></i>
            All Projects
          </Nav.Link>

<<<<<<< HEAD
          {/* Brands Link */}
          <Nav.Link
            as={Link}
            to="/brands"
            className="btn btn-secondary text-white d-flex align-items-center"
=======
          <Nav.Link
            as={Link}
            to="/brands"
            className="btn btn-secondary text-black d-flex align-items-center"
>>>>>>> ab8b85bc1554dbb9eb706d0507dc490e5db36073
          >
            <i className="bi bi-tag me-2"></i>
            Brands
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;