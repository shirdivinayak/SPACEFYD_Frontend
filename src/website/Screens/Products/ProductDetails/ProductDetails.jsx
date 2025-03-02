import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../../Assets/AboutUs/hero.svg";
import HomeNavbar from "../../../components/Home/Navbar/HomeNavbar";
import Footer from "../../../components/Home/Footer/Footer";
const ProductDetails = () => {
  return (
    <div className="main">
      <HomeNavbar></HomeNavbar>
      <div>
        <HeroImage></HeroImage>{" "}
      </div>
      <div className="similar-products container ">
        <span>
          {" "}
          <p>Similar Products</p>
        </span>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
