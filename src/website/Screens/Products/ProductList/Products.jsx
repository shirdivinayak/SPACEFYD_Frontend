import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../../Assets/AboutUs/hero.svg";
import HomeNavbar from "../../../components/Home/NavbarDark/DarkNavbar";
import ContentSection from "../../../components/Home/Content/ContentSection";

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
import Sample1 from "../../../Assets/Products/SampleImage1.svg";
import Sample2 from "../../../Assets/Products/SampleImage2.svg";
import Sample3 from "../../../Assets/Products/SampleImage3.svg";
import Sample4 from "../../../Assets/Products/SampleImage4.svg";

import { useTranslation } from "react-i18next";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Furnitures");
  const [selectedTypes, setSelectedTypes] = useState("Modular Furniture");
  const navigate = useNavigate();

  const ProductList = [
    {
      title: "Grifo",
      description: "Night lamp",
      image: Sample1,
    },
    {
      title: "Muggo",
      description: "Small mug",
      image: Sample2,
    },
    {
      title: "Pingky",
      description: "Cute bed set",
      image: Sample3,
    },
    {
      title: "Potty",
      description: "Minimalist flower pot",
      image: Sample4,
    },
  ];

  const ProductCategory = {
    Furnitures: [
      {
        img: ImgWall,
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
        img: ImgWall,
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
        img: ImgWall,
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

  const handleCardClick = () => {
    navigate(`/ProductDetails`);
  };

  const { t, i18n } = useTranslation("products");
  console.log("Rendering Products - Current i18n language:", i18n.language);

  useEffect(() => {
    const updateLanguage = () => {
      const storedLanguage = localStorage.getItem("selected_language") || "en";
      i18n.changeLanguage(storedLanguage);
    };

    window.addEventListener("languageChanged", updateLanguage);
    return () => window.removeEventListener("languageChanged", updateLanguage);
  }, [i18n]);

  return (
    <div className="main">
      <HomeNavbar />

      {/* Hero Section with Background */}
      <div
        className="services-container"
        style={{
          backgroundImage: `url(${HeroImage})`,

          color: "white",
        }}
      >
        <div className="container px-4">
          <h1 className="service-title">{t("title")}</h1>
          <p
            className="service-description"
            dangerouslySetInnerHTML={{ __html: t("title-content") }}
          ></p>
        </div>
      </div>

      {/* Horizontal Menu for Categories */}
      <div className="products-menu ">
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
              <p
                className=" container product-title"
                style={{
                  fontSize: "14px",
                }}
              >
                {ProductCategory[category][0].title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" first-line container justify-content-center">
        <Linetop
          style={{
            marginTop: 50,
            marginBottom: 25,
          }}
        />
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

      {/* <div className="similar-product-list">
        {ProductList.map((product, index) => (
          <div
            className="similar-product-card"
            key={index}
            onClick={() => handleCardClick(product)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="similar-product-image"
            />
            <h3 className="similar-product-title">{product.title}</h3>
            <p className="similar-product-description">{product.description}</p>
          </div>
        ))}
      </div> */}

      <div className="cards-section container">
        {[...ProductList, ...ProductList, ...ProductList].map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={`Card ${card.title}`} />
            <p>{card.title}</p>
          </div>
        ))}
      </div>

      <div className=" first-line container justify-content-center">
        {" "}
        <Linebot />
      </div>

      <div className=" container similar-products  ">
        <h2>{t("similar-products")}</h2>
        <div>
          {" "}
          <button className="view-more-button">{t("view-more-btn")}</button>
        </div>
      </div>

      {/* <div className="similar-product-list">
        {ProductList.map((product, index) => (
          <div
            className="similar-product-card"
            key={index}
            onClick={() => handleCardClick(product)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="similar-product-image"
            />
            <h3 className="similar-product-title">{product.title}</h3>
            <p className="similar-product-description">{product.description}</p>
          </div>
        ))}
      </div> */}

      <div className="cards-section ">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
          <div key={card} className="card">
            <img src={Sample1} alt={`Card ${card}`} />
            <p>Grifo</p>
          </div>
        ))}
      </div>
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Products;
