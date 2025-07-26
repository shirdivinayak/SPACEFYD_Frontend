import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetails.css";
import HomeNavbar from "../../../components/Home/Navbar/HomeNavbar";
import Footer from "../../../components/Home/Footer/Footer";
import ContentSection from "../../../components/Home/Content/ContentSection";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Linetop } from "../../../Assets/Products/Line.svg";
import { useTranslation } from "react-i18next";
import axiosInstance from "../../../../instance/axiosInstance";
import Placeholder from "react-bootstrap/Placeholder";
import ImageModal from "../../../components/ImageViewer/ImageViewer"

const ProductDetails = () => {
  const { t } = useTranslation("productdetails");
  const location = useLocation();
  const { product } = location.state || {};
  const navigate = useNavigate();

  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState({ categories: false });
const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

   const openModal = (src) => {
    setModalImage(src);
    setModalOpen(true);
  };
  const fetchSimillarProducts = async () => {
    setLoading((prev) => ({ ...prev, categories: true }));
    try {
      const response = await axiosInstance.post("/fetchSimillarProducts", {
        id: product._id,
        categoryId: product.categoryId,
      });
      if (response.data.data.length > 0) {
        setSimilar(response.data.data);
        console.log(response.data.data, "===== fetched similar products");
      }
    } catch (error) {
      console.error("Error fetching similar products:", error);
    } finally {
      setLoading((prev) => ({ ...prev, categories: false }));
    }
  };

  useEffect(() => {
    fetchSimillarProducts();
    console.log("Product Details:", product);
  }, [product]);

  const [mainImage, setMainImage] = useState(product?.image?.[0] || "");

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleCardClick = (product) => {
    navigate("/ProductDetails", { state: { product } });
  };

  const ProductImages = {
    mainImage: product.image?.[0] || "",
    subImages: product.image || [],
    title: product.productName,
    brand: product.brand,
    category: product.categoryName,
    description: product.description,
  };

  return (
    <div className="main">
      <HomeNavbar />
      <div className="services-container">
        <div className="product-images">
          <div className="sub-images">
            {ProductImages.subImages.map((image, index) => (
              <img
                key={index}
                className="thumbnail-img"
                src={image}
                alt={`${ProductImages.title} view ${index + 1}`}
                style={{ cursor: "pointer" }}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={mainImage} alt={ProductImages.title}         style={{ cursor: "pointer" }}

                        onClick={() => openModal(mainImage)}/>
          </div>
        </div>

        <div className="product-details">
          <p className="product-brand">{ProductImages.brand}</p>
          <h2 className="product-title">{ProductImages.title}</h2>
          <span className="product-category">{ProductImages.category}</span>
          <p className="product-description">{ProductImages.description}</p>
        </div>
      </div>

      <div className="first-line container justify-content-center">
        <Linetop style={{ marginTop: 50, marginBottom: 25 }} />
      </div>
      {similar.length > 1 ? (
        <div className="container similar-products">
          <h2>{t("similar-products")}</h2>
          <div>
            <button
              onClick={() => navigate("/Products")}
              className="view-more-button"
            >
              {t("view-more")}
            </button>
          </div>
        </div>
      ) : null}

      <div className="cards-section container row">
        {loading.categories
          ? Array.from({ length: 4 }).map((_, idx) => (
              <div className="col-md-3 mb-4" key={idx}>
                <div className="card placeholder-glow">
                  <Placeholder as="div" animation="wave">
                    <div
                      className="card-img-top"
                      style={{ height: "200px", backgroundColor: "#e0e0e0" }}
                    ></div>
                    <div className="card-body">
                      <Placeholder xs={6} /> <br />
                      <Placeholder xs={8} />
                    </div>
                  </Placeholder>
                </div>
              </div>
            ))
          : similar?.map((item, index) => (
              <div className="col-md-3 mb-4" key={item._id || index}>
                <div
                  className="card h-100"
                  onClick={() => handleCardClick(item)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item.image[0]}
                    className="card-img-top"
                    alt={item.productName}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <ContentSection />
      <ImageModal
        src={modalImage}
        alt="Enlarged view"
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default ProductDetails;
