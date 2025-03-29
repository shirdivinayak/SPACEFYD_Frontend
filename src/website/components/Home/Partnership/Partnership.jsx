import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import brand from "../../../Assets/Home/Partner/brand.png"; // Corrected import
import "./Partnership.css"; // Add your custom styles

const Partnership = () => {
  return (
    <Container className="custom-section py-5">
      <Row className="align-items-center flex-column flex-md-row">
        {/* Left Side - Image */}
        <Col xs={12} md={6} className="text-center">
          <img
            src={brand} // Use the imported image
            alt="Partnership"
            className="img-fluid custom-image"
          />
        </Col>

        {/* Right Side - Content */}
        <Col xs={12} md={6} className="text-center text-md-start">
          <h2 className="section-title">
            Elevating Interiors with <br /> <span>Innovation & Expertise</span>
          </h2>
          <p className="section-text">
            At SPACYFD, we believe that great spaces are a blend of cutting-edge technology and masterful craftsmanship. That's why we collaborate with QBKDESIGNS, a trusted name in precision-driven fit-out execution. 
            Together, we bring visionary concepts to life, ensuring interiors are built to the highest standards. Experience the future of interiors—where technology meets timeless craftsmanship.
          </p>
          <a href="#" className="section-link">
            Discover More About Our Partnership →
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Partnership;
