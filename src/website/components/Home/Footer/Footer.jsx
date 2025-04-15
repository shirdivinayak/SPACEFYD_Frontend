import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../../Assets/Home/logo.png";

const Footer = () => {
  const handleNavigate = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "clamp(20px, 5vw, 50px) clamp(20px, 8vw, 100px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "clamp(20px, 4vw, 40px)",
        borderTop: "1px solid",
        borderImageSource:
          "linear-gradient(270deg, #4DA180 0%, #97935A 27.34%, #CE893E 100%)",
        borderImageSlice: 1,
      }}
    >
      {/* Main Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Left: Company Logo */}
        <Link 
          to="/" 
          onClick={handleNavigate} 
          style={{ 
            textDecoration: "none",
            width: "clamp(200px, 40vw, 553px)",
            height: "clamp(60px, 12vw, 149px)",
            display: "flex",
            alignItems: "center"
          }}
        >
          <img 
            src={logo} 
            alt="Spacifyd Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Right: Two Columns */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(20px, 3vw, 40px)",
            minWidth: "200px",
          }}
        >
          {/* Top Row: Links */}
          <div
            style={{
              display: "flex",
              gap: "clamp(20px, 5vw, 100px)",
              flexWrap: "wrap",
            }}
          >
            {/* First Column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(15px, 2vw, 30px)",
              }}
            >
              <Link to="/AboutUs" style={linkStyle} onClick={handleNavigate}>
                About Us
              </Link>
              <Link to="/Services" style={linkStyle} onClick={handleNavigate}>
                Service
              </Link>
              <Link to="/ProjectList" style={linkStyle} onClick={handleNavigate}>
                Our Projects
              </Link>
            </div>

            {/* Second Column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(15px, 2vw, 30px)",
              }}
            >
              <Link to="/Products" style={linkStyle} onClick={handleNavigate}>
                Products
              </Link>
              <Link to="/ContactUs" style={linkStyle} onClick={handleNavigate}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Bottom Row: Connect with us and Social Media Icons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(10px, 2vw, 20px)",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                color: "#505F79",
                fontFamily: "Raleway, sans-serif",
                fontSize: "clamp(12px, 2vw, 16.5px)",
                lineHeight: "clamp(20px, 3vw, 30px)",
                margin: 0,
              }}
            >
              Connect with us
            </p>
            <div
              style={{
                display: "flex",
                gap: "clamp(8px, 1.5vw, 15px)",
              }}
            >
              <FaFacebookF style={iconStyle} />
              <FaTwitter style={iconStyle} />
              <FaInstagram style={iconStyle} />
              <FaLinkedinIn style={iconStyle} />
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr
        style={{
          width: "100%",
          border: "0.75px solid",
          borderImageSource:
            "linear-gradient(270deg, #4DA180 0%, #97935A 27.34%, #CE893E 100%)",
          borderImageSlice: 1,
          margin: "clamp(15px, 2vw, 20px) 0",
        }}
      />

      {/* Privacy Policy Section - Updated to keep all links on one line */}
      <div
        style={{
          fontFamily: "Raleway, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(10px, 1.5vw, 13.5px)",
          lineHeight: "clamp(15px, 2vw, 22.5px)",
          letterSpacing: "0px",
          textAlign: "center",
          color: "#3F3F3F",
          width: "100%",  // Changed from fixed width to 100%
          whiteSpace: "nowrap",  // Prevent wrapping
          overflow: "hidden",  // Hide overflow if needed
          textOverflow: "ellipsis",  // Add ellipsis if text is too long
          height: "auto",
        }}
      >
        {/* <Link to="/privacy" style={linkStyle} onClick={handleNavigate}>
          Privacy Policy
        </Link>{" "}
        |{" "} */}
        {/* <Link to="/terms" style={linkStyle} onClick={handleNavigate}>
          Terms & Conditions
        </Link>{" "}
        |{" "} */}
        {/* <Link to="/cookies" style={linkStyle} onClick={handleNavigate}>
          Cookies Policy
        </Link> */}
        <Link to="/" style={linkStyle}>
        © Copyright {new Date().getFullYear()} - spacifyd        
        </Link>
    </div>
    </footer>
  );
};

// Common Styles
const linkStyle = {
  textDecoration: "none",
  color: "#3F3F3F",
  fontFamily: "Raleway, sans-serif",
  fontSize: "clamp(12px, 2vw, 16.5px)",
  lineHeight: "clamp(20px, 3vw, 30px)",
  display: "inline", // Ensure links stay inline
};

const iconStyle = {
  color: "#505F79",
  fontSize: "clamp(16px, 3vw, 24px)",
  cursor: "pointer",
};

export default Footer;