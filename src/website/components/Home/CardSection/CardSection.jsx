import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import card1 from "../../../Assets/Home/cards/card1.png";
import "./CardSection.css";
import { Button } from "react-bootstrap";

const CardSection = () => {
  const navigate = useNavigate();
  const cardsContainerRef = useRef(null);

  const handleKnowMoreClick = () => {
    navigate("/products");
    window.scrollTo(0, 0);
  };

  const scrollLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="card-section">
      <div className="content-wrapper">
        {/* Top Section: Heading and Button */}
        <div className="top-section">
          {/* Left Side: Heading and Subheading */}
          <div className="heading-section">
            <h2>Our Products</h2>
            <h1>Explore Our Range of Premium Interior Products</h1>
          </div>

          {/* Right Side: Button (Large Screens) and Navigation (Small Screens) */}
          <div className="button-navigation">
            <Link 
              to="/Products" 
              className="view-more-btn large-screen-btn"
              onClick={() => window.scrollTo(0, 0)}
            >
              View More
            </Link>
            <div className="small-screen-navigation">
              <button onClick={scrollLeft}>
                <span>‹</span>
              </button>
              <button onClick={scrollRight}>
                <span>›</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="cards-section">
          <div className="cards-container" ref={cardsContainerRef}>
            {[1, 2, 3, 4].map((card) => (
              <div key={card} className="card">
                <img src={card1} alt={`Card ${card}`} />
                <p>Grifo</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Icons (Large Screens) and View More (Small Screens) */}
      <div className="navigation-view-more">
        <div className="large-screen-navigation">
          <button onClick={scrollLeft}>
            <span>‹</span>
          </button>
          <button onClick={scrollRight}>
            <span>›</span>
          </button>
        </div>
        <div className="small-screen-view-more">
          <Button 
            className="view-more-btn" 
            onClick={handleKnowMoreClick}
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CardSection;