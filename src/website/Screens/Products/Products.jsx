import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../Assets/AboutUs/hero.svg";
const Services = () => {
  return (
    <div>
      {/* Hero Section with Background */}
      <div
        className="d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          maxWidth: "1440px",
          height: "614px",
          position: "relative",
        }}
      >
        <div className="container px-4">
          <h1 className="display-3 fw-bold">Services</h1>
          <p className="lead">
          Seamlessly blending technology, functionality, and design to create intelligent, future-ready spaces tailored to your needs          </p>
        </div>
      </div>

     </div>
  );
};

export default Services;
