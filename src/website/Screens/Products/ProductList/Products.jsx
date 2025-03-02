import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../Assets/AboutUs/hero.svg";
import HomeNavbar from "../../components/Home/Navbar/HomeNavbar";
import Footer from "../../components/Home/Footer/Footer";
import "./Products.css";
const Products = () => {
  return (
    <div className="main">
      <HomeNavbar></HomeNavbar>
      {/* Hero Section with Background */}
      <div
        className="services-container"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="container px-4">
          <h1 className="service-title">Our Products</h1>
          <p className="service-description">
            Explore our curated range of premium products designed to transform
            every <br /> corner of your space.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Products;
