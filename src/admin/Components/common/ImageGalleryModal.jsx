import React from "react";
import { Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

const ImageGalleryModal = ({
  show,
  handleClose,
  images,
  currentImageIndex,
  setCurrentImageIndex,
}) => {
  if (!show) return null;

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      {/* Close Button */}
      <IoClose
        style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "25px",
          cursor: "pointer",
          color: "gray",
          zIndex: "1051",
        }}
        onClick={handleClose}
      />

      {/* Main Image */}
      <Modal.Body
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Left Arrow */}
        <button
          className="arrow-button left"
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: "1000",
            background: "transparent",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
            color: "gray",
          }}
        >
          ❮
        </button>

        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{
            maxWidth: "80%",
            maxHeight: "421px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        {/* Right Arrow */}
        <button
          className="arrow-button right"
          onClick={handleNext}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: "1000",
            background: "transparent",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
            color: "gray",
          }}
        >
          ❯
        </button>
      </Modal.Body>
    </Modal>
  );
};

ImageGalleryModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentImageIndex: PropTypes.number.isRequired,
  setCurrentImageIndex: PropTypes.func.isRequired,
};

export default ImageGalleryModal;
