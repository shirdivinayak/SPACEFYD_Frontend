import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css"; // Import CSS file
import HeroImage from "../../Assets/AboutUs/hero.svg";
import BackgroundImage from "../../Assets/Services/backgroundimage.svg";
import Image1 from "../../Assets/Services/Image1.png";
import Image2 from "../../Assets/Services/Image2.png";
import Image3 from "../../Assets/Services/Image3.png";
import Image4 from "../../Assets/Services/Image4.png";
import Image5 from "../../Assets/Services/Image5.png";
import Image6 from "../../Assets/Services/Image6.png";
import HomeNavbar from "../../components/Home/NavbarDark/DarkNavbar"; // Import Navbar
import ContentSection from "../../components/Home/Content/ContentSection";
import { useTranslation } from "react-i18next";

import Footer from "../../components/Home/Footer/Footer"; // Import Footer

const Services = () => {
  const { t } = useTranslation("services");
  return (
    <>
      <HomeNavbar /> {/* Navbar at the top */}
      <div>
        {/* Hero Section with Background */}
        <div
          className="services-container"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="container px-4">
            <h1 className="service-title">{t("main-head")}</h1>
            <p
              className="service-description"
              dangerouslySetInnerHTML={{ __html: t("sub-head") }}
            ></p>
          </div>
        </div>
        {/* Main Content Section */}
        <div
          className="main-container"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          <h1 className="service-head">{t("s1-main-head")}</h1>

          {/* Left and Right Content Sections */}
          <div className="content-wrapper">
            {/* Left Content */}
            <div className="section-container text-section-left ">
              <div className="content-container">
                <h2>{t("left1-main-head")}</h2>
                <p>{t("l1-p")}</p>

                {/* List Items */}
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l1-list1")}</p>
                </div>
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l1-list2")}</p>
                </div>
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l1-list3")}</p>
                </div>
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l1-list4")}</p>
                </div>
                <div className="sub-content-no">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l1-list5")}</p>
                </div>
              </div>
              <div className="image-container-right">
                <img
                  src={Image1}
                  alt=""
                  style={{
                    marginRight: "0px",
                  }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="section-container text-section-right">
              <div className="right-images">
                <img
                  src={Image2}
                  alt=""
                  style={{
                    marginLeft: "0px",
                  }}
                />
              </div>
              <div className="content-container-right">
                <h2>{t("right2-main-head")}</h2>
                <p>{t("r2-p")}</p>

                {/* List Items */}
                <div className="sub-content">
                  <p>{t("r2-list1")}</p>
                  <i className="bi bi-arrow-left icon"></i>
                </div>
                <div className="sub-content">
                  <p>{t("r2-list2")}</p>
                  <i className="bi bi-arrow-left icon"></i>
                </div>
                <div className="sub-content">
                  <p>{t("r2-list3")}</p>
                  <i className="bi bi-arrow-left icon"></i>
                </div>
                <div className="sub-content">
                  <p>{t("r2-list4")}</p>
                  <i className="bi bi-arrow-left icon"></i>
                </div>
                <div className="sub-content">
                  <p>{t("r2-list5")}</p>
                  <i className="bi bi-arrow-left icon"></i>
                </div>
              </div>
            </div>
            <div className="section-container text-section-left">
              <div className="content-container">
                <h2>{t("left3-main-head")}</h2>
                <p>{t("left3-p")}</p>

                {/* List Items */}
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l3-list1")}</p>
                </div>
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l3-list2")}</p>
                </div>
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l3-list3")}</p>
                </div>
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l3-list4")}</p>
                </div>
                <div className="sub-content-no">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l3-list5")}</p>
                </div>
              </div>
              <div className="image-container-right">
                <img
                  src={Image3}
                  alt=""
                  style={{
                    marginRight: "0px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border"></div>
          <h1 className="service-head">{t("section2-main-head")}</h1>

          {/* Left and Right Content Sections */}
          <div className="content-wrapper">
            {/* Left Content */}
            <div className="section-container text-section-left">
              <div className="content-container">
                <h2>{t("left4-main-head")}</h2>
                <p>{t("left4-p")}</p>

                {/* List Items */}

                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l4-list1")}</p>
                </div>
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l4-list2")}</p>
                </div>
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l4-list3")}</p>
                </div>
                <div className="sub-content-no">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l4-list4")}</p>
                </div>
              </div>
              <div className="image-container-right">
                <img
                  src={Image4}
                  alt=""
                  style={{
                    marginRight: "0px",
                  }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="section-container text-section-right">
              <div className="right-images">
                <img
                  src={Image5}
                  alt=""
                  style={{
                    marginLeft: "0px",
                  }}
                />
              </div>
              <div className="content-container-right">
                <h2>{t("right5-main-head")}</h2>
                <p>{t("right5-p")}</p>

                {/* List Items */}

                <div className="sub-content">
                  <p>{t("r5-list1")}</p>
                  <i className="bi bi-arrow-left icon"></i>
                </div>
                <div className="sub-content">
                  <p>{t("r5-list2")}</p>
                  <i className="bi bi-arrow-left icon"></i>
                </div>
                <div className="sub-content">
                  <p>{t("r5-list4")}</p>
                  <i className="bi bi-arrow-left icon"></i>
                </div>
                <div className="sub-content">
                  <p>{t("r5-list3")}</p>
                  <i className="bi bi-arrow-left icon"></i>
                </div>
              </div>
            </div>
            <div className="section-container text-section-left">
              <div className="content-container">
                <h2>{t("left6-main-head")}</h2>
                <p>{t("left6-p")}</p>

                {/* List Items */}
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l6-list1")}</p>
                </div>
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l6-list2")}</p>
                </div>
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l6-list3")}</p>
                </div>
                <div className="sub-content">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l6-list4")}</p>
                </div>
                <div className="sub-content-no">
                  <i className="bi bi-arrow-right icon"></i>
                  <p>{t("l6-list5")}</p>
                </div>
              </div>
              <div className="image-container-right">
                <img
                  src={Image6}
                  alt=""
                  style={{
                    marginRight: "0px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <ContentSection />
        <Footer /> {/* Footer at the bottom */}
      </div>
    </>
  );
};

export default Services;
