import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="Sidebar ">
      {/* tried to increase  the width but was not successful */}
      <div className="d-flex flex-column bg-white border border-dashed text-black vh-100  p-3 ">
        {/* //viewport heght 100% based on browser*/}
        <Nav.Link href="#home" className="display-1 text-center text-black">
          SPACIFYD
        </Nav.Link>
        <Nav className="flex-column mt-4">
          <Nav.Link
            href="#home"
            className="btn btn-secondary text-black d-flex align-items-center"
          >
            <i className="bi bi-house-door me-2"></i>
            Home
          </Nav.Link>
          <Nav.Link
            href="#categories"
            className=" btn btn-secondary text-black d-flex align-items-center"
          >
            <i className="bi bi-grid me-2"></i>
            Categories
          </Nav.Link>

          <Nav.Link
            href="#products"
            className="btn btn-secondary text-black d-flex align-items-center"
            style={{ whiteSpace: "nowrap" }}
          >
            <i className="bi bi-box me-2"></i>
            All Products
          </Nav.Link>

          <Nav.Link
            href="#projects"
            className=" btn btn-secondary text-black d-flex align-items-center"
            style={{ whiteSpace: "nowrap" }}
          >
            <i className="bi bi-clipboard-data me-2"></i>
            All Projects
          </Nav.Link>
          <Nav.Link
            href="#brands"
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
