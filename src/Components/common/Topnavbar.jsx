import React from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Form, FormControl, Container, Dropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useAuth } from "../../AuthContext";

const TopNavbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value.trim().toLowerCase();

    const routes = {
      "products category": "/categories/products", // Navigate for 'products category'
      "projects category": "/categories/projects",
       projects: "/products",
       brands: "/brands",
       projects: "/projects",
       projects: "/projects",
        banner:"/"
    };

    if (routes[searchQuery]) {
      navigate(routes[searchQuery]);
    } else {
      alert("No matching page found. Please try another search.");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
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
        <Form
          className="position-relative"
          style={{ maxWidth: "500px", width: "100%", marginLeft: "auto" }}
          onSubmit={handleSearchSubmit}
        >
          <FormControl
            type="text"
            name="search"
            placeholder="Search"
            style={{
              borderRadius: "20px",
              boxShadow: "none",
              border: "1px solid #eaeaea",
              paddingRight: "40px",
            }}
          />
          <BiSearch
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
              fontSize: "16px",
              color: "#aaa",
            }}
          />
        </Form>

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
