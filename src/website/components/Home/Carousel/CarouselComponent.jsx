import React, { useState } from "react";
import "./CarouselComponent.css";
import image1 from "../../../Assets/Home/image1.png";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      image: image1,
      heading: "Al Khaleej Serenity Villa Renovation",
    },
    {
      image: image1,
      heading: "Elegant Kitchen Design",
    },
    {
      image: image1,
      heading: "Cozy Bedroom Design",
    },
    {
      image: image1,
      heading: "Minimalist Office Design",
    },
  ];

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-home-container">
      {/* Heading Section */}
      <div className="carousel-home-heading-section">
        <div>
          <h2 className="carousel-sub-heading">Our Trending Projects</h2>
          <h1 className="carousel-main-heading">
            Transforming Spaces with Seamless Interior Solutions
          </h1>
        </div>
        <button
          className="carousel-home-know-more-btn large-screen-btn"
          style={{
            width: "132px",
            height: "44px",
            borderRadius: "4px",
            padding: "12px 16px",
            fontFamily: "Raleway, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            color: "white",
            background: "#4C6559",
            whiteSpace: "nowrap",
            minWidth: "100px",
            border: "1px solid #4C6559",
            cursor: "pointer",
          }}
        >
          Know More
        </button>
      </div>

      {/* Custom Carousel Implementation */}
      <div className="custom-carousel-wrapper">
        <div className="custom-carousel">
          {/* Left Image Section */}
          <div
            className="carousel-image-section"
            style={{
              backgroundImage: `url(${carouselData[currentIndex].image})`,
            }}
          />

          {/* Right Content Section */}
          <div
            className="carousel-content-section"
            style={{ backgroundColor: "#9A715B" }}
          >
            <div className="carousel-content-inner">
              <h3>{carouselData[currentIndex].heading}</h3>
              <hr />
            </div>

            <div className="carousel-navigation">
              <p>{`${currentIndex + 1}/${carouselData.length}`}</p>
              <div className="carousel-navigation-buttons">
                <button onClick={goToPrev}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <button onClick={goToNext}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Know More Button */}
      <div className="carousel-home-small-screen-btn-container">
        <button
          className="carousel-home-know-more-btn small-screen-btn"
          style={{
            width: "132px",
            height: "44px",
            borderRadius: "4px",
            padding: "12px 16px",
            fontFamily: "Raleway, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            color: "white",
            background: "#4C6559",
            whiteSpace: "nowrap",
            minWidth: "100px",
            border: "1px solid #4C6559",
            cursor: "pointer",
            margin: "20px auto 0",
          }}
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
