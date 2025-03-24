import React from "react";
import "./Sections.css"; // Importing CSS file
import sectionbackground from "../../../Assets/Home/Sections/servicebackground.png";

const Sections = ({ backgroundImage, sections }) => {
  return (
    <div
      className="background-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Top Headings */}
      <div className="text-center mb-5">
        <h6 className="section-subtitle">Our Services</h6>
        <h1 className="section-title">
          Tailored Solutions for Every Interior Need
        </h1>
      </div>

      {/* Sections Wrapper */}
      <div className="sections-wrapper">
        {sections.map((section, index) => (
          <div key={index} className="section-container">
            {/* Section Heading */}
            <h2 className="section-heading">{section.heading}</h2>

            {/* Section Content */}
            <div className="row">
              {/* Column 1 (8-column layout) */}
              <div className="col-8 d-flex flex-column">
                {/* Row 1 */}
                <div className="row flex-grow-1">
                  <div className="col-12 position-relative">
                    <img
                      src={section.col8.row1.image}
                      alt={section.col8.row1.alt}
                      className="img-fluid"
                    />
                    <div className="image-overlay">
                      <p className="image-text">{section.col8.row1.text}</p>
                      <button className="image-button">
                        <svg
                          className="button-icon"
                          width="19.038166046142578"
                          height="19.038166046142578"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Row 2 */}
                <div className="row flex-grow-1 mt-3">
                  <div className="col-12 position-relative">
                    <img
                      src={section.col8.row2.image}
                      alt={section.col8.row2.alt}
                      className="img-fluid"
                    />
                    <div className="image-overlay">
                      <p className="image-text">{section.col8.row2.text}</p>
                      <button className="image-button">
                        <svg
                          className="button-icon"
                          width="19.038166046142578"
                          height="19.038166046142578"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 (4-column layout) */}
              <div className="col-4 d-flex">
                <div className="image-wrapper position-relative">
                  <img
                    src={section.col4.image}
                    alt={section.col4.alt}
                    className="img-fluid"
                  />
                  <div className="image-overlay">
                    <p className="image-text">{section.col4.text}</p>
                    <button className="image-button">
                      <svg
                        className="button-icon"
                        width="19.038166046142578"
                        height="19.038166046142578"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
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