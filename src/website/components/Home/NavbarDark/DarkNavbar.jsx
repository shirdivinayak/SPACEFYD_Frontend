import React, { useState } from "react";
import pic from "../../../Assets/Home/mainwhite.svg"; // Adjust the relative path as needed
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./DarkNavbar.css";
// import { FaGlobe } from "react-icons/fa";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";

const HomeNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        padding: "clamp(20px, 3vw, 36px) clamp(10px, 5vw, 100px)", // Adjusted min padding for small screens
        background: "transparent",
        position: "absolute", // Ensures navbar stays on top
        width: "100%", // Full width
        top: 0, // Stick to the top
        left: 0,
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        {/* Left: Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={pic}
            alt="Logo"
            width="191"
            height="48"
            className="d-inline-block me-2"
            style={{ maxWidth: "100%" }} // Ensure responsive behavior
          />
        </Link>

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
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Content */}
        <div className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}>
          <ul className="navbar-nav d-flex align-items-center gap-4">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link"
                  to={item.path}
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
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Us Button (Hidden on large screens, shown inside menu on mobile) */}
          <div className="d-lg-none mt-3 text-center">
            <Link
              to="/ContactUs"
              className="btn w-40"
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
            </Link>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="language-dropdown position-relative mx-3">
          <LanguageSelector />
        </div>

        {/* Right: Contact Us Button (Only visible on large screens) */}
        <Link
          to="/ContactUs"
          className="btn d-none d-lg-block"
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
        </Link>
      </div>
    </nav>
  );
};

// Helper function to simulate clamp behavior for numbers
const clamp = (min, max) => {
  return Math.min(Math.max(min, window.innerWidth * 0.1), max);
};

export default HomeNavbar;
