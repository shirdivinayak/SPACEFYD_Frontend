import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import brand from "../../../Assets/Home/Partner/brand.png";
import "./Partnership.css";

const Partnership = () => {
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
          <Col xs={12} md={7} lg={6} className="text-center text-md-start right-section">
            <h2 className="section-title">
              Elevating Interiors with <br /> <span>Innovation & Expertise</span>
            </h2>
            <p className="section-text">
              At SPACYFD, we believe that great spaces are a blend of cutting-edge technology and masterful craftsmanship. 
              That's why we collaborate with QBKDESIGNS, a trusted name in precision-driven fit-out execution. 
              Together, we bring visionary concepts to life, ensuring interiors are built to the highest standards. 
              Experience the future of interiors—where technology meets timeless craftsmanship.
            </p>
            <div className="section-link-container">
              <a href="#" className="section-link">
                Discover More About Our Partnership →
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partnership;