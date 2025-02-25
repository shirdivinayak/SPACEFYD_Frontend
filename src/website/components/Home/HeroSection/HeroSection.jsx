import React from "react";
import banner from "../../../../website/Assets/Home/homebanner.png"; // Import the local image
import lamp from "../../../../website/Assets/Home/lamp.png";
import "./HeroSection.css";

// Button data for the Hero Section
const topButtons = [
  { icon: "🚀", text: "Explore Designs" },
  { icon: "💡", text: "Smart Solutions" },
  { icon: "🛠️", text: "Entertainment and Leisure" },
];

const leftButtons = [
  { icon: "🌟", text: "Our Portfolio" },
  { icon: "💡", text: "Testimonials" },
];

const rightButtons = [
  { icon: "🛠️", text: "Our Process" },
  { icon: "🚀", text: "Contact Us" },
];

// Button data for the Lamp Section
const lampButtons = [
  { icon: "🏠", text: "Smart Space Solutions" },
  { icon: "🏢", text: "Tailored Design Excellence" },
  { icon: "🛋️", text: "Innovative Technology Integration" },
  { icon: "🌿", text: "Future-Ready Designs" },
];

// Reusable Button Component using CSS classes
const FloatingButton = ({ icon, text }) => (
  <button className="floating-btn">
    <span style={{ marginRight: "10px" }}>{icon}</span>
    {text}
  </button>
);

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: "#FCF9F5" }}>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px",
          borderRadius: "24px",
          width: "1360px",
          height: "672px",
          position: "relative",
          margin: "auto",
        }}
      >
        {/* Heading */}
        <div
          className="hero-heading"
          style={{
            width: "1086px",
            height: "180px",
            position: "absolute",
            top: "62px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Kollektif, sans-serif",
              fontWeight: 400,
              fontSize: "88px",
              lineHeight: "89.69px",
              letterSpacing: "0px",
              color: "#FCF9F5",
            }}
          >
            Transforming Spaces with Custom Interiors
          </h1>
        </div>

        {/* Floating Buttons Section */}
        <div
          className="floating-buttons"
          style={{
            position: "absolute",
            top: "300px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1086px",
            textAlign: "center",
          }}
        >
          {/* Top Row - 3 Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            {topButtons.map((button, index) => (
              <FloatingButton
                key={index}
                icon={button.icon}
                text={button.text}
              />
            ))}
          </div>

          {/* Main Content Container */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              position: "relative",
            }}
          >
            {/* Left Buttons */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {leftButtons.map((button, index) => (
                <FloatingButton
                  key={index}
                  icon={button.icon}
                  text={button.text}
                />
              ))}
            </div>

            {/* Center Content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {/* Smart Tech Interior Solutions Heading */}
              <h2
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "36px",
                  lineHeight: "60.22px",
                  letterSpacing: "-0.73px",
                  color: "#FCF9F5",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                Smart Tech Interior Solutions
              </h2>

              {/* Frame for Paragraph and Button */}
              <div
                style={{
                  width: "729px",
                  height: "211px",
                  borderRadius: "10px",
                  border: "0.5px solid rgba(255, 255, 255, 0.2)",
                  background:
                    "linear-gradient(179.71deg, rgba(90, 90, 90, 0.4) 0.25%, rgba(90, 90, 90, 0) 108.54%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >
                {/* Paragraph */}
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "27px",
                    letterSpacing: "0px",
                    color: "#FCF9F5",
                    textAlign: "center",
                    margin: "0 0 24px 0",
                  }}
                >
                  Transform your space with smart design and technology for a
                  seamless, stylish, and future-ready experience.
                </p>

                {/* Get Started With Us Button */}
                <button className="proper-btn" style={{ marginTop: "30px" }}>
                  Get Started With Us
                </button>
              </div>
            </div>

            {/* Right Buttons */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {rightButtons.map((button, index) => (
                <FloatingButton
                  key={index}
                  icon={button.icon}
                  text={button.text}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lamp Section */}
      <section
        className="lamp-section"
        style={{
          backgroundImage: `url(${lamp})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px",
          borderRadius: "24px",
          width: "100%", // Ensure full width
          height: "672px",
          position: "relative",
          margin: "0 auto", // Remove left margin
        }}
      >
        {/* About Us Heading */}
        <div
          style={{
            position: "absolute",
            top: "62px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Kollektif, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "0%",
              color: "#9A715B",
              marginBottom: "20px",
            }}
          >
            About Us
          </h2>
          <h1
            style={{
              fontFamily: "Kollektif, sans-serif",
              fontWeight: 400,
              fontSize: "48px",
              lineHeight: "57px",
              letterSpacing: "0%",
              color: "#4C6559",
              marginBottom: "20px",
            }}
          >
            Revolutionizing Spaces with <br /> Design and Technology
          </h1>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26.8px",
              letterSpacing: "0px",
              color: "#9A715B",
              marginBottom: "30px",
            }}
          >
            Spacifyd creates innovative, functional, and beautiful spaces <br />
            by blending advanced technology with thoughtful, purpose-driven
            design.
          </p>
          <button
            style={{
              width: "132px",
              height: "44px",
              borderRadius: "4px",
              padding: "12px 16px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              color: "white",
              backgroundColor: "#4C6559",
              border: "2px solid #4C6559",
              cursor: "pointer",
              marginBottom: "84px",
            }}
          >
            Know More
          </button>
        </div>

        {/* Transparent Buttons */}
        <div
          style={{
            position: "absolute",
            top: "441px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1240px",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          {lampButtons.map((button, index) => (
            <button
              key={index}
              style={{
                width: "283.64px",
                height: "55.15px",
                borderRadius: "68.65px",
                padding: "7px 16px",
                gap: "10px",
                background: "#FFFFFF73",
                backdropFilter: "blur(7.3px)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                color: "#9A715B",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ marginRight: "10px" }}>{button.icon}</span>
              {button.text}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
