import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import "./CarouselComponent.css"; // Import the CSS file
import image1 from "../../../Assets/Home/image1.png";
import background from "../../../Assets/Home/background.png";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0); // State to track active carousel item

  // Handle carousel navigation
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Data for carousel items
  const carouselData = [
    {
      image: image1,
      heading: "Al Khaleej Serenity Villa Renovation",
      subheading: "Ruwi",
    },
    {
      image: image1,
      heading: "Elegant Kitchen Design",
      subheading: "Ruwi",
    },
    {
      image: image1,
      heading: "Cozy Bedroom Design",
      subheading: "Ruwi",
    },
    {
      image: image1,
      heading: "Minimalist Office Design",
      subheading: "Ruwi",
    },
  ];

  return (
    <div
      className="carousel-home-container"
      style={{
        margin: "100px auto",
        maxWidth: "1240px",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", // Make background responsive
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingBottom: "20px", // Space for button on small screens
      }}
    >
      {/* Heading Section */}
      <div
        className="carousel-home-heading-section"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "40px",
        }}
      >
        {/* Left Side: Headings */}
        <div>
          <h2
            className="carousel-sub-heading"
            style={{
              fontFamily: "Kollektif, sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "31px",
              letterSpacing: "-0.9px",
              color: "#9A715B",
              marginBottom: "10px",
            }}
          >
            Our Trending Projects
          </h2>
          <h1
            className="carousel-main-heading"
            style={{
              fontFamily: "Kollektif, sans-serif",
              fontWeight: 400,
              fontSize: "48px",
              lineHeight: "59px",
              letterSpacing: "-0.9px",
              color: "#4C6559",
              paddingRight: "450px",
            }}
          >
            Transforming Spaces with Seamless Interior Solutions
          </h1>
        </div>

        {/* Right Side: Know More Button (Large Screens) */}
        <Button
          variant="outline-dark"
          className="carousel-home-know-more-btn large-screen-btn"
          style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            padding: "8px",
            color: "white",
            background: "#4C6559",
            whiteSpace: "nowrap",
            minWidth: "100px",
          }}
        >
          Know More
        </Button>
      </div>

      {/* Carousel Section */}
      <div
        className="carousel-home-section"
        style={{
          width: "100%",
          height: "744px",
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          prevIcon={null}
          nextIcon={null}
        >
          {carouselData.map((item, idx) => (
            <Carousel.Item key={idx}>
              <div
                style={{
                  display: "flex",
                  height: "744px",
                }}
              >
                {/* Left: Image */}
                <div
                  style={{
                    flex: 1,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Right: Content */}
                <div
                  className="carousel-content"
                  style={{
                    flex: 1,
                    padding: "40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundColor: "#F8F9FA",
                  }}
                >
                  {/* Top: Heading and Subheading */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "Kollektif",
                        fontWeight: 400,
                        fontSize: "50.26px",
                        lineHeight: "71.16px",
                        letterSpacing: "-2.35px",
                        verticalAlign: "middle",
                        color: "#000",
                        marginBottom: "20px",
                      }}
                    >
                      {item.heading}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: "24px",
                        lineHeight: "20px",
                        letterSpacing: "0%",
                        verticalAlign: "middle",
                        color: "#505F79",
                        marginBottom: "30px",
                      }}
                    >
                      {item.subheading}
                    </p>
                    <hr
                      style={{
                        borderTop: "1px solid #000",
                        marginBottom: "30px",
                      }}
                    />
                  </div>

                  {/* Bottom: Page Number and Navigation Icons */}
                  <div
                    className="carousel-navigation"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "auto", // Push to the bottom
                    }}
                  >
                    <p
                      className="carousel-page-number"
                      style={{
                        fontFamily: "Kollektif, sans-serif",
                        fontSize: "18px",
                        color: "#000",
                        margin: 0,
                      }}
                    >
                      {`${idx + 1}/${carouselData.length}`}
                    </p>

                    <div className="carousel-navigation-buttons">
                      <Button
                        variant="outline-dark"
                        onClick={() =>
                          handleSelect(
                            (idx - 1 + carouselData.length) %
                              carouselData.length
                          )
                        }
                        style={{
                          marginRight: "10px",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          padding: 0,
                          border: "1px solid #000",
                          backgroundColor: "transparent",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 18L9 12L15 6"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Button>
                      <Button
                        variant="outline-dark"
                        onClick={() =>
                          handleSelect((idx + 1) % carouselData.length)
                        }
                        style={{
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          padding: 0,
                          border: "1px solid #000",
                          backgroundColor: "transparent",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Know More Button (Small Screens) */}
      <div
        className="carousel-home-small-screen-btn-container"
        style={{ display: "none", textAlign: "center", marginTop: "20px" }}
      >
        <Button
          variant="outline-dark"
          className="carousel-home-know-more-btn small-screen-btn"
          style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            padding: "8px",
            border: "2px solid #000",
            color: "white",
            background: "#4C6559",
            whiteSpace: "nowrap",
            minWidth: "100px",
          }}
        >
          Know More
        </Button>
      </div>
    </div>
  );
};

export default CarouselComponent;