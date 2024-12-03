import React from "react";
import PropTypes from "prop-types";
import "./ImageGalleryModal.css";

const ImageGalleryModal = ({
  images,
  currentImageIndex,
  setCurrentImageIndex,
  visible,
  close,
}) => {
  if (!visible) return null;

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="modal-overlay">
      {/* Close Button */}
      <button className="close-button" onClick={close}>
        ✖
      </button>

      {/* Main Image */}
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="main-image"
        />
      </div>

      {/* Navigation Buttons */}
      <button className="arrow-button left" onClick={handlePrev}>
        ❮
      </button>
      <button className="arrow-button right" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

ImageGalleryModal.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentImageIndex: PropTypes.number.isRequired,
  setCurrentImageIndex: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default ImageGalleryModal;
