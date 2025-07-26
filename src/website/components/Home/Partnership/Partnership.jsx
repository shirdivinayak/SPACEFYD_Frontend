import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import brand from "../../../Assets/Home/Partner/brand.png";
import "./Partnership.css";
import { useTranslation } from "react-i18next";

const Partnership = () => {
  const { t } = useTranslation("partnership");
  return (
    <div className="partnership-wrapper">
      <Container className="partnership-container">
        <Row className="align-items-center justify-content-center">
          {/* Left Side - Image (40%) */}
          <Col xs={12} md={5} lg={4} className="text-center left-section">
            <img
              src={brand}
              alt="Partnership"
              className="img-fluid custom-image"
            />
          </Col>

          {/* Right Side - Content (60%) */}
          <Col
            xs={12}
            md={7}
            lg={6}
            className="text-center text-md-start right-section"
          >
            <h2 className="section-title-small">{t("elevate-h2")}</h2>
            <h2 className="section-title">{t("innovat")}</h2>
            <p className="section-text">{t("elevate")}</p>
            <div className="section-link-container">
            <a href="https://www.qbikdesigns.com" className="section-link" target="_blank" rel="noopener noreferrer">
                {t("discover")}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#9A715B"
                    strokeWidth="2"
                  />
                </svg>
                <span className="arrow fa fa-arrow-right"></span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partnership;
