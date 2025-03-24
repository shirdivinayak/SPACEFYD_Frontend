import React from "react";
import pic from "../../../Assets/Home/companylogo.png"; // Adjust the relative path as needed
import "./HomeNavbar.css"; // Import CSS file for custom styles

const HomeNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        padding: "clamp(20px, 3vw, 36px) clamp(10px, 5vw, 100px)", // Adjusted min padding for small screens
        backgroundColor: "#FCF9F5",
      }}
    >
      <div className="container-fluid">
        {/* Left: Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={pic}
            alt="Logo"
            width={clamp(100, 191)} // Responsive width, smaller min for small screens
            height={clamp(25, 48)} // Responsive height
            className="d-inline-block me-2"
            style={{ maxWidth: "100%" }}
          />
        </a>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: "none",
            padding: "clamp(0px, 1vw, 4px)", // Minimal padding on small screens
            marginLeft: "auto", // Push to right on small screens
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          {/* Large Screen Menu */}
          <ul className="navbar-nav d-flex align-items-center gap-4">
            {["About us", "Products", "Projects", "Services"].map(
              (item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className="nav-link"
                    href="#"
                    style={{
                      color: "#4C6559",
                      fontFamily: "Kollektif, sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(16px, 2vw, 20px)",
                      lineHeight: "clamp(20px, 2.5vw, 24px)",
                      textAlign: "center",
                      textDecoration: "none",
                      transition: "transform 0.3s ease", // Smooth transition
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} // Enlarge on hover
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset on mouse leave
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Mobile Menu */}
          <div className="mobile-menu d-lg-none">
            <div className="mobile-menu-header">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img
                  src={pic}
                  alt="Logo"
                  width={clamp(100, 191)}
                  height={clamp(25, 48)}
                  className="d-inline-block me-2"
                  style={{ maxWidth: "100%" }}
                />
              </a>
              <button
                className="mobile-menu-close"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Close navigation"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#4C6559"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#4C6559"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <ul className="navbar-nav d-flex flex-column align-items-center justify-content-center gap-4 mobile-menu-items">
              {["About us", "Products", "Projects", "Services"].map(
                (item, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#4C6559",
                        fontFamily: "Kollektif, sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(20px, 3vw, 24px)", // Larger font for mobile
                        lineHeight: "clamp(24px, 3.5vw, 28px)",
                        textAlign: "center",
                        textDecoration: "none",
                        transition: "transform 0.3s ease", // Smooth transition
                      }}
                      onClick={() => {
                        const navbarToggler = document.querySelector(".navbar-toggler");
                        const navbarCollapse = document.querySelector("#navbarSupportedContent");
                        if (navbarCollapse.classList.contains("show")) {
                          navbarToggler.click(); // Simulate click to close the menu
                        }
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} // Enlarge on hover
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset on mouse leave
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li className="nav-item">
                <button
                  className="btn"
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "16px",
                    fontWeight: 500,
                    padding: "8px",
                    color: "white",
                    background: "#4C6559",
                    whiteSpace: "nowrap",
                    minWidth: "100px",
                    border: "1px solid #4C6559",
                  }}
                  onClick={() => {
                    const navbarToggler = document.querySelector(".navbar-toggler");
                    const navbarCollapse = document.querySelector("#navbarSupportedContent");
                    if (navbarCollapse.classList.contains("show")) {
                      navbarToggler.click(); // Simulate click to close the menu
                    }
                  }}
                >
                  Contact us
                </button>
              </li>
            </ul>
          </div>

          {/* Right: Contact Us Button (Only visible on large screens) */}
          <button
            className="btn d-none d-lg-block"
            style={{
              fontFamily: "Raleway, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              padding: "8px",
              color: "white",
              background: "#4C6559",
              whiteSpace: "nowrap",
              minWidth: "100px",
              border: "1px solid #4C6559",
            }}
          >
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

// Helper function to simulate clamp behavior for numbers
const clamp = (min, max) => {
  return Math.min(Math.max(min, window.innerWidth * 0.1), max);
};

export default HomeNavbar;