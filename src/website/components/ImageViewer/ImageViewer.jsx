import React from "react";

export default function ImageModal({ src, alt, isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.className === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          borderRadius: "8px",
          boxShadow: "0 0 15px rgba(0,0,0,0.5)",
        }}
      />
    </div>
  );
}
