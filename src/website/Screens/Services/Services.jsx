import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";
import HeroImage from "../../Assets/AboutUs/hero.svg";
import BackgroundImage from "../../Assets/Services/backgroundimage.svg";
import Image1 from "../../Assets/Services/Image1.png";
import Image2 from "../../Assets/Services/Image2.png";
import Image3 from "../../Assets/Services/Image3.png";
import Image4 from "../../Assets/Services/Image4.png";
import Image5 from "../../Assets/Services/Image5.png";
import Image6 from "../../Assets/Services/Image6.png";
import HomeNavbar from "../../components/Home/NavbarDark/DarkNavbar";
import ContentSection from "../../components/Home/Content/ContentSection";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Home/Footer/Footer";

const Services = () => {
  const { t } = useTranslation("services");

  React.useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <HomeNavbar />
      <div className="services-page">
        {/* Hero Section */}
        <div
          className="services-hero"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="container px-4">
            <h1 className="services-hero-title">{t("main-head")}</h1>
            <p
              className="services-hero-description"
              dangerouslySetInnerHTML={{ __html: t("sub-head") }}
            ></p>
          </div>
        </div>

        {/* Main Content Sections */}
        <div
          className="services-main-container"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          <h1 className="services-main-heading">{t("s1-main-head")}</h1>

          <div className="services-content-wrapper">
            {/* Automated Lighting Section */}
            <div
              id="automated-lighting"
              className="services-section services-text-left"
            >
              <div className="services-content">
                <h2>{t("left1-main-head")}</h2>
                <p>{t("l1-p")}</p>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>{t("l1-list1")}</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>{t("l1-list2")}</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>{t("l1-list3")}</p>
                </div>
              </div>
              <div className="services-image-right">
                <img
                  src={Image1}
                  alt="Automated lighting and climate control"
                />
              </div>
            </div>

            {/* Home Theaters Section */}
            <div
              id="home-theaters"
              className="services-section services-text-right"
            >
              <div className="services-image-left">
                <img src={Image2} alt="Home theaters and VR gaming setups" />
              </div>
              <div className="services-content-right">
                <h2>{t("right2-main-head")}</h2>
                <p>{t("r2-p")}</p>
                <div className="services-sub-content-right">
                  <p>{t("r2-list1")}</p>
                  <i className="bi bi-arrow-left services-icon"></i>
                </div>
                <div className="services-sub-content-right">
                  <p>{t("r2-list2")}</p>
                  <i className="bi bi-arrow-left services-icon"></i>
                </div>
                <div className="services-sub-content-right">
                  <p>{t("r2-list3")}</p>
                  <i className="bi bi-arrow-left services-icon"></i>
                </div>
              </div>
            </div>

            {/* Voice Activated Section */}
            <div
              id="voice-activated"
              className="services-section services-text-left"
            >
              <div className="services-content">
                <h2>{t("left3-main-head")}</h2>
                <p>{t("left3-p")}</p>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>{t("l3-list1")}</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>{t("l3-list2")}</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>{t("l3-list3")}</p>
                </div>
              </div>
              <div className="services-image-right">
                <img
                  src={Image3}
                  alt="Voice-activated curtains and wardrobes"
                />
              </div>
            </div>
          </div>

          <div className="services-divider"></div>
          <h1 className="services-main-heading">{t("section2-main-head")}</h1>

          <div className="services-content-wrapper">
            {/* Climate Adaptive Section */}
            <div
              id="climate-adaptive"
              className="services-section services-text-left"
            >
              <div className="services-content">
                <h2>{t("left4-main-head")}</h2>
                <p>{t("left4-p")}</p>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>{t("l4-list1")}</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>{t("l4-list2")}</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>{t("l4-list3")}</p>
                </div>
              </div>
              <div className="services-image-right">
                <img src={Image4} alt="Climate-adaptive HVAC systems" />
              </div>
            </div>

            {/* Bespoke Kitchens Section */}
            <div
              id="bespoke-kitchens"
              className="services-section services-text-right"
            >
              <div className="services-image-left">
                <img
                  src={Image5}
                  alt="Bespoke modular kitchens and custom furniture"
                />
              </div>
              <div className="services-content-right">
                <h2>{t("right5-main-head")}</h2>
                <p>{t("right5-p")}</p>
                <div className="services-sub-content-right">
                  <p>{t("r5-list1")}</p>
                  <i className="bi bi-arrow-left services-icon"></i>
                </div>
                <div className="services-sub-content-right">
                  <p>{t("r5-list2")}</p>
                  <i className="bi bi-arrow-left services-icon"></i>
                </div>
                <div className="services-sub-content-right">
                  <p>{t("r5-list4")}</p>
                  <i className="bi bi-arrow-left services-icon"></i>
                </div>
              </div>
            </div>

            {/* Turkey Interior Section */}
            <div
              id="turkey-interior"
              className="services-section services-text-left"
            >
              <div className="services-content">
                <h2>{t("left6-main-head")}</h2>
                <p>{t("left6-p")}</p>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>{t("l6-list1")}</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>{t("l6-list2")}</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>{t("l6-list3")}</p>
                </div>
              </div>
              <div className="services-image-right">
                <img src={Image6} alt="Turkey interior solutions" />
              </div>
            </div>
          </div>
        </div>
        <ContentSection />
        <Footer />
      </div>
    </>
  );
};

export default Services;
