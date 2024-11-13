// TopNavbar.js
import React from "react";
import { Navbar, Form, FormControl, Button, Container } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <Navbar
      bg="white"
      className="shadow-sm"
      style={{
        padding: "10px 20px",
        height: "64px",
        borderBottom: "1px solid #eaeaea",
      }}
    >
      <Container fluid className="d-flex align-items-center">
        {/* Left side: Search Bar */}
        <Form
          className="d-flex"
          style={{ maxWidth: "500px", width: "100%", marginLeft: "auto" }}
        >
          <FormControl
            type="text"
            placeholder="Search"
            style={{
              borderRadius: "20px",
              boxShadow: "none",
              border: "1px solid #eaeaea",
            }}
          />
          <Button
            variant="outline-secondary"
            style={{
              borderRadius: "20px",
              boxShadow: "none",
              marginLeft: "-1px",
              border: "1px solid #eaeaea",
              padding: "0 20px",
              backgroundColor: "#f8f9fa",
            }}
          >
            Search
          </Button>
        </Form>

        {/* Right side: Admin Profile with Down Arrow Icon */}
        <div
          className="d-flex align-items-center ms-3" // Add margin here if needed
          style={{
            color: "#555",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          <FaUserCircle className="fs-4 me-2" />
          <span>Admin</span>
          <BiChevronDown className="fs-5 ms-2" />
        </div>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
