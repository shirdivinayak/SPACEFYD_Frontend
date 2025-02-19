import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../Assets/AboutUs/hero.svg";
import MainImage from "../../Assets/AboutUs/image219.svg";
import Image3 from "../../Assets/AboutUs/view3.svg";
import Gradient from "../../Assets/AboutUs/Gradient.svg";
import "./website.css";
import circles from "../../Assets/AboutUs/circles.svg";
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
          maxWidth: "1555px",
          height: "614px",
          position: "relative",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div className="container px-4">
          <h1 className="display-3 fw-bold">About Us</h1>
          <p className="lead">
            Dedicated to delivering innovative, functional, and aesthetic
            interior solutions with unmatched quality and care.
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
            width: "90%",
            maxWidth: "1300px",
            zIndex: 10,
            borderRadius: "20px",
            marginTop: "-20px",
            // boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      <div
        className="container-fluid d-flex flex-column flex-md-row justify-content-center align-items-center mt-5"
        style={{
          color: "#4C6559",
          backgroundImage: `url(${Gradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%", // Full width for mobile
          maxWidth: "1240px",
          padding: "15px",
          marginLeft: "auto", // Center container for larger screens
          marginRight: "auto", // Center container for larger screens
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        {/* Left Section */}
        <div
          className="d-flex flex-column text-left text-md-left"
          style={{ flex: 1 }}
        >
          <h2>Innovative, Sustainable</h2>
          <h2>Interiors Tailored to Inspire.</h2>

          <div className="d-flex flex-column flex-sm-row mt-4">
            {/* Left Column */}
            <div className="d-flex flex-column me-sm-4">
              <h5>Comprehensive Solutions</h5>
              <p>
                From custom furniture to HVAC installations and landscape
                design, we manage every detail of your project.
              </p>

              <h5>Sustainability Commitment</h5>
              <p>
                We prioritize eco-friendly materials and energy-efficient
                systems to ensure minimal environmental impact.
              </p>
            </div>

            {/* Right Column */}
            <div className="d-flex flex-column">
              <h5>Expert Team</h5>
              <p>
                With a team of skilled designers, project managers, and
                technicians, we bring creativity and expertise to every project.
              </p>

              <h5>Proven Track Record</h5>
              <p>
                Our portfolio covers hospitality, corporate, retail, and
                healthcare, earning trust in Oman and beyond.
              </p>
            </div>
          </div>
        </div>
        {/* Right Section with Image */}
        <div
          className="d-flex justify-content-center align-items-center mt-4 mt-md-0"
          style={{
            flex: 1,
            alignSelf: "stretch", // Ensure the image container stretches
          }}
        >
          <img
            src={Image3} // Uncomment and provide the correct image source
            alt="Interior Design"
            className="img-fluid"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto", // Ensure the aspect ratio is maintained
              display: "block", // Ensures no inline elements affect it
              margin: "0 auto", // Centers the image horizontally if needed
            }}
          />
        </div>
      </div>

      <div
        className="container-fluid position-relative p-5 rounded-4 mt-5"
        style={{
          backgroundColor: "#4C6559",
          color: "#ffffff",
          maxWidth: "1200px",
        }}
      >
        {/* Left Content */}
        <div className="w-50">
          <button
            className="btn btn-light px-4 py-2 mb-3 "
            style={{ borderRadius: "50px" }}
          >
            Come partner with us
          </button>
          <h2 className="fw-bold">
            Your Trusted Partner in Interior Solutions
          </h2>
          <p>
            With a strong presence in Oman, Saudi, India, Spacifyd is proud to
            collaborate with businesses and homeowners who seek cutting-edge
            designs and seamless execution. Every project we undertake reflects
            our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Tags Section */}
        <div className="d-flex-column position-absolute top-50 end-0 translate-middle-y w-50">
          <img src={circles} alt="Background Design" className="w-100 h-auto" />

          {/* Tag Items */}
          <div
            className="position-absolute"
            style={{ top: "10%", right: "15%" }}
          >
            <span
              className="badge bg-light text-dark p-3 shadow"
              style={{ borderRadius: "50px", backdropFilter: "blur(26.9px)" }}
            >
              Entertainment and Leisure 🎭
            </span>
          </div>

          <div
            className="position-absolute"
            style={{ top: "25%", left: "35%" }}
          >
            <span
              className="badge bg-light text-dark p-3 shadow"
              style={{ borderRadius: "50px" }}
            >
              Education 🎓
            </span>
          </div>

          <div
            className="position-absolute"
            style={{ top: "40%", right: "10%" }}
          >
            <span
              className="badge bg-light text-dark p-3 shadow"
              style={{ borderRadius: "50px" }}
            >
              Residential 🏠
            </span>
          </div>

          <div
            className="position-absolute"
            style={{ top: "55%", left: "25%" }}
          >
            <span
              className="badge bg-light text-dark p-3 shadow"
              style={{ borderRadius: "50px" }}
            >
              Hospitality 🏨
            </span>
          </div>

          <div
            className="position-absolute"
            style={{ bottom: "25%", left: "10%" }}
          >
            <span
              className="badge bg-light text-dark p-3 shadow"
              style={{ borderRadius: "50px" }}
            >
              Industrial Spaces 🏭
            </span>
          </div>

          <div
            className="position-absolute"
            style={{ bottom: "10%", right: "25%" }}
          >
            <span
              className="badge bg-light text-dark p-3 shadow"
              style={{ borderRadius: "50px" }}
            >
              Retail 🏪
            </span>
          </div>

          <div
            className="position-absolute"
            style={{ bottom: "5%", left: "50%" }}
          >
            <span
              className="badge bg-light text-dark p-3 shadow"
              style={{ borderRadius: "50px" }}
            >
              Commercial 🏢
            </span>
          </div>
        </div>
      </div>

      <div className="display-flex justify-content-center align-items-center"></div>
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
  );
};

export default AboutUs;