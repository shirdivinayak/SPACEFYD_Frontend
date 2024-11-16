import React from "react";
import { Modal, Button, Card } from "react-bootstrap";

const ModalComponent = ({ show, handleClose, banners }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Uploaded Banners</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {/* Smaller banners on the left */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "30%",
            }}
          >
            {["banner1", "banner2", "banner3", "banner4"].map(
              (bannerKey, index) => (
                <Card
                  key={index}
                  style={{
                    width: "100%",
                    height: "95px",
                    border: "1px dashed #ccc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {banners[bannerKey]?.image ? (
                    <img
                      src={banners[bannerKey].image}
                      alt={`Banner ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div style={{ color: "#aaa", fontSize: "0.9rem" }}>
                      No Image
                    </div>
                  )}
                </Card>
              )
            )}
          </div>

          {/* Main banner on the right */}
          <div
            style={{
              flex: 1,
              border: "1px dashed #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            {banners.mainBanner?.image ? (
              <img
                src={banners.mainBanner.image}
                alt="Main Banner"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div style={{ color: "#aaa", fontSize: "1.2rem" }}>No Image</div>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
