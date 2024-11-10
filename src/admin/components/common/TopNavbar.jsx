// TopNavbar.js
import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <Navbar bg="light" className="px-4">
      <div className=" btn btn-light d-flex align-items-center ms-auto">
        <i className="bi bi-person-circle fs-4 me-2"></i>
        <span>Admin</span>
      </div>
    </Navbar>
  );
};

export default TopNavbar;
