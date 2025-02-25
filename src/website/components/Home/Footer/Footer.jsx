import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "clamp(20px, 5vw, 50px) clamp(20px, 8vw, 100px)", // Responsive padding
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "clamp(20px, 4vw, 40px)", // Responsive gap
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
          flexWrap: "wrap", // Allow wrapping on very small screens
          gap: "20px", // Add gap for when wrapping occurs
        }}
      >
        {/* Left: Company Name */}
        <div
          style={{
            width: "clamp(200px, 40vw, 553px)", // Responsive width
            height: "clamp(60px, 12vw, 149px)", // Responsive height
            fontFamily: "Kollektif, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(30px, 8vw, 133.27px)", // Adjusted responsive font size
            lineHeight: "clamp(40px, 10vw, 148.08px)", // Responsive line height
            letterSpacing: "0px",
            color: "#4C6559",
          }}
        >
          Spacifyd.
        </div>

        {/* Right: Two Columns */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(20px, 3vw, 40px)", // Responsive gap
            minWidth: "200px", // Minimum width to maintain readability
          }}
        >
          {/* Top Row: Links */}
          <div
            style={{
              display: "flex",
              gap: "clamp(20px, 5vw, 100px)", // Responsive gap between columns
              flexWrap: "wrap", // Allow wrapping on small screens
            }}
          >
            {/* First Column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(15px, 2vw, 30px)", // Responsive gap
              }}
            >
              <a href="#" style={linkStyle}>
                About Us
              </a>
              <a href="#" style={linkStyle}>
                Service
              </a>
              <a href="#" style={linkStyle}>
                Our Projects
              </a>
            </div>

            {/* Second Column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(15px, 2vw, 30px)", // Responsive gap
              }}
            >
              <a href="#" style={linkStyle}>
                Products
              </a>
              <a href="#" style={linkStyle}>
                Contact Us
              </a>
            </div>
          </div>

          {/* Bottom Row: Connect with us and Social Media Icons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(10px, 2vw, 20px)", // Responsive gap
              flexWrap: "wrap", // Allow wrapping if needed
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                color: "#505F79",
                fontFamily: "Raleway, sans-serif",
                fontSize: "clamp(12px, 2vw, 16.5px)", // Responsive font size
                lineHeight: "clamp(20px, 3vw, 30px)", // Responsive line height
                margin: 0,
              }}
            >
              Connect with us
            </p>
            <div
              style={{
                display: "flex",
                gap: "clamp(8px, 1.5vw, 15px)", // Responsive gap between icons
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
          margin: "clamp(15px, 2vw, 20px) 0", // Responsive margin
        }}
      />

      {/* Privacy Policy Section */}
      <div
        style={{
          fontFamily: "Raleway, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(10px, 1.5vw, 13.5px)", // Responsive font size
          lineHeight: "clamp(15px, 2vw, 22.5px)", // Responsive line height
          letterSpacing: "0px",
          textAlign: "center",
          color: "#3F3F3F",
          width: "clamp(200px, 50vw, 331.5px)", // Responsive width
          height: "auto", // Allow height to adjust
        }}
      >
        Privacy Policy | Terms & Conditions | Cookies Policy
      </div>
    </footer>
  );
};

// Common Styles
const linkStyle = {
  textDecoration: "none",
  color: "#3F3F3F",
  fontFamily: "Raleway, sans-serif",
  fontSize: "clamp(12px, 2vw, 16.5px)", // Responsive font size
  lineHeight: "clamp(20px, 3vw, 30px)", // Responsive line height
};

const iconStyle = {
  color: "#505F79",
  fontSize: "clamp(16px, 3vw, 24px)", // Responsive icon size
  cursor: "pointer",
};

export default Footer;  