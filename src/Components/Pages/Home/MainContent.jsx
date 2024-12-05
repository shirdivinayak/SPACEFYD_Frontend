import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import ImageGalleryModal from "../../common/ImageGalleryModal";

const MainContent = () => {
  const [banners, setBanners] = useState({
    mainBanner: { image: null },
    banner1: { image: null },
    banner2: { image: null },
    banner3: { image: null },
    banner4: { image: null },
  });

  const [isChanged, setIsChanged] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const handleSave = () => {
    console.log("Changes saved!");
    setIsChanged(false);
  };

  // const handleCancel = () => {
  //   setBanners({
  //     mainBanner: { image: null },
  //     banner1: { image: null },
  //     banner2: { image: null },
  //     banner3: { image: null },
  //     banner4: { image: null },
  //   });
  //   setIsChanged(false);
  // };

  const bannerKeys = ["banner1", "banner2", "banner3", "banner4", "mainBanner"];
  const sampleImages = bannerKeys.map(
    (key) => banners[key].image || `https://via.placeholder.com/150?text=${key}`
  );

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
              (bannerKey, idx) => (
                <div
                  key={idx}
                  style={{
                    width: "167px",
                    height: "95px",
                    border: "1px dashed #ccc",
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
                        alt="Banner"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                        onClick={() => handleImageClick(idx)}
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
                <img
                  src={banners.mainBanner.image}
                  alt="Main Banner"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageClick(4)}
                />
              ) : (
                <Button
                  variant="outline-secondary"
                  onClick={() =>
                    document.getElementById("main-banner-upload").click()
                  }
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Upload Banner
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
            {/* <Button variant="outline-danger" onClick={handleCancel}>
              Cancel
            </Button> */}
            <Button
              variant="outline-success"
              onClick={handleSave}
              style={{ marginLeft: "0.5rem" }}
            >
              Save
            </Button>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <ImageGalleryModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        images={sampleImages}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
};

export default MainContent;
