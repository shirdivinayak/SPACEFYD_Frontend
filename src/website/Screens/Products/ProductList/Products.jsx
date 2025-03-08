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
import { ReactComponent as Linetop } from "../../../Assets/Products/Line.svg";
import { ReactComponent as Linebot } from "../../../Assets/Products/Line.svg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Furnitures");
  const [selectedTypes, setSelectedTypes] = useState("Modular Furniture");
  const navigate = useNavigate();

  const ProductGrid = [
    {
      title: "Grifo",
      description: "Night lamp",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Muggo",
      description: "Small mug",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Pingky",
      description: "Cute bed set",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Potty",
      description: "Minimalist flower pot",
      image: "https://via.placeholder.com/150",
    },
  ];

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
        title: "Decor",
        types: {
          type1: "Wall Art",
          type2: "Sculptures",
          type3: "Candles",
          type4: "Vases",
          type5: "Mirrors",
          type6: "Rugs",
        },
      },
    ],
    Plants: [
      {
        img: ImgPlant,
        title: "Plants",
        types: {
          type1: "Indoor",
          type2: "Outdoor",
          type3: "Succulents",
          type4: "Planters",
          type5: "Artificial",
          type6: "Hanging",
        },
      },
    ],
    Bathroom: [
      {
        img: ImgBath,
        title: "Bathroom & Wellness",
        types: {
          type1: "Towels",
          type2: "Bath Mats",
          type3: "Shower Accessories",
          type4: "Storage",
          type5: "Wellness Products",
          type6: "Spa Essentials",
        },
      },
    ],
    Walls: [
      {
        img: ImgWall,
        title: "Wall & Flooring",
        types: {
          type1: "Wallpaper",
          type2: "Tiles",
          type3: "Wooden Panels",
          type4: "Vinyl Flooring",
          type5: "Paints",
          type6: "Wall Stickers",
        },
      },
    ],
    Smart: [
      {
        img: ImgSmart,
        title: "Smart Home",
        types: {
          type1: "Lighting",
          type2: "Security Systems",
          type3: "Voice Assistants",
          type4: "Smart Appliances",
          type5: "Home Automation",
          type6: "Sensors",
        },
      },
    ],
  };

  const categories = Object.keys(ProductCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedTypes(ProductCategory[category][0].types.type1); // Default to the first type of the selected category
  };

  const handleTypeClick = (type) => {
    setSelectedTypes(type);
  };

  return (
    <div className="main">
      <HomeNavbar />

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

      {/* Horizontal Menu for Categories */}
      <div className="products-menu">
        {categories.map((category) => (
          <div
            key={category}
            className={`product-card ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="product-image-class p-4">
              <img
                src={ProductCategory[category][0].img}
                alt={ProductCategory[category][0].title}
                className="product-image"
              />
            </div>
            <div className="product-title-class">
              <span className="product-title">
                {ProductCategory[category][0].title}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="container justify-content-center">
        {" "}
        <Linetop />
      </div>
      {/* Horizontal Menu for Types */}
      <div className="types-menu">
        {Object.values(ProductCategory[selectedCategory][0].types).map(
          (type, index) => (
            <span
              key={index}
              className={`type-item ${selectedTypes === type ? "active" : ""}`}
              onClick={() => handleTypeClick(type)}
            >
              {type}
            </span>
          )
        )}
      </div>

      <div className="p-4">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container justify-content-center">
        {" "}
        <Linebot />
      </div>

      <div className=" container similar-products ">
        <h2>Similar Products</h2>
        <div>
          {" "}
          <button className="view-more-button">View More</button>
        </div>
        <div>
          <div className="product-grid">
            {ProductGrid.map((product, index) => (
              <div key={index} className="product-card">
                <img
                  src={ProductGrid.image}
                  alt={ProductGrid.title}
                  className="product-image"
                />
                <div className="product-info">
                  <h3>{ProductGrid.title}</h3>
                  <p>{ProductGrid.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
