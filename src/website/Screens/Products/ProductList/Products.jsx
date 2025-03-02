import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../../Assets/AboutUs/hero.svg";
import HomeNavbar from "../../../components/Home/Navbar/HomeNavbar";
import Footer from "../../../components/Home/Footer/Footer";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import ImgFurniture from "../../../Assets/Products/Furniture.svg";
import ImgDecor from "../../../Assets/Products/Decor.svg";
import ImgPlant from "../../../Assets/Products/Plants.svg";
import ImgBath from "../../../Assets/Products/Bathroom.svg";
import ImgWall from "../../../Assets/Products/Wall.svg";
import ImgSmart from "../../../Assets/Products/SmartHome.svg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Furniture");
  const navigate = useNavigate();

  const ProductCategory = {
    Furnitures: [
      {
        img: ImgFurniture,
        title: "Furniture",
        types: {
          type1: "Modular Furniture",
          type2: "Premium",
          type3: "Ergonomic Office",
          type4: "Tech-integrated",
          type5: "Outdoor",
          type6: "Storage",
        },
      },
    ],
    Decor: [
      {
        img: ImgDecor,
        title: "Decors",
        types: {
          type1: "Modular Furniture",
          type2: "Premium",
          type3: "Ergonomic Office",
          type4: "Tech-integrated",
          type5: "Outdoor",
          type6: "Storage",
        },
      },
    ],
    Plants: [
      {
        img: ImgPlant,
        title: "Plants",
        types: {
          type1: "Modular Furniture",
          type2: "Premium",
          type3: "Ergonomic Office",
          type4: "Tech-integrated",
          type5: "Outdoor",
          type6: "Storage",
        },
      },
    ],
    Bathroom: [
      {
        img: ImgBath,
        title: "Bathroom & Wellness",
        types: {
          type1: "Modular Furniture",
          type2: "Premium",
          type3: "Ergonomic Office",
          type4: "Tech-integrated",
          type5: "Outdoor",
          type6: "Storage",
        },
      },
    ],
    Walls: [
      {
        img: ImgWall,
        title: "Wall & Flooring",
        types: {
          type1: "Modular Furniture",
          type2: "Premium",
          type3: "Ergonomic Office",
          type4: "Tech-integrated",
          type5: "Outdoor",
          type6: "Storage",
        },
      },
    ],
    Smart: [
      {
        img: ImgSmart,
        title: "Smart Home",
        types: {
          type1: "Modular Furniture",
          type2: "Premium",
          type3: "Ergonomic Office",
          type4: "Tech-integrated",
          type5: "Outdoor",
          type6: "Storage",
        },
      },
    ],
  };
  const categories = Object.keys(ProductCategory);
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
      <div className="products-menu">
        {categories.map((category) => {
          <span></span>;
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Products;
