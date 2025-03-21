import React from "react";
import pic from "../../../Assets/Home/mainwhite.svg"; // Adjust the relative path as needed

const HomeNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        padding: "clamp(20px, 3vw, 36px) clamp(10px, 5vw, 100px)", // Adjusted min padding for small screens
        backgroundColor: "transparent",
        zIndex: 1000, // Ensures the navbar stays above other elements
      }}
    >
      <div className="container-fluid">
        {/* Left: Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={pic}
            alt="Logo"
            width="191"
            height="48"
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
          <ul className="navbar-nav d-flex align-items-center gap-4">
            {["About us", "Products", "Projects", "Services"].map(
              (item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className="nav-link"
                    href="#"
                    style={{
                      color: "#fff",
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
          <div className="d-lg-none mt-3 text-center">
            <button
              className="btn w-40"
              style={{
                color: "#4C6559",
                border: "1px solid white",
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
          className="btn d-none d-lg-block"
          style={{
            color: "#4C6559",
            border: "1px solid #fff",
            background: "#fff",
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

export default HomeNavbar;
