import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Home = () => {
  const [banners, setBanners] = useState({
    mainBanner: { image: null },
    banner1: { image: null },
    banner2: { image: null },
    banner3: { image: null },
    banner4: { image: null },
  });

  const [trendingItems, setTrendingItems] = useState([
    { image: null, title: "Card 1" },
    { image: null, title: "Card 2" },
    { image: null, title: "Card 3" },
  ]);

  const [isChanged, setIsChanged] = useState(false);

  const handleBannerImageUpload = (bannerKey, e) => {
    const file = e.target.files[0];
    if (file) {
      setBanners((prevState) => ({
        ...prevState,
        [bannerKey]: { image: URL.createObjectURL(file) },
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
    setTrendingItems([
      { image: null, title: "Card 1" },
      { image: null, title: "Card 2" },
      { image: null, title: "Card 3" },
    ]);
    setIsChanged(false);
  };

  const handleTrendingImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedTrendingItems = [...trendingItems];
      updatedTrendingItems[index].image = URL.createObjectURL(file);
      setTrendingItems(updatedTrendingItems);
      setIsChanged(true);
    }
  };

  return (
    <div
      className="container w-75 p-20"
      style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}
    >
      <h3>Home</h3>

      <div style={{ marginTop: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Smaller banners on the left side */}
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
                <Card
                  key={index}
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "1px dashed #ccc",
                    position: "relative",
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
                    <img
                      src={banners[bannerKey].image}
                      alt={`Banner ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        document.getElementById(`${bannerKey}-upload`).click()
                      }
                    />
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
                        fontSize: "0.7rem",
                      }}
                    >
                      <i className="bi bi-plus-lg"></i>
                      <br />
                      Upload
                    </Button>
                  )}
                  {banners[bannerKey].image && (
                    <div
                      style={{ position: "absolute", top: "5px", right: "5px" }}
                    >
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleBannerImageDelete(bannerKey)}
                      >
                        <i className="bi bi-x"></i>
                      </Button>
                    </div>
                  )}
                </Card>
              )
            )}
          </div>

          {/* Main banner */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Card
              style={{
                width: "100%",
                height: "300px",
                border: "1px dashed #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                  }}
                />
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
              {banners.mainBanner.image && (
                <div
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleBannerImageDelete("mainBanner")}
                  >
                    <i className="bi bi-x"></i>
                  </Button>
                </div>
              )}
            </Card>
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
    </div>
  );
};

export default Home;
