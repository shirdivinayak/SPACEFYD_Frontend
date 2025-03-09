import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetails.css";
import HomeNavbar from "../../../components/Home/Navbar/HomeNavbar";
import Footer from "../../../components/Home/Footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import Sample1 from "../../../Assets/Products/SampleImage1.svg";
import Sample2 from "../../../Assets/Products/SampleImage2.svg";
import Sample3 from "../../../Assets/Products/SampleImage3.svg";
import Sample4 from "../../../Assets/Products/SampleImage4.svg";
import ProductImage from "../../../Assets/Products/ProductImage.svg";
import ProductImage2 from "../../../Assets/Products/ProductImage2.svg";
import ProductImage3 from "../../../Assets/Products/ProductImage3.svg";
import ProductImage4 from "../../../Assets/Products/ProductImage4.svg";
import ProductImage5 from "../../../Assets/Products/ProductImage5.svg";

const ProductDetails = () => {
  const navigate = useNavigate();

  const ProductImages = {
    mainImage: ProductImage,
    subImages: [ProductImage2, ProductImage3, ProductImage4, ProductImage5],
    title: "Asgaard sofa",
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
  };

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

  const { state } = useLocation();
  const product = state?.product;

  const handleCardClick = () => {
    navigate(`/ProductDetails`);
  };
  return (
    <div className="main">
      <HomeNavbar></HomeNavbar>
      <div className="services-container">
        <div className="product-images">
          <div className="sub-images">
            {ProductImages.subImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${ProductImages.title} view ${index + 1}`}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>

          <div className="main-image">
            <img src={ProductImages.mainImage} alt={ProductImages.title} />
          </div>
        </div>

        {/* Product Title and Description */}
        <div className="product-details">
          <h2 className="product-title">{ProductImages.title}</h2>
          <p className="product-description">{ProductImages.description}</p>
        </div>
      </div>

      <div className=" container similar-products ">
        <h2>Similar Products</h2>
        <div>
          {" "}
          <button className="view-more-button">Veiw More</button>
        </div>
      </div>
      <div className="similar-product-list">
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
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
