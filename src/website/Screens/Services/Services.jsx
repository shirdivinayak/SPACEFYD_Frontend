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
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <HomeNavbar />
      <div className="services-page">
        {/* Hero Section */}
        <div className="services-hero" style={{ backgroundImage: `url(${HeroImage})` }}>
          <div className="container px-4">
            <h1 className="services-hero-title">{t("main-head")}</h1>
            <p
              className="services-hero-description"
              dangerouslySetInnerHTML={{ __html: t("sub-head") }}
            ></p>
          </div>
        </div>
        
        {/* Main Content Sections */}
        <div className="services-main-container" style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <h1 className="services-main-heading">{t("s1-main-head")}</h1>

          <div className="services-content-wrapper">
            {/* Automated Lighting Section */}
            <div id="automated-lighting" className="services-section services-text-left">
              <div className="services-content">
                <h2>Automated Lighting & Climate</h2>
                <p>{t("l1-p")}</p>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>Smart lighting control systems</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>Automated climate regulation</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>Energy efficient solutions</p>
                </div>
              </div>
              <div className="services-image-right">
                <img src={Image1} alt="Automated lighting and climate control" />
              </div>
            </div>

            {/* Home Theaters Section */}
            <div id="home-theaters" className="services-section services-text-right">
              <div className="services-image-left">
                <img src={Image2} alt="Home theaters and VR gaming setups" />
              </div>
              <div className="services-content-right">
                <h2>Home Theaters & VR</h2>
                <p>Immersive entertainment solutions</p>
                <div className="services-sub-content-right">
                  <p>4K/8K home theater systems</p>
                  <i className="bi bi-arrow-left services-icon"></i>
                </div>
                <div className="services-sub-content-right">
                  <p>Virtual reality gaming setups</p>
                  <i className="bi bi-arrow-left services-icon"></i>
                </div>
                <div className="services-sub-content-right">
                  <p>Acoustic optimization</p>
                  <i className="bi bi-arrow-left services-icon"></i>
                </div>
              </div>
            </div>

            {/* Voice Activated Section */}
            <div id="voice-activated" className="services-section services-text-left">
              <div className="services-content">
                <h2>Voice-Activated Solutions</h2>
                <p>Smart home voice integration</p>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>Window treatment automation</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>Smart wardrobe systems</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>Multi-platform compatibility</p>
                </div>
              </div>
              <div className="services-image-right">
                <img src={Image3} alt="Voice-activated curtains and wardrobes" />
              </div>
            </div>
          </div>

          <div className="services-divider"></div>
          <h1 className="services-main-heading">Interior Fit-Out Solutions</h1>

          <div className="services-content-wrapper">
            {/* Climate Adaptive Section */}
            <div id="climate-adaptive" className="services-section services-text-left">
              <div className="services-content">
                <h2>Climate-Adaptive Systems</h2>
                <p>Smart HVAC solutions</p>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>Zone-based climate control</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>Energy efficient designs</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>Automated temperature regulation</p>
                </div>
              </div>
              <div className="services-image-right">
                <img src={Image4} alt="Climate-adaptive HVAC systems" />
              </div>
            </div>

            {/* Bespoke Kitchens Section */}
            <div id="bespoke-kitchens" className="services-section services-text-right">
              <div className="services-image-left">
                <img src={Image5} alt="Bespoke modular kitchens and custom furniture" />
              </div>
              <div className="services-content-right">
                <h2>Bespoke Kitchens & Furniture</h2>
                <p>Custom interior solutions</p>
                <div className="services-sub-content-right">
                  <p>Modular kitchen designs</p>
                  <i className="bi bi-arrow-left services-icon"></i>
                </div>
                <div className="services-sub-content-right">
                  <p>Custom cabinetry</p>
                  <i className="bi bi-arrow-left services-icon"></i>
                </div>
                <div className="services-sub-content-right">
                  <p>Premium materials</p>
                  <i className="bi bi-arrow-left services-icon"></i>
                </div>
              </div>
            </div>

            {/* Turkey Interior Section */}
            <div id="turkey-interior" className="services-section services-text-left">
              <div className="services-content">
                <h2>Turkey Interior Solutions</h2>
                <p>Local design expertise</p>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>Regional material sourcing</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>Cultural design elements</p>
                </div>
                <div className="services-sub-content">
                  <i className="bi bi-arrow-right services-icon"></i>
                  <p>Local craftsmanship</p>
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