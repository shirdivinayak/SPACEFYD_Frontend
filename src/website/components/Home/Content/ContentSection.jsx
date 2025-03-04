import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../../../Assets/Home/contentbanner.png";
import theatre from "../../../Assets/Home/contentimage.png";

const ContentSection = () => {
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
          paddingLeft: "100px", // Default for large screens
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
          {/* Small Heading */}
          <h6
            className="mb-0"
            style={{
              width: "383px",
              maxWidth: "100%",
              height: "19px",
              fontFamily: "Kollektif",
              fontWeight: "400",
              fontSize: "17.76px",
              lineHeight: "18.78px",
              color: "#FFFFFF",
            }}
          >
            Spacifyd.
          </h6>

          {/* Main Heading */}
          <h1
            className="mb-0"
            style={{
              width: "383px",
              maxWidth: "100%",
              height: "auto",
              fontFamily: "Kollektif",
              fontWeight: "400",
              fontSize: "48px",
              lineHeight: "48px",
              color: "#FFFFFF",
            }}
          >
            Let’s Bring Your Vision to Life
          </h1>

          {/* Paragraph */}
          <p
            className="mb-0"
            style={{
              width: "443px",
              maxWidth: "100%",
              height: "auto",
              fontFamily: "DM Sans",
              fontWeight: "300",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#FFFFFF",
            }}
          >
            Partner with Spacifyd to create interiors that inspire and impress.
            Whether it’s a single-room makeover or a large-scale commercial
            project, we are here to turn your ideas into reality.
          </p>

          {/* Button */}
          <button
            className="mt-2"
            style={{
              width: "170px",
              height: "36px",
              borderRadius: "4px",
              border: "2px solid",
              borderImageSource:
                "linear-gradient(270deg, #4DA180 0%, #97935A 27.34%, #CE893E 100%)",
              padding: "8px 16px",
              backgroundColor: "#FCF9F5",
              color: "#9A715B",
              fontFamily: "DM Sans",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "20px",
              cursor: "pointer",
              alignSelf: "flex-start",
            }}
          >
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
              marginLeft: "50px", // Default for large screens
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

      {/* Inline Responsive Styles */}
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
            margin-left: 0 !important; // Ensure no extra margin
            margin-right: 0 !important; // Explicitly set to match left
            width: 100%; // Full width within padding
            max-width: 100%; // Override any max-width constraints
          }
          .col-12 {
            padding-left: 0 !important; // Remove column padding
            padding-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContentSection;
