import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";

const Home = () => {
  const [banners, setBanners] = useState({
    mainBanner: { image: null },
    banner1: { image: null },
    banner2: { image: null },
    banner3: { image: null },
    banner4: { image: null },
  });

  const [isChanged, setIsChanged] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleBannerImageUpload = (bannerKey, e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImage = URL.createObjectURL(file);
      setBanners((prevState) => ({
        ...prevState,
        [bannerKey]: { image: updatedImage },
      }));
      setIsChanged(true);
    }
  };

  const handleBannerImageDelete = (bannerKey) => {
    setBanners((prevState) => ({
      ...prevState,
      [bannerKey]: { image: null },
    }));
    setIsChanged(true);
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    console.log("Changes saved!");
    setIsChanged(false);
  };

  const handleCancel = () => {
    setBanners({
      mainBanner: { image: null },
      banner1: { image: null },
      banner2: { image: null },
      banner3: { image: null },
      banner4: { image: null },
    });
    setIsChanged(false);
  };

  return (
    <div className="container w-75 p-20" style={{ padding: "1rem" }}>
      <h3>Home</h3>

      <div className="container" style={{ marginTop: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginRight: "10px",
            }}
          >
            {["banner1", "banner2", "banner3", "banner4"].map(
              (bannerKey, index) => (
                <div
                  key={index}
                  style={{
                    width: "167px",
                    height: "95px",
                    border: "1px dashed #ccc",
                    borderRadius: 0,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleBannerImageUpload(bannerKey, e)}
                    style={{ display: "none" }}
                    id={`${bannerKey}-upload`}
                  />
                  {banners[bannerKey].image ? (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <img
                        src={banners[bannerKey].image}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                        onClick={handleImageClick}
                      />
                      <IoClose
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          fontSize: "20px",
                          color: "gray",
                          cursor: "pointer",
                        }}
                        onClick={() => handleBannerImageDelete(bannerKey)}
                      />
                    </div>
                  ) : (
                    <Button
                      variant="outline-secondary"
                      onClick={() =>
                        document.getElementById(`${bannerKey}-upload`).click()
                      }
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "2rem",
                      }}
                    >
                      <i className="bi bi-file-earmark-image"></i>
                    </Button>
                  )}
                </div>
              )
            )}
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "748px",
                height: "421px",
                border: "1px dashed #ccc",
                borderRadius: 0,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleBannerImageUpload("mainBanner", e)}
                style={{ display: "none" }}
                id="main-banner-upload"
              />
              {banners.mainBanner.image ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={banners.mainBanner.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={handleImageClick}
                  />
                  <IoClose
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      fontSize: "20px",
                      color: "gray",
                      cursor: "pointer",
                    }}
                    onClick={() => handleBannerImageDelete("mainBanner")}
                  />
                </div>
              ) : (
                <Button
                  variant="outline-secondary"
                  onClick={() =>
                    document.getElementById("main-banner-upload").click()
                  }
                  style={{
                    textAlign: "center",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  <i className="bi bi-plus-lg"></i> <br />
                  Click here to upload Banner
                </Button>
              )}
            </div>
          </div>
        </div>

        {isChanged && (
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "1rem",
            }}
          >
            <Button
              variant="outline-danger"
              onClick={handleCancel}
              style={{ marginRight: "0.5rem" }}
            >
              Cancel
            </Button>
            <Button variant="outline-success" onClick={handleSave}>
              Save
            </Button>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        backdrop="static"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <IoClose
          style={{
            position: "absolute",
            top: "10px",
            right: "20px",
            fontSize: "25px",
            cursor: "pointer",
            color: "gray",
            zIndex: "1051", // Ensure it's above the modal
          }}
          onClick={() => setShowModal(false)}
        />
        <Modal.Body
          style={{ display: "flex", gap: "10px", background: "none" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "30%",
            }}
          >
            {["banner1", "banner2", "banner3", "banner4"].map((bannerKey) => (
              <div
                key={bannerKey}
                style={{
                  width: "167px",
                  height: "95px",
                  border: banners[bannerKey].image ? "none" : "1px dashed #ccc",
                  background: banners[bannerKey].image
                    ? `url(${banners[bannerKey].image}) center / cover`
                    : "none",
                }}
              />
            ))}
          </div>
          <div
            style={{
              width: "70%",
              height: "421px",
              background: banners.mainBanner.image
                ? `url(${banners.mainBanner.image}) center / cover`
                : "none",
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
