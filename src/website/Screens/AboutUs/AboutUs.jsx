import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";

import HeroImage from "../../Assets/AboutUs/hero.svg";
import HeroImage2 from "../../Assets/AboutUs/heromob.svg";
import MainImage from "../../Assets/AboutUs/image219.jpg";
import Image3 from "../../Assets/AboutUs/view3.png";
import circlegrad from "../../Assets/AboutUs/circlegrad.svg";
import Gradient from "../../Assets/AboutUs/Gradient.svg";
import circles from "../../Assets/AboutUs/circles.svg";

// import HomeNavbar from "../../components/Home/Navbar/HomeNavbar";
import HomeNavbar from "../../components/Home/NavbarDark/DarkNavbar";
import ContentSection from "../../components/Home/Content/ContentSection";
import Footer from "../../components/Home/Footer/Footer";

import { JustifyLeft } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation("about");

  // console.log("Rendering AboutUs - Current i18n language:", i18n.language);

  // const LanguageSwitcher = () => {
  //   const { i18n } = useTranslation();

  //   const changeLanguage = (lng) => {
  //     i18n.changeLanguage(lng); // Switches language dynamically
  //   };
  // <button onClick={() => changeLanguage("en")}>English</button>

  return (
    <div>
      <HomeNavbar />
      {/* Hero Section with Background */}

      <div
        className="hero-section-about "
        style={{
          marginLeft: "0",
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        {" "}
        <div className="">
          <h1>{t("title")}</h1>

          <p dangerouslySetInnerHTML={{ __html: t("title-sub") }}></p>
        </div>
      </div>

      {/* Overlay Image */}
      <div
        className="overlay-image-container"
        style={{
          marginBottom: "50px",
        }}
      >
        <img src={MainImage} alt="Overlay" className="overlay-image" />
      </div>

      <div
        className="about-us container-fluid d-flex flex-wrap justify-content-start align-items-center mt-5 col-lg-6 col-sm-6 p-0"
        style={{
          color: "white",
          backgroundImage: `url(${Image3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Changed from "contain" to avoid repetition
          backgroundPosition: "center",
          width: "90%", // Full width for mobile
          minHeight: "80vh",
          padding: "20px 15px",
          marginLeft: "auto",
          marginRight: "auto",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          display: "flex",
          justifyContent: "flex-start", // Ensures content stays on the left
        }}
      >
        {/* Left Section (Text) */}
        <div
          className="d-flex flex-column col-lg-6 col-md-6 text-left text-md-left"
          style={{
            width: "50%", // Keeps content in the left half
            textAlign: "left",
            paddingLeft: "16px", // Ensures text is justified to the left
          }}
        >
          <div
            style={{
              paddingLeft: "22px",
            }}
          >
            {window.innerWidth > 400 && (
              <h2
                style={{ marginTop: "50px" }}
                dangerouslySetInnerHTML={{
                  __html: t("second-section-heading"),
                }}
              ></h2>
            )}
          </div>

          <div className="left-column d-flex flex-column flex-sm-row mt-4 px-4">
            {/* Left Column */}
            <div className="d-flex flex-column me-sm-4">
              <h5>{t("left-column-top-head")}</h5>
              <p>{t("left-column-top-content")}</p>

              <h5>{t("left-column-bottom-head")}</h5>
              <p>{t("left-column-bottom-content")}</p>
            </div>

            {/* Right Column */}
            <div className="right-column d-flex flex-column">
              <h5>{t("right-column-top-head")}</h5>
              <p>{t("right-column-top-content")}</p>

              <h5>{t("right-column-bottom-head")}</h5>
              <p>{t("right-column-bottom-content")}</p>
            </div>
          </div>
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
            className="btn btn-light  mb-3 col-md-6 "
            style={{
              borderRadius: "50px",
              backgroundColor: "white",
              borderBlockWidth: "0.5px",
              paddingLeft: "20px",
            }}
          >
            {t("partner-button")}
          </button>
          <h2 className="fw-bold">{t("third-section-head")}</h2>
          <p>{t("third-section-content")}</p>
        </div>
        {/* right content */}
        <div className="d-flex justify-content-center align-items-center col-md-6 col-12">
          <img src={circles} alt="" />
        </div>
      </div>
      <div className="display-flex justify-content-center align-items-center my-5"></div>
      <div className="container text-center mt-4">
        <p
          dangerouslySetInnerHTML={{ __html: t("fouth-section-content") }}
          style={{
            color: "#9A715B",
            fontSize: "45px",
            lineHeight: "50px",
            fontWeight: "200px",
          }}
        ></p>
      </div>
      <ContentSection></ContentSection>
      <Footer />
    </div>
  );
};

export default AboutUs;
