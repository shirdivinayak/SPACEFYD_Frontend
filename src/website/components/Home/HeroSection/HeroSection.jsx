import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import banner from "../../../Assets/Home/homebanner.png";
import lamp from "../../../Assets/Home/lamp.png";
import "./HeroSection.css";
import icon1 from "../../../Assets/Home/icons/hero/industrial.png";
import icon2 from "../../../Assets/Home/icons/hero/residential.png";
import icon3 from "../../../Assets/Home/icons/hero/entertainment.png";
import icon4 from "../../../Assets/Home/icons/hero/retail.png";
import icon5 from "../../../Assets/Home/icons/hero/education.png";
import icon6 from "../../../Assets/Home/icons/hero/hospitality.png";
import icon7 from "../../../Assets/Home/icons/hero/commercial.png";
import lampicon1 from "../../../Assets/Home/icons/lamp/smart.png";
import lampicon2 from "../../../Assets/Home/icons/lamp/tailored.png";
import lampicon3 from "../../../Assets/Home/icons/lamp/innovative.png";
import lampicon4 from "../../../Assets/Home/icons/lamp/future.png";
import axiosInstance from "../../../../instance/axiosInstance";
import { useTranslation } from "react-i18next";

// Button data for the Hero Section
const topButtons = [
  { icon: icon1, text: "Industrial Spaces" },
  { icon: icon2, text: "Residential Spaces" },
  { icon: icon3, text: "Entertainment and Leisure" },
];

const leftButtons = [
  { icon: icon4, text: "Retail Environments" },
  { icon: icon5, text: "Educational Facilities" },
];

const rightButtons = [
  { icon: icon6, text: "Commercial Workspaces" },
  { icon: icon7, text: "Hospitality Venues" },
];

// Combined buttons for small screens
const allHeroButtons = [...topButtons, ...leftButtons, ...rightButtons].slice(
  0,
  7
);

// Button data for the Lamp Section
const lampButtons = [
  { icon: lampicon1, text: "AI-Driven Interiors" },
  { icon: lampicon2, text: "Bespoke Design Precision" },
  { icon: lampicon3, text: "Seamless Tech Integration" },
  { icon: lampicon4, text: "Future-Defined Spaces" },
];

// Reusable Button Component
const FloatingButton = ({ icon, text }) => (
  <button className="floating-btn">
    <img
      src={icon}
      alt={text}
      style={{
        width: "32px",
        height: "32px",
        marginRight: "10px",
        verticalAlign: "middle",
      }}
    />
    {text}
  </button>
);

const HeroSection = () => {
  const { t } = useTranslation("hero");
  const navigate = useNavigate();
  const [banners, setBanner] = useState([]);
  const [loading, setLoading] = useState([]);

  // Scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/contactus");
    window.scrollTo(0, 0);
  };

  const handleAboutUsClick = (e) => {
    e.preventDefault();
    navigate("/aboutus");
    window.scrollTo(0, 0);
  };
  const fetchBanner = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/fetchBannerImage");
      console.log(response.data.data[0].defaultImage, "=====bannerimage");
      if (response.data.data[0].defaultImage > 0) {
        setBanner(response.data.data[0].defaultImage);
      } else {
        setBanner(banner);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <div style={{ backgroundColor: "#FCF9F5" }}>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${banners})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px",
          borderRadius: "24px",
          width: "1360px",
          height: "672px",
          position: "relative",
          margin: "auto",
          maxWidth: "100%",
        }}
      >
        {/* Heading */}
        <div
          className="hero-heading"
          style={{
            width: "1086px",
            maxWidth: "100%",
            height: "180px",
            position: "absolute",
            top: "62px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Kollektif, sans-serif",
              fontWeight: 400,
              fontSize: "88px",
              lineHeight: "89.69px",
              letterSpacing: "0px",
              color: "#FCF9F5",
            }}
          >
            {t("h1")}
          </h1>
        </div>

        {/* Floating Buttons and Content Section */}
        <div
          className="hero-content"
          style={{
            position: "absolute",
            top: "300px",
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: "100%",
            textAlign: "center",
            zIndex: 2,
          }}
        >
          {/* Large Screen Layout */}
          <div className="large-screen-layout">
            <div
              className="top-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "100px",
                marginBottom: "35px",
              }}
            >
              {topButtons.map((button, index) => (
                <FloatingButton
                  key={index}
                  icon={button.icon}
                  text={button.text}
                />
              ))}
            </div>

            <div
              className="main-content"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                className="left-buttons"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "80px",
                }}
              >
                {leftButtons.map((button, index) => (
                  <FloatingButton
                    key={index}
                    icon={button.icon}
                    text={button.text}
                  />
                ))}
              </div>

              <div
                className="center-content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "36px",
                    lineHeight: "60.22px",
                    letterSpacing: "-0.73px",
                    color: "#FCF9F5",
                    textAlign: "center",
                    margin: "0",
                  }}
                >
                  {t("h2")}
                </h2>

                <div
                  className="hero-card"
                  style={{
                    width: "729px",
                    maxWidth: "100%",
                    height: "211px",
                    borderRadius: "10px",
                    border: "0.5px solid rgba(255, 255, 255, 0.2)",
                    background:
                      "linear-gradient(179.71deg, rgba(90, 90, 90, 0.4) 0.25%, rgba(90, 90, 90, 0) 108.54%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    boxSizing: "border-box",
                    position: "relative",
                    zIndex: 3,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "27px",
                      letterSpacing: "0px",
                      color: "#FCF9F5",
                      textAlign: "center",
                      margin: "0 0 24px 0",
                      paddingRight: "20px",
                      paddingLeft: "20px",
                    }}
                    dangerouslySetInnerHTML={{ __html: t("p") }}
                  ></p>

                  <Button
                    variant="light"
                    className="proper-btn"
                    onClick={handleContactClick}
                    style={{
                      position: "relative",
                      zIndex: 1000,
                    }}
                  >
                    {t("get")}
                  </Button>
                </div>
              </div>

              <div
                className="right-buttons"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "80px",
                }}
              >
                {rightButtons.map((button, index) => (
                  <FloatingButton
                    key={index}
                    icon={button.icon}
                    text={button.text}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Small Screen Layout */}
          <div
            className="small-screen-layout"
            style={{ display: "none", flexDirection: "column", gap: "30px" }}
          >
            <div
              className="small-screen-buttons"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {allHeroButtons.map((button, index) => (
                <FloatingButton
                  key={index}
                  icon={button.icon}
                  text={button.text}
                />
              ))}
            </div>

            <div
              className="small-screen-center-content"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <h2
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "36px",
                  lineHeight: "60.22px",
                  letterSpacing: "-0.73px",
                  color: "#FCF9F5",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                {t("smart")}
              </h2>

              <div
                className="hero-card"
                style={{
                  width: "729px",
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  border: "0.5px solid rgba(255, 255, 255, 0.2)",
                  background:
                    "linear-gradient(179.71deg, rgba(90, 90, 90, 0.4) 0.25%, rgba(90, 90, 90, 0) 108.54%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  boxSizing: "border-box",
                  position: "relative",
                  zIndex: 3,
                }}
              >
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "27px",
                    letterSpacing: "0px",
                    color: "#FCF9F5",
                    textAlign: "center",
                    margin: "0 0 24px 0",
                  }}
                >
                  {t("transform")}
                </p>

                <Button
                  variant="light"
                  className="proper-btn"
                  onClick={handleContactClick}
                  style={{
                    marginTop: "30px",
                    position: "relative",
                    zIndex: 1000,
                  }}
                >
                  {t("get")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lamp Section */}
      <section
        className="lamp-section"
        style={{
          backgroundImage: `url(${lamp})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px",
          borderRadius: "24px",
          width: "100%",
          height: "auto",
          aspectRatio: "16/9",
          position: "relative",
          margin: "0 auto",
          maxWidth: "100%",
        }}
      >
        {/* Lamp Content */}
        <div
          className="lamp-content"
          style={{
            position: "absolute",
            top: "62px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <h2
            style={{
              fontFamily: "Kollektif, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "0%",
              color: "#9A715B",
              marginBottom: "20px",
            }}
          >
            {t("about")}
          </h2>
          <h1
            style={{
              fontFamily: "Kollektif, sans-serif",
              fontWeight: 400,
              fontSize: "48px",
              lineHeight: "57px",
              letterSpacing: "0%",
              color: "#4C6559",
              marginBottom: "20px",
            }}
            dangerouslySetInnerHTML={{ __html: t("revol") }}
          ></h1>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26.8px",
              letterSpacing: "0px",
              color: "#646464",
              marginBottom: "30px",
            }}
            dangerouslySetInnerHTML={{ __html: t("spacifyd") }}
          ></p>
          <Button
            variant="dark"
            onClick={handleAboutUsClick}
            className="lamp-btn"
            style={{
              width: "172px",
              height: "44px",
              borderRadius: "4px",
              padding: "12px 16px",
              fontFamily: "Raleway, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              color: "white",
              background: "#4C6559",
              whiteSpace: "nowrap",
              minWidth: "100px",
              border: "1px solid #4C6559",
              cursor: "pointer",
              marginBottom: "84px",
            }}
          >
            {t("know")}
          </Button>
        </div>

        {/* Lamp Buttons */}
        <div
          className="lamp-buttons"
          style={{
            position: "absolute",
            top: "441px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1240px",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          {lampButtons.map((button, index) => (
            <button
              key={index}
              className="lamp-floating-btn"
              style={{
                width: "283.64px",
                height: "55.15px",
                borderRadius: "68.65px",
                padding: "7px 16px",
                gap: "10px",
                background: "#FFFFFF73",
                backdropFilter: "blur(7.3px)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                color: "#9A715B",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <img
                src={button.icon}
                alt={button.text}
                style={{
                  width: "32px",
                  height: "32px",
                  marginRight: "10px",
                  verticalAlign: "middle",
                }}
              />
              {button.text}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
