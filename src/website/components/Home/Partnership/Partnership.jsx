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
            <h2 className="section-title">
              {t("elevate-h2")} <br /> <span>{t("innovat")}</span>
            </h2>
            <p className="section-text">{t("elevate")}</p>
            <div className="section-link-container">
              <a href="#" className="section-link">
                {t("discover")} <span className="arrow"></span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partnership;
