import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContentSection.css"; // Import the CSS file
import banner from "../../../Assets/Home/contentbanner.png";
import theatre from "../../../Assets/Home/contentimage.png";
import { useNavigate } from "react-router-dom";

const ContentSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contactus");
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="container-fluid p-0"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <div
        className="row m-0 align-items-center justify-content-center"
        style={{
          minHeight: "auto",
          paddingLeft: "100px",
          paddingRight: "100px",
          paddingTop: "31px",
          paddingBottom: "31px",
        }}
      >
        {/* Left Column - Text Content */}
        <div
          className="col-12 col-md-6 p-0 d-flex flex-column align-items-start"
          style={{
            gap: "20px",
            textAlign: "left",
          }}
        >
          <h6
            className="mb-0"
            style={{
              width: "383px",
              maxWidth: "100%",
              height: "19px",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: "400",
              fontSize: "17.76px",
              lineHeight: "18.78px",
              color: "#FFFFFF",
            }}
          >
            Spacifyd.
          </h6>
          <h1
            className="mb-0"
            style={{
              width: "383px",
              maxWidth: "100%",
              height: "auto",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: "400",
              fontSize: "48px",
              lineHeight: "48px",
              color: "#FFFFFF",
            }}
          >
            Let's Bring Your Vision to Life
          </h1>
          <p
            className="mb-0"
            style={{
              width: "443px",
              maxWidth: "100%",
              height: "auto",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: "300",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#FFFFFF",
            }}
          >
            Partner with Spacifyd to create interiors that inspire and impress.
            Whether it's a single-room makeover or a large-scale commercial
            project, we are here to turn your ideas into reality.
          </p>
          <button className="content-btn mt-2" onClick={handleButtonClick}>
            Get started with us
          </button>
        </div>

        {/* Right Column - Image */}
        <div
          className="col-12 col-md-6 p-0 mt-4 mt-md-0"
          style={{
            paddingTop: "31px",
            paddingBottom: "31px",
          }}
        >
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              height: "426px",
              marginLeft: "50px",
            }}
            className="mx-auto"
          >
            <img
              src={theatre}
              alt="Section Image"
              className="img-fluid"
              style={{
                objectFit: "cover",
                borderRadius: "24px",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Inline Responsive Styles (without button styles) */}
      <style jsx>{`
        @media (max-width: 991px) {
          .row {
            padding-left: 50px !important;
            padding-right: 50px !important;
          }
          h1 {
            font-size: 36px !important;
            line-height: 38px !important;
          }
          p {
            font-size: 18px !important;
            line-height: 22px !important;
          }
          div[style*="height: 426px"] {
            height: 350px !important;
            margin-left: 0 !important;
            max-width: 500px;
          }
        }

        @media (max-width: 767px) {
          .row {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          h1 {
            font-size: 28px !important;
            line-height: 32px !important;
          }
          p {
            font-size: 16px !important;
            line-height: 20px !important;
          }
          div[style*="height: 426px"] {
            height: 300px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 100%;
            max-width: 100%;
          }
          .col-12 {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContentSection;
