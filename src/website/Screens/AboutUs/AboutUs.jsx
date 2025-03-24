import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../Assets/AboutUs/hero.svg";
import HeroImage2 from "../../Assets/AboutUs/heromob.svg";
import MainImage from "../../Assets/AboutUs/image219.svg";
import Image3 from "../../Assets/AboutUs/view3.svg";
import circlegrad from "../../Assets/AboutUs/circlegrad.svg";
import Gradient from "../../Assets/AboutUs/Gradient.svg";
import circles from "../../Assets/AboutUs/circles.svg";
import HomeNavbar from "../../components/Home/NavbarDark/DarkNavbar";
// import HomeNavbar from "../../components/Home/Navbar/HomeNavbar";
import Footer from "../../components/Home/Footer/Footer";
import ContentSection from "../../components/Home/Content/ContentSection";
import "./AboutUs.css";
import { JustifyLeft } from "react-bootstrap-icons";
const AboutUs = () => {
  // const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  return (
    <div>
      <HomeNavbar />
      {/* Hero Section with Background */}

      <div
        className="hero-section "
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        {" "}
        <div className="container">
          <h1>About Us</h1>
          <p>
            Dedicated to delivering innovative, functional, and aesthetic
            interior solutions <br />
            with unmatched quality and care. Designs for Functional and
            Inspiring Interiors
          </p>
        </div>
      </div>

      {/* Overlay Image */}
      <div className="overlay-image-container">
        <img src={MainImage} alt="Overlay" className="overlay-image" />
      </div>
      <div
        className="about-us container-fluid d-flex flex-wrap   justify-content-center align-items-center mt-5 col-lg-6 col-sm-6 p-0 "
        style={{
          color: "#4C6559",
          backgroundImage: `url(${Gradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "90%", // Full width for mobile
          height: "100%",
          // minheight: "80vh",
          minHeight: window.innerWidth ? "80vh" : "1000px",
          // maxHeight: window.innerWidth > 600 ? "640px" : "1200px",
          overflow: "hidden",
          padding: " 20px 15px",
          // paddingRight: "0px",
          marginLeft: "auto", // Center container for larger screens
          marginRight: "auto", // Center container for larger screens
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        {window.innerWidth < 400 && (
          <h2>
            Innovative, Sustainable <br /> Interiors Tailored to Inspire.
          </h2>
        )}

        {/* Left Section */}
        <div
          className="d-flex flex-column col-lg-8 col-md-6 text-left text-md-left "
          style={{ flex: 1 }}
        >
          <div className=" heading-part container px-4">
            {window.innerWidth > 400 && (
              <h2>
                Innovative, Sustainable <br /> Interiors Tailored to Inspire.
              </h2>
            )}
          </div>
          <div className=" left-column d-flex flex-column flex-sm-row mt-4 px-4">
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
            <div className=" right-column d-flex flex-column">
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
          className="image-right d-flex flex-sm-row col-lg-5 col-md-6 justify-content-center align-items-center m-0"
          style={{
            maxWidth: "487px",
            flex: 1,
            alignSelf: "stretch", // Ensure the image container stretches
          }}
        >
          <img
            src={Image3}
            alt="Interior Design"
            id="image3"
            className="img-fluid"
            style={{
              // borderTopRightRadius: "12px",
              // borderBottomRightRadius: "12px",
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
        // className="container-fluid d-flex flex-column flex-md-row position-relative rounded-4"
        className={
          window.innerWidth < 768
            ? "d-block container-fluid flex-column flex-md-row position-relative rounded-4"
            : "d-flex container-fluid flex-column flex-md-row position-relative rounded-4"
        }
        style={{
          backgroundColor: "#4C6559",
          color: "#ffffff",
          width: "90%",
          maxWidth: "1200px",
          overflow: "hidden",
          marginTop: "50px",
          minHeight: "456px",
        }}
      >
        {/* Left Content */}
        <div
          className=" container "
          style={{
            backgroundImage: [circlegrad],
            backgroundPosition: JustifyLeft,
            width: "100%",
            marginTop: "60px",
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
        {/* right content */}
        <div className="d-flex justify-content-center align-items-center col-md-6 col-12">
          <img src={circles} alt="" />
        </div>
      </div>
      <div className="display-flex justify-content-center align-items-center my-5"></div>
      <div className="container text-center mt-4">
        <p
          style={{
            color: "#9A715B",
            fontSize: "45px",
            fontStyle: "italic",
            lineHeight: "50px",
            fontWeight: "200px",
          }}
        >
          We Create <strong>Intelligent, Future-Ready</strong> Spaces By
          <br />
          Blending <strong>Design And Technology</strong>, Delivering
          <br />
          Innovative, Sustainable, And Customized Interior <br />
          Solutions With Excellence
        </p>
      </div>
      <ContentSection></ContentSection>
      <Footer />
    </div>
  );
};

export default AboutUs;
