import React from "react";
import card1 from "../../../website/Assets/Home/cards/card1.png";
import "./CardSection.css";

const CardSection = () => {
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
            {/* Show button only on large screens using view-more-btn class */}
            <button className="view-more-btn large-screen-btn">
              Know More
            </button>
            <div className="small-screen-navigation">
              <button>
                <span>‹</span>
              </button>
              <button>
                <span>›</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="cards-section">
          {[1, 2, 3, 4].map((card) => (
            <div key={card} className="card">
              <img src={card1} alt={`Card ${card}`} />
              <p>Grifo</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Icons (Large Screens) and View More (Small Screens) */}
      <div className="navigation-view-more">
        <div className="large-screen-navigation">
          <button>
            <span>‹</span>
          </button>
          <button>
            <span>›</span>
          </button>
        </div>
        <div className="small-screen-view-more">
          <button className="view-more-btn">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardSection;