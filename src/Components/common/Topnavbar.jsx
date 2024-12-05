import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Form,
  FormControl,
  Container,
  Dropdown,
} from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useAuth } from "../../AuthContext"; // Import the useAuth hook

const TopNavbar = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const { logout } = useAuth(); // Get logout function from AuthContext

  // Handle search form submit
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting and causing redirection
    // Add your search logic here (e.g., searching for products, etc.)
    console.log("Searching...");
  };

  const handleLogout = () => {
    logout(); // Call the logout function to handle the logout process
    navigate("/login"); // Redirect to the login page after logout
  };

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
          className="position-relative"
          style={{ maxWidth: "500px", width: "100%", marginLeft: "auto" }}
          onSubmit={handleSearchSubmit} // Add onSubmit handler to prevent form submit
        >
          <FormControl
            type="text"
            placeholder="Search"
            style={{
              borderRadius: "20px",
              boxShadow: "none",
              border: "1px solid #eaeaea",
              paddingRight: "40px", // Offset for the icon
            }}
          />
          <BiSearch
            style={{
              position: "absolute",
              top: "50%",
              right: "15px", // Positioned to the right
              transform: "translateY(-50%)",
              fontSize: "16px",
              color: "#aaa",
            }}
          />
        </Form>

        {/* Right side: Admin Profile with Dropdown */}
        <Dropdown className="ms-3">
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            className="d-flex align-items-center"
            style={{
              color: "#555",
              fontWeight: "500",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <FaUserCircle className="fs-4 me-2" />
            <span>Admin</span>
          </Dropdown.Toggle>

          <Dropdown.Menu align="end">
            <Dropdown.Item as={Link} to="/">
              Reset Password
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
