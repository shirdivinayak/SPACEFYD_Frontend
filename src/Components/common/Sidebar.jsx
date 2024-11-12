import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import GroupImage from "../Images/Group.png";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="d-flex flex-column bg-white border border-dashed text-black vh-100 p-3">
        {/* App Title */}
        <div className="logo-container">
          <Link as={Link} to="/" className="">
            <img
              src={GroupImage}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "150px",
                margin: "0 auto",
              }}
            />
          </Link>
        </div>
        {/* Navigation Links */}
        <Nav className="flex-column mt-2">
          <Nav.Link
            as={Link} // Use as={Link} to apply Link behavior
            to="/" // Use "to" for the path instead of "href"
            className="btn btn-secondary text-black d-flex align-items-center"
          >
            <i className="bi bi-house-door me-2"></i>
            Home
          </Nav.Link>

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
            style={{ whiteSpace: "nowrap" }}
          >
            <i className="bi bi-box me-2"></i>
            All Products
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/projects"
            className="btn btn-secondary text-black d-flex align-items-center"
            style={{ whiteSpace: "nowrap" }}
          >
            <i className="bi bi-clipboard-data me-2"></i>
            All Projects
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/brands"
            className="btn btn-secondary text-black d-flex align-items-center"
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
