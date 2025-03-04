import React from "react";
import "./Sections.css"; // Custom CSS file
import sectionbackground from "../../../Assets/Home/Sections/servicebackground.png";

const Sections = ({ backgroundImage, sections }) => {
  return (
    <div
      className="background-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "40px 0", // Padding top and bottom
        position: "relative",
        zIndex: 1,
        minHeight: "auto", // Fit content
        height: "auto", // Grow with content
      }}
    >
      {/* Top Headings */}
      <div className="text-center mb-5">
        <h6
          style={{
            width: "659px",
            height: "65px",
            fontFamily: "DM Sans",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "64.02px",
            letterSpacing: "0%",
            color: "#9A715B",
            margin: "0 auto",
          }}
        >
          Our Services
        </h6>

        <h1
          style={{
            width: "659px",
            height: "116px",
            fontFamily: "Kollektif",
            fontWeight: "400",
            fontSize: "48px",
            lineHeight: "58px",
            letterSpacing: "0%",
            color: "#4C6559",
            margin: "0 auto",
          }}
        >
          Tailored Solutions for Every Interior Need
        </h1>
      </div>

      {/* Sections Wrapper */}
      <div
        className="sections-wrapper"
        style={{
          backgroundImage: `url(${sectionbackground})`, // Default for large screens
          borderRadius: "24px",
          padding: "24px",
          width: "1112.39px",
          margin: "0 auto",
          paddingBottom: "64px", // Space for content
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className="section-container"
            style={{
              width: "100%",
              marginBottom: "100px", // Gap between sections
            }}
          >
            {/* Section Heading */}
            <h2
              style={{
                width: "100%",
                height: "53px",
                fontFamily: "DM Sans",
                fontWeight: "500",
                fontSize: "36px",
                lineHeight: "53px",
                letterSpacing: "0%",
                color: "#4C6559",
                textAlign: "left",
                marginBottom: "28px",
              }}
            >
              {section.heading}
            </h2>

            {/* Section Content */}
            <div className="row">
              {/* Column 1 (col-8) */}
              <div className="col-8 d-flex flex-column">
                {/* Row 1 */}
                <div className="row flex-grow-1">
                  <div className="col-12 h-100">
                    <img
                      src={section.col8.row1.image}
                      alt={section.col8.row1.alt}
                      className="img-fluid h-100 w-100"
                      style={{
                        borderRadius: "12px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                {/* Row 2 */}
                <div className="row flex-grow-1 mt-3">
                  <div className="col-12 h-100">
                    <img
                      src={section.col8.row2.image}
                      alt={section.col8.row2.alt}
                      className="img-fluid h-100 w-100"
                      style={{
                        borderRadius: "12px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Column 2 (col-4) */}
              <div className="col-4">
                <div className="h-100">
                  <img
                    src={section.col4.image}
                    alt={section.col4.alt}
                    className="img-fluid h-100 w-100"
                    style={{
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;