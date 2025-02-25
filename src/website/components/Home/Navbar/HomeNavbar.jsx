import React from "react";
import pic from "../../../../website/Assets/Home/companylogo.png"; // Adjust the relative path as needed

const HomeNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        padding: "36px 100px",
        backgroundColor: "#FCF9F5",
      }} // Keep padding same as before
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
          />
        </a>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
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
                      color: "#4C6559",
                      fontFamily: "Kollektif, sans-serif",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "24px",
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
                color: "white",
                border: "1px solid #4C6559",
                background: "#4C6559",
                fontFamily: "Kollektif, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "24px",
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
            color: "white",
            border: "1px solid #4C6559",
            background: "#4C6559",
            fontFamily: "Kollektif, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
          }}
        >
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default HomeNavbar;
