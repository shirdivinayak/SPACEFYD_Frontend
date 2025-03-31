import React from "react";
import "./Products.css";
import background from "../../../Assets/Home/rightbackground.jpg";
import sectionBackground from "../../../Assets/Home/background.png"; // Add this import

const Products = () => {
  return (
    <div className="products-outer-container">
      <div className="products-home-container">
        <div 
          className="products-home-bg-section"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="products-home-content-wrapper">
            <div className="products-home-left-content">
              <h1 className="products-home-left-heading">
                Elevate <br />
                Entertainment with Home Theatre Design
              </h1>
              <div className="products-home-content-row">
                <div className="products-home-content-column">
                  <h2 className="products-home-subheading">Immersive Audio</h2>
                  <p className="products-home-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus imperdiet sed id.
                  </p>
                </div>
                <div className="products-home-content-column">
                  <h2 className="products-home-subheading">Clear Display</h2>
                  <p className="products-home-content">
                    Ultra HD screens for stunning picture quality.
                  </p>
                </div>
              </div>
              <div className="products-home-content-row">
                <div className="products-home-content-column">
                  <h2 className="products-home-subheading">Smart Control</h2>
                  <p className="products-home-content">
                    Integrate devices for seamless voice and remote operations.
                  </p>
                </div>
                <div className="products-home-content-column">
                  <h2 className="products-home-subheading">Ambiance Setting</h2>
                  <p className="products-home-content">
                    Lighting and design tailored to your preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;