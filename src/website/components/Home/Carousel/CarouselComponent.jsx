import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./CarouselComponent.css";
import image1 from "../../../Assets/Home/image1.png"; // fallback image
import axiosInstance from "../../../../instance/axiosInstance";
import { useTranslation } from "react-i18next";

const CarouselComponent = () => {
  const { t } = useTranslation("carousel");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchTrending = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/fetchTrendingImage", {
        type: "project",
      });

      const data = response?.data?.data;
      if (Array.isArray(data) && data.length > 0) {
        setCarouselData(data);
      }
    } catch (error) {
      console.error("Error fetching project data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKnowMoreClick = () => {
    navigate("/projectlist");
    window.scrollTo(0, 0);
  };

  return (
    <div className="carousel-home-container">
      {/* Heading Section */}
      <div className="carousel-home-heading-section">
        <div>
          <h2 className="carousel-sub-heading">{t("h2")}</h2>
          <h1 className="carousel-main-heading">{t("h1")}</h1>
        </div>
        <Button
          variant="dark"
          className="carousel-home-know-more-btn large-screen-btn"
          onClick={handleKnowMoreClick}
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
          }}
        >
          {t("know")}
        </Button>
      </div>

      {/* Custom Carousel */}
      <div className="custom-carousel-wrapper">
        <div className="custom-carousel">
          {/* Left Image Section */}
          <div
            className="carousel-image-section"
            style={{
              backgroundImage: `url(${carouselData[currentIndex]?.images?.[0] || image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer", // Optional for better UX
            }}
            onClick={() => {
              navigate(
                `/ProjectsDetail/${encodeURIComponent(
                  carouselData[currentIndex]?.projectName || "unknown"
                )}`,
                { state: { project: carouselData[currentIndex] } }
              )
                window.scrollTo(0, 0);
            }}
          />

          {/* Right Content Section */}
          <div
            className="carousel-content-section"
            style={{ backgroundColor: "#9A715B" }}
          >
            <div className="carousel-content-inner">
              <h3>
                {carouselData[currentIndex]?.projectName || "Unnamed Project"}
              </h3>
              <hr />
            </div>

            <div className="carousel-navigation">
              <p>{`${currentIndex + 1}/${carouselData?.length}`}</p>
              <div className="carousel-navigation-buttons">
                <button onClick={goToPrev}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <button onClick={goToNext}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Know More Button */}
      <div className="carousel-home-small-screen-btn-container">
        <Button
          variant="dark"
          className="carousel-home-know-more-btn small-screen-btn"
          onClick={handleKnowMoreClick}
          style={{
            width: "132px",
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
            margin: "20px auto 0",
          }}
        >
          {t("know")}
        </Button>
      </div>
    </div>
  );
};

export default CarouselComponent;
