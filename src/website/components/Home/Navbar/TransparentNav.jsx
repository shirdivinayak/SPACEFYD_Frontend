import React from "react";
import pic from "../../../Assets/Home/companylogo.png"; // Adjust the relative path as needed

const HomeNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        padding: "clamp(20px, 3vw, 36px) clamp(10px, 5vw, 100px)", // Adjusted min padding for small screens
        backgroundColor: "#FCF9F5",
        background: "transparent",
        width: "100%",
        position: "absolute",
        // top: "0",
        // left: "0",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        {/* Left: Logo */}
        <a className="d-flex navbar-brand align-items-center" href="#">
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
          className="d-lg-none navbar-toggler"
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
          <ul className="d-flex navbar-nav align-items-center gap-4">
            {["About us", "Products", "Projects", "Services"].map(
              (item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className="nav-link"
                    href="#"
                    style={{
                      color: "white",
                      fontFamily: "Kollektif, sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(16px, 2vw, 20px)",
                      lineHeight: "clamp(20px, 2.5vw, 24px)",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Contact Us Button (Hidden on large screens, shown inside menu on mobile) */}
          <div className="d-lg-none text-center mt-3">
            <button
              className="btn w-40"
              style={{
                color: "white",
                border: "1px solid #4C6559",
                background: "#4C6559",
                fontFamily: "Kollektif, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: "clamp(20px, 2.5vw, 24px)",
                padding: "clamp(8px, 1.5vw, 12px) clamp(15px, 2vw, 20px)",
              }}
            >
              Contact us
            </button>
          </div>
        </div>

        {/* Right: Contact Us Button (Only visible on large screens) */}
        <button
          className="d-lg-block d-none btn"
          style={{
            color: "#4C6559",
            border: "1px solid #4C6559",
            background: "white",
            fontFamily: "Kollektif, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: "clamp(20px, 2.5vw, 24px)",
            padding: "clamp(8px, 1.5vw, 12px) clamp(15px, 2vw, 20px)",
          }}
        >
          Contact us
        </button>
      </div>
    </nav>
  );
};

// Helper function to simulate clamp behavior for numbers
const clamp = (min, max) => {
  return Math.min(Math.max(min, window.innerWidth * 0.1), max);
};

export default HomeNavbar;
