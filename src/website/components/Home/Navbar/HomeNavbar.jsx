import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../../../Assets/Home/logo.png";
import "./HomeNavbar.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";

const HomeNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selected_language", lng);
  };

  const navItems = [
    { name: "About us", path: "/AboutUs" },
    { name: "Products", path: "/Products" },
    { name: "Projects", path: "/ProjectList" },
    { name: "Services", path: "/Services" },
  ];

  const contactPath = "/ContactUs";

  return (
    <nav
      className="navbar navbar-expand-lg home-navbar fixed-top"
      style={{
        padding: "clamp(20px, 3vw, 16px) clamp(10px, 5vw, 100px)",
        backgroundColor: "#FCF9F5",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={pic}
            alt="Logo"
            width="191"
            height="48"
            className="d-inline-block me-2"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Link>

        {/* Toggle button only */}
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
          }}
          onClick={() => {
             window.scrollTo(0, 0);
            setIsExpanded(!isExpanded)}}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              display: "inline-block",
              width: "1.5em",
              height: "1.5em",
              verticalAlign: "middle",
              backgroundImage:
                "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(76, 101, 89, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100%",
              transition: "transform 0.3s ease",
            }}
          />
        </button>

        <div
          className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
          id="navbarSupportedContent"
        >
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

          <div className="mobile-menu d-lg-none">
            <div className="mobile-menu-header">
              <Link className="navbar-brand d-flex align-items-center" to="/">
                <img
                  src={pic}
                  alt="Logo"
                  width="191"
                  height="48"
                  className="d-inline-block me-2"
                  style={{ maxWidth: "100%", height: "auto" }}
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
                onClick={() => {
                   window.scrollTo(0, 0);
                  setIsExpanded(false)}}
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
                       window.scrollTo(0, 0);
                      setIsExpanded(false)}}
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
                    transition: "background-color 0.3s ease, color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "#4C6559";
                    e.currentTarget.style.border = "1px solid #4C6559";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#4C6559";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.border = "1px solid #4C6559";
                  }}
                  onClick={() => {
                     window.scrollTo(0, 0);
                     setIsExpanded(false)}}
                >
                  Contact us
                </Link>
              </li>
              {/* Language selector with proper class names */}
              <li className="nav-item mt-3 mobile-language-wrapper">
                <div className="position-relative">
                  <LanguageSelector mobile={true} />
                </div>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <div className="language-dropdown position-relative mx-3 d-none d-lg-block">
              <LanguageSelector />
            </div>

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
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#4C6559";
                e.currentTarget.style.border = "1px solid #4C6559";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#4C6559";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.border = "1px solid #4C6559";
              }}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;