import React from "react";
import "./Products.css";
import background from "../../../Assets/Home/rightbackground.jpg";
import sectionBackground from "../../../Assets/Home/background.png"; // Add this import
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation("producthome");
  return (
    <div className="products-outer-container">
      <div className="products-home-container">
        <div
          className="products-home-bg-section"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="products-home-content-wrapper">
            <div className="products-home-left-content">
              <h1
                className="products-home-left-heading"
                dangerouslySetInnerHTML={{ __html: t("h1") }}
              ></h1>
              <div className="products-home-content-row">
                <div className="products-home-content-column">
                  <h2 className="products-home-subheading">{t("h2")}</h2>
                  <p className="products-home-content">{t("p")}</p>
                </div>
                <div className="products-home-content-column">
                  <h2 className="products-home-subheading">{t("clear")}</h2>
                  <p className="products-home-content">{t("ultra")}</p>
                </div>
              </div>
              <div className="products-home-content-row">
                <div className="products-home-content-column">
                  <h2 className="products-home-subheading">{t("smart")}</h2>
                  <p className="products-home-content">{t("integrate")}</p>
                </div>
                <div className="products-home-content-column">
                  <h2 className="products-home-subheading">{t("ambiance")}</h2>
                  <p className="products-home-content">{t("light")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
