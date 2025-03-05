import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../../Assets/AboutUs/hero.svg";
import HomeNavbar from "../../../components/Home/Navbar/HomeNavbar";
import Footer from "../../../components/Home/Footer/Footer";
const ProductDetails = () => {
  return (
    <div className="main">
      <HomeNavbar></HomeNavbar>
      {/* Hero Section with Background */}
      <div
        className="services-container"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* <div className="container px-4">
          <h1 className="service-title">Our Products</h1>
          <p className="service-description">
            Explore our curated range of premium products designed to transform
            every <br /> corner of your space.
          </p>
        </div> */}
      </div>
      <div>{/* <HeroImage></HeroImage>{" "} */}</div>

      <div className=" container similar-products ">
        <h2>Similar Products</h2>
        <div>
          {" "}
          <button>Veiw More</button>
        </div>
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
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
