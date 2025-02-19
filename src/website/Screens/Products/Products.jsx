import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "./hero.svg";
import MainImage from "./image219.svg";
import Image3 from "./view3.svg";
const AboutUs = () => {
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
          <h1 className="display-3 fw-bold">Our Products</h1>
          <p className="lead">
          Explore our curated range of premium products designed to transform every corner of your space.
          </p>
          <p>Designs for Functional and Inspiring Interiors</p>
        </div>
      </div>

      {/* Overlay Image */}
      <div
        className="d-flex justify-content-center"
        style={{ position: "relative", marginTop: "-100px" }}
      >
        <img
          src={MainImage}
          alt="Overlay"
          style={{
            width: "80%",
            maxWidth: "1000px",
            zIndex: 10,
            borderRadius: "20px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      <div
        className="container my-5 p-4 rounded-4 shadow-lg"
        style={{ color: "#4C6559", background: "#F5F2EB" }}
      >
        <div className="row align-items-center">
          {/* Left Section with Two Columns */}
          <div className="col-lg-6">
            <h2 className="fw-bold text-dark" style={{ color: "#4C6559" }}>
              Innovative, Sustainable
            </h2>
            <h2 className="fw-bold text-dark" style={{ color: "#4C6559" }}>
              Interiors Tailored to Inspire.
            </h2>
            <div className="row mt-4">
              {/* Left Column */}
              <div className="col-md-6">
                <h4 className="fw-bold text-dark" style={{ color: "#4C6559" }}>
                  Comprehensive Solutions
                </h4>
                <p className="text-muted" style={{ color: "#4C6559" }}>
                  From custom furniture to HVAC installations and landscape
                  design, we manage every detail of your project.
                </p>

                <h4 className="fw-bold text-dark" style={{ color: "#4C6559" }}>
                  Sustainability Commitment
                </h4>
                <p className="text-muted">
                  We prioritize eco-friendly materials and energy-efficient
                  systems to ensure minimal environmental impact.
                </p>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                <h4 className="fw-bold text-dark" style={{ color: "#4C6559" }}>
                  Expert Team
                </h4>
                <p className="text-muted" style={{ color: "#4C6559" }}>
                  With a team of skilled designers, project managers, and
                  technicians, we bring creativity and expertise to every
                  project.
                </p>

                <h4 className="fw-bold text-dark" style={{ color: "#4C6559" }}>
                  Proven Track Record
                </h4>
                <p className="text-muted" style={{ color: "#4C6559" }}>
                  Our portfolio covers hospitality, corporate, retail, and
                  healthcare, earning trust in Oman and beyond.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section with Image */}
          <div className="col-lg-6 text-center">
            <img
              src={Image3}
              alt="Interior Design"
              className="img-fluid rounded-4"
              style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
            />
          </div>
        </div>
        <div className="container text-center mt-5">
          <p className="fs-4" style={{ color: "#9A715B" }}>
            <em>
              We Create <strong>Intelligent, Future-Ready</strong> Spaces By
            </em>{" "}
            <br />
            <em>
              Blending <strong>Design And Technology</strong>, Delivering
            </em>{" "}
            <br />
            <em>Innovative, Sustainable, And Customized Interior</em> <br />
            <em>
              <u>Solutions With Excellence</u>
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
