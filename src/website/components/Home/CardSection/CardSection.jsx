import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import card1 from "../../../Assets/Home/cards/card1.png"; // fallback image
import "./CardSection.css";
import { Button } from "react-bootstrap";
import axiosInstance from "../../../../instance/axiosInstance";
import { useTranslation } from "react-i18next";

const CardSection = () => {
  const { t } = useTranslation("card");
  const navigate = useNavigate();
  const cardsContainerRef = useRef(null);
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCardClick = () => {
    navigate("/products");
    window.scrollTo(0, 0);
  };

  const scrollLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const fetchTrending = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/fetchTrendingImage", {
        type: "product",
      });
      if (response.data.data && response.data.data.length > 0) {
        setCarouselData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching trending products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <section className="card-section">
      <div className="content-wrapper">
        {/* Top Section: Heading and Button */}
        <div className="top-section">
          <div className="heading-section">
            <h2>{t("main-head")}</h2>
            <h1>{t("main-sub-head")}</h1>
          </div>

          <div className="button-navigation">
            <Link
              to="/Products"
              className="view-more-btn large-screen-btn"
              onClick={() => window.scrollTo(0, 0)}
            >
              {t("view-more-btn")}
            </Link>
            <div className="small-screen-navigation">
              <button onClick={scrollLeft}>
                <span>‹</span>
              </button>
              <button onClick={scrollRight}>
                <span>›</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="cards-section">
          <div className="cards-container" ref={cardsContainerRef}>
            {loading ? (
              <p>{t("loading")}</p>
            ) : (
              carouselData.map((item, index) => (
                <div
                  key={index}
                  className="card"
                  onClick={() => {
                    navigate("/ProductDetails", { state: { product: item } });
                    window.scrollTo(0, 0);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item?.image?.[0] || card1}
                    alt={item?.productName || "Product Image"}
                  />
                  <p>{item?.productName || "Unnamed Product"}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Navigation and View More */}
      <div className="navigation-view-more">
        <div className="large-screen-navigation">
          <button onClick={scrollLeft}>
            <span>‹</span>
          </button>
          <button onClick={scrollRight}>
            <span>›</span>
          </button>
        </div>
        <div className="small-screen-view-more">
          <Button className="view-more-btn" onClick={handleCardClick}>
            {t("view-more-btn")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
