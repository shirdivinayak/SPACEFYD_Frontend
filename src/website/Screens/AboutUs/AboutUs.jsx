import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../Assets/AboutUs/hero.svg";
import MainImage from "../../Assets/AboutUs/image219.svg";
import Image3 from "../../Assets/AboutUs/view3.svg";
import Gradient from "../../Assets/AboutUs/Gradient.svg";
import circles from "../../Assets/AboutUs/circles.svg";
import HomeNavbar from "../../components/Home/Navbar/HomeNavbar";
import Footer from "../../components/Home/Footer/Footer";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div>
      <HomeNavbar />
      {/* Hero Section with Background */}
      <div
        className="hero-section d-flex align-items-center justify-content-center text-white text-center"
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
            interior solutions <br />
            with unmatched quality and care. Designs for Functional and
            Inspiring Interiors
          </p>
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
        className="container-fluid d-flex flex-row  flex-md-row justify-content-center align-items-center mt-5 col-lg-6 col-sm-6 p-0 "
        style={{
          color: "#4C6559",
          backgroundImage: `url(${Gradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "90%", // Full width for mobile
          minheight: "80vh",
          maxWidth: "1240px",
          overflow: "hidden",
          padding: "15px",
          // paddingRight: "0px",
          marginLeft: "auto", // Center container for larger screens
          marginRight: "auto", // Center container for larger screens
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        {/* Left Section */}
        <div
          className="d-flex flex-column col-lg-7 col-md-6 text-left text-md-left"
          style={{ flex: 1 }}
        >
          <h2>Innovative, Sustainable</h2>
          <h2>Interiors Tailored to Inspire.</h2>

          <div className="d-flex flex-column flex-sm-row mt-4">
            {/* Left Column */}
            <div className="d-flex flex-column me-sm-4 ">
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
          className="d-flex flex-sm-row col-lg-5 col-md-6 justify-content-center align-items-center m-0"
          style={{
            // height: "100%",
            flex: 1,
            alignSelf: "stretch", // Ensure the image container stretches
          }}
        >
          <img
            src={Image3} // Uncomment and provide the correct image source
            alt="Interior Design"
            id="image3"
            className="img-fluid"
            style={{
              width: "100%",
              maxWidth: "620px",
              objectFit: "cover",
              height: "100vh", // Ensure the aspect ratio is maintained
              display: "block", // Ensures no inline elements affect it
              margin: "0 auto", // Centers the image horizontally if needed
            }}
          />
        </div>
      </div>

      <div
        className="container-fluid d-flex flex-column flex-md-row   position-relative p-5 rounded-4 mt-5  "
        style={{
          backgroundColor: "#4C6559",
          color: "#ffffff",
          width: "90%",
          maxWidth: "1200px",
          overflow: "hidden",
        }}
      >
        {/* Left Content */}
        <div
          className=" container "
          style={{
            width: "100%",
          }}
        >
          <button
            className="btn btn-light px-4 py-2 mb-3 col-md-6 "
            style={{
              borderRadius: "50px",
              backgroundColor: "white",
              borderBlockWidth: "0.5px",
            }}
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
        <div className=" col-md-6 col-12 mt-3 mt-md-0">
          <img
            src={circles}
            alt="Background Design"
            className="w-100 h-auto "
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>

      <div className="display-flex justify-content-center align-items-center my-5"></div>
      <div className="container text-center mt-4">
        <p className="fs-4" style={{ color: "#9A715B" }}>
          We Create <strong>Intelligent, Future-Ready</strong> Spaces By
          <br />
          Blending <strong>Design And Technology</strong>, Delivering
          <br />
          Innovative, Sustainable, And Customized Interior <br />
          Solutions With Excellence
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
