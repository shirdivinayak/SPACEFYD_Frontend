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
        padding: "50px 100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
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
        }}
      >
        {/* Left: Company Name */}
        <div
          style={{
            width: "553px",
            height: "149px",
            fontFamily: "Kollektif, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(60px, 10vw, 133.27px)", // Responsive font size
            lineHeight: "148.08px",
            letterSpacing: "0px",
            color: "#4C6559",
          }}
        >
          Spacifyd.
        </div>

        {/* Right: Two Columns */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {/* Top Row: Links */}
          <div style={{ display: "flex", gap: "100px" }}>
            {/* First Column */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
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
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
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
              gap: "20px", // Gap between text and icons
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                color: "#505F79",
                fontFamily: "Raleway, sans-serif",
                fontSize: "16.5px",
                lineHeight: "30px",
                margin: 0, // Remove default margin
              }}
            >
              Connect with us
            </p>
            <div
              style={{
                display: "flex",
                gap: "15px", // Gap between icons
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
        }}
      />

      {/* Privacy Policy Section */}
      <div
        style={{
          fontFamily: "Raleway, sans-serif",
          fontWeight: 400,
          fontSize: "13.5px",
          lineHeight: "22.5px",
          letterSpacing: "0px",
          textAlign: "center",
          color: "#3F3F3F",
          width: "331.5px",
          height: "23px",
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
  fontSize: "16.5px",
  lineHeight: "30px",
};

const iconStyle = {
  color: "#505F79",
  fontSize: "24px",
  cursor: "pointer",
};

export default Footer;
