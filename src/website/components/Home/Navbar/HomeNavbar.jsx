import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import pic from "../../../Assets/Home/companylogo.png";
import "./HomeNavbar.css";
import { useTranslation } from "react-i18next";
// import { FaGlobe } from "react-icons/fa";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";

const HomeNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.removeItem("selected_lanuage");
    localStorage.setItem("selected_language", lng);
    setShowDropdown(false);
  };

  // Navigation items with their corresponding routes
  const navItems = [
    { name: "About us", path: "/AboutUs" },
    { name: "Products", path: "/Products" },
    { name: "Projects", path: "/ProjectList" },
    { name: "Services", path: "/Services" },
  ];

  // Contact route
  const contactPath = "/ContactUs";

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        padding: "clamp(20px, 3vw, 36px) clamp(10px, 5vw, 100px)",
        backgroundColor: "#FCF9F5",
      }}
    >
      <div className="container-fluid">
        {/* Logo with Link */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={pic}
            alt="Logo"
            width={clamp(100, 191)}
            height={clamp(25, 48)}
            className="d-inline-block me-2"
            style={{ maxWidth: "100%" }}
          />
        </Link>

        {/* Navbar Toggler */}
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
            padding: "clamp(0px, 1vw, 4px)",
            marginLeft: "auto",
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
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link"
                  to={item.path}
                  style={{
                    color: "#4C6559",
                    fontFamily: "Kollektif, sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(16px, 2vw, 20px)",
                    lineHeight: "clamp(20px, 2.5vw, 24px)",
                    textAlign: "center",
                    textDecoration: "none",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className="mobile-menu d-lg-none">
            <div className="mobile-menu-header">
              <Link className="navbar-brand d-flex align-items-center" to="/">
                <img
                  src={pic}
                  alt="Logo"
                  width={clamp(100, 191)}
                  height={clamp(25, 48)}
                  className="d-inline-block me-2"
                  style={{ maxWidth: "100%" }}
                />
              </Link>
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
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link"
                    to={item.path}
                    style={{
                      color: "#4C6559",
                      fontFamily: "Kollektif, sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(20px, 3vw, 24px)",
                      lineHeight: "clamp(24px, 3.5vw, 28px)",
                      textAlign: "center",
                      textDecoration: "none",
                      transition: "transform 0.3s ease",
                    }}
                    onClick={() => {
                      const navbarToggler =
                        document.querySelector(".navbar-toggler");
                      const navbarCollapse = document.querySelector(
                        "#navbarSupportedContent"
                      );
                      if (navbarCollapse.classList.contains("show")) {
                        navbarToggler.click();
                      }
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link
                  to={contactPath}
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
                    textDecoration: "none",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                  onClick={() => {
                    const navbarToggler =
                      document.querySelector(".navbar-toggler");
                    const navbarCollapse = document.querySelector(
                      "#navbarSupportedContent"
                    );
                    if (navbarCollapse.classList.contains("show")) {
                      navbarToggler.click();
                    }
                  }}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Language Switcher */}
          <div className="language-dropdown position-relative mx-3">
            <LanguageSelector />
          </div>

          {/* Contact Button for Large Screens */}
          <Link
            to={contactPath}
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
              textDecoration: "none",
            }}
          >
            Contact us
          </Link>
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
