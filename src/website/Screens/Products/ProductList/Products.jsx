import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../../Assets/AboutUs/hero.svg";
import HomeNavbar from "../../../components/Home/NavbarDark/DarkNavbar";
import ContentSection from "../../../components/Home/Content/ContentSection";
import Footer from "../../../components/Home/Footer/Footer";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Linetop } from "../../../Assets/Products/Line.svg";
import { ReactComponent as Linebot } from "../../../Assets/Products/Line.svg";
import { useTranslation } from "react-i18next";
import axiosInstance from "../../../../instance/axiosInstance";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [allProductsInCategory, setAllProductsInCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState({
    categories: true,
    subcategories: false,
    products: false
  });
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("products");

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch subcategories and products whenever selected category changes
  useEffect(() => {
    if (selectedCategory) {
      console.log(selectedCategory, "======selected category");
      fetchSubcategories(selectedCategory);
      fetchProducts(selectedCategory);
    }
  }, [selectedCategory]);

  // Filter products whenever selected subcategory or all products change
  useEffect(() => {
    if (selectedSubcategory && allProductsInCategory.length > 0) {
      filterProductsBySubcategory();
    }
  }, [selectedSubcategory, allProductsInCategory]);

  const fetchCategories = async () => {
    setLoading(prev => ({ ...prev, categories: true }));
    try {
      const response = await axiosInstance.post("/displayCategory", {
        type: "product",
      });
      setCategories(response.data.data);
      
      if (response.data.data.length > 0) {
        // Select the first category by default
        setSelectedCategory(response.data.data[0]._id);
        console.log(response.data.data[0]._id, "=====first category id");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(prev => ({ ...prev, categories: false }));
    }
  };

  const fetchSubcategories = async (categoryId) => {
    setLoading(prev => ({ ...prev, subcategories: true }));
    console.log(categoryId, "====selected category id");
    try {
      const response = await axiosInstance.post("/displaySubCategoryById", {
        type: "product",
        id: categoryId
      });
      setSubcategories(response.data.data);
      
      if (response.data.data.length > 0) {
        // Select the first subcategory by default
        setSelectedSubcategory(response.data.data[0]._id);
        console.log(response.data.data[0]._id, "=====first subcategory id");
      } else {
        setSelectedSubcategory(null);
        setFilteredProducts([]);
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      setSubcategories([]);
      setSelectedSubcategory(null);
    } finally {
      setLoading(prev => ({ ...prev, subcategories: false }));
    }
  };

  const fetchProducts = async (categoryId) => {
    setLoading(prev => ({ ...prev, products: true }));
    try {
      const response = await axiosInstance.post("/displayProductByID", {
        lastId: null,
        categoryId: categoryId
      });
      
      // Store all products for the category
      setAllProductsInCategory(response.data.data || []);
      
      // Initial filtered products will be set in the useEffect when selectedSubcategory changes
      
      // Set similar products (you might want to adjust this logic)
      const similarProductsData = response.data.data ? response.data.data.slice(0, 8) : [];
      setSimilarProducts(similarProductsData);
    } catch (error) {
      console.error("Error fetching products:", error);
      setAllProductsInCategory([]);
      setFilteredProducts([]);
      setSimilarProducts([]);
    } finally {
      setLoading(prev => ({ ...prev, products: false }));
    }
  };

  // Filter products based on selected subcategory
  const filterProductsBySubcategory = () => {
    console.log("Filtering products for subcategory:", selectedSubcategory);
    console.log("Total products before filtering:", allProductsInCategory.length);
    
    // Check if products have subcategory information
    if (allProductsInCategory.some(product => product.subCategoryId)) {
      // If products have subcategory ID, filter by it
      const filtered = allProductsInCategory.filter(
        product => product.subCategoryId === selectedSubcategory
      );
      setFilteredProducts(filtered);
      console.log("Filtered products by subCategoryId:", filtered.length);
    } else {
      const selectedSubcategoryObj = subcategories.find(
        subcat => subcat._id === selectedSubcategory
      );
      
      if (selectedSubcategoryObj) {
        const subcategoryName = selectedSubcategoryObj.name;
        // Filter products by subcategory name if available
        const filtered = allProductsInCategory.filter(
          product => product.subcategoryName === subcategoryName
        );
        setFilteredProducts(filtered);
        console.log("Filtered products by subcategoryName:", filtered.length);
      } else {
        setFilteredProducts(allProductsInCategory);
        console.log("Showing all products as fallback");
      }
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category._id);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory._id);
  };

  const handleCardClick = (product) => {
    navigate(`/ProductDetails`, { state: { product } });
  };

  useEffect(() => {
    const updateLanguage = () => {
      const storedLanguage = localStorage.getItem("selected_language") || "en";
      i18n.changeLanguage(storedLanguage);
    };

    window.addEventListener("languageChanged", updateLanguage);
    return () => window.removeEventListener("languageChanged", updateLanguage);
  }, [i18n]);

  // Category placeholder while loading
  const CategoryPlaceholder = () => (
    <div className="product-card">
      <div className="product-image-class p-4">
        <div className="placeholder-glow">
          <div className="placeholder" style={{ width: "100%", height: "80px" }}></div>
        </div>
      </div>
      <div className="product-title-class">
        <div className="placeholder-glow">
          <span className="placeholder col-12"></span>
        </div>
      </div>
    </div>
  );

  // Subcategory placeholder while loading
  const SubcategoryPlaceholder = () => (
    <span className="type-item placeholder-glow">
      <span className="placeholder col-4"></span>
    </span>
  );

  // Product card placeholder while loading
  const ProductPlaceholder = () => (
    <div className="card">
      <div className="placeholder-glow">
        <div className="placeholder" style={{ width: "100%", height: "200px" }}></div>
      </div>
      <div className="placeholder-glow">
        <span className="placeholder col-8"></span>
      </div>
    </div>
  );

  // Get the active category for UI highlighting
  const getActiveCategory = (categoryId) => {
    return selectedCategory === categoryId;
  };

  // Get the active subcategory for UI highlighting
  const getActiveSubcategory = (subcategoryId) => {
    return selectedSubcategory === subcategoryId;
  };

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
      <div className="products-menu">
        {loading.categories 
          ? Array(6).fill().map((_, index) => <CategoryPlaceholder key={index} />)
          : categories.map((category) => (
            <div
              key={category._id}
              className={`product-card ${getActiveCategory(category._id) ? "active" : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              <div className="product-image-class p-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="product-image"
                />
              </div>
              <div className="product-title-class">
                <p
                  className="container product-title"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {category.name}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="first-line container justify-content-center">
        <Linetop
          style={{
            marginTop: 50,
            marginBottom: 25,
          }}
        />
      </div>

      {/* Horizontal Menu for Subcategories */}
      <div className="types-menu">
        {loading.subcategories 
          ? Array(6).fill().map((_, index) => <SubcategoryPlaceholder key={index} />)
          : subcategories.map((subcategory) => (
            <span
              key={subcategory._id}
              className={`type-item ${getActiveSubcategory(subcategory._id) ? "active" : ""}`}
              onClick={() => handleSubcategoryClick(subcategory)}
            >
              {subcategory.name}
            </span>
          ))}
      </div>

      {/* Products Grid */}
      <div className="cards-section container">
        {loading.products 
          ? Array(12).fill().map((_, index) => <ProductPlaceholder key={index} />)
          : filteredProducts.length > 0 
            ? filteredProducts.map((product) => (
              <div 
                key={product._id} 
                className="card" 
                onClick={() => handleCardClick(product)}
              >
                <img 
                  src={product.image && product.image.length > 0 ? product.image[0] : ''} 
                  alt={product.productName} 
                />
                <p>{product.productName}</p>
              </div>
            ))
            : (
              <div className="no-products-message">
                <p>No products found for this subcategory.</p>
              </div>
            )}
      </div>

      {/* <div className="first-line container justify-content-center">
        <Linebot />
      </div> */}

      {/* <div className="container similar-products">
        <h2>{t("similar-products")}</h2>
        <div>
          <button className="view-more-button">{t("view-more-btn")}</button>
        </div>
      </div> */}

      {/* Similar Products Grid */}
      {/* <div className="cards-section">
        {loading.products 
          ? Array(8).fill().map((_, index) => <ProductPlaceholder key={index} />)
          : similarProducts.map((product, index) => (
            <div 
              key={`similar-${product._id || index}`} 
              className="card"
              onClick={() => handleCardClick(product)}
            >
              <img 
                src={product.image && product.image.length > 0 ? product.image[0] : ''} 
                alt={product.productName} 
              />
              <p>{product.productName}</p>
            </div>
          ))}
      </div> */}
      
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Products;