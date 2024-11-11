import React, { useState } from "react";
import { Card, Button, Row, Col} from "react-bootstrap";

const Home = () => {
  // States for handling banners
  const [banners, setBanners] = useState({
    mainBanner: { image: null },
    banner1: { image: null },
    banner2: { image: null },
    banner3: { image: null },
    banner4: { image: null },
  });

  // States for trending items
  const [trendingItems, setTrendingItems] = useState([
    { image: null, title: "Card 1" },
    { image: null, title: "Card 2" },
    { image: null, title: "Card 3" },
  ]);

  // State to detect changes
  const [isChanged, setIsChanged] = useState(false);

  // Handle image upload for banners
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

  // Handle image deletion for banners
  const handleBannerImageDelete = (bannerKey) => {
    setBanners((prevState) => ({
      ...prevState,
      [bannerKey]: { image: null },
    }));
    setIsChanged(true);
  };

  // Handle save action
  const handleSave = () => {
    console.log("Changes saved!");
    setIsChanged(false);
  };

  // Handle cancel action
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

  // Handle image upload for trending items
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
    <div className="p-4">
      <h3>Home</h3>

      {/* Banner Section */}
      <div className="mt-4">
        <h4 className="pt-3 ps-3">Banners</h4>

        {/* Main Banner */}
        <div className="d-flex position-relative">
          <Card
            className="border border-dashed flex-grow-1 d-flex justify-content-center align-items-center position-relative"
            style={{ height: "300px" }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleBannerImageUpload("mainBanner", e)}
              className="d-none"
              id="main-banner-upload"
            />
            {banners.mainBanner.image ? (
              <img
                src={banners.mainBanner.image}
                alt="Main Banner"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Button
                variant="outline-secondary"
                onClick={() =>
                  document.getElementById("main-banner-upload").click()
                }
                className="text-center"
              >
                <i className="bi bi-plus-lg"></i> <br />
                Click here to upload Banner
              </Button>
            )}
            {banners.mainBanner.image && (
              <div className="position-absolute top-0 end-0 p-2">
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

        {/* Smaller Banners */}
        <div className="d-flex justify-content-center mt-3 gap-2">
          {["banner1", "banner2", "banner3", "banner4"].map(
            (bannerKey, index) => (
              <Card
                key={index}
                className="border border-dashed position-relative"
                style={{ width: "20%", height: "100px" }}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleBannerImageUpload(bannerKey, e)}
                  className="d-none"
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
                    className="d-flex justify-content-center align-items-center w-100 h-100"
                  >
                    <i className="bi bi-plus-lg"></i>
                    <br />
                    Click here to upload
                  </Button>
                )}
                {banners[bannerKey].image && (
                  <div className="position-absolute top-0 end-0 p-2">
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

        {isChanged && (
          <div className="d-flex justify-content-end mt-3">
            <Button
              variant="outline-danger"
              onClick={handleCancel}
              className="me-2"
            >
              Cancel
            </Button>
            <Button variant="outline-success" onClick={handleSave}>
              Save
            </Button>
          </div>
        )}
      </div>

      {/* Trending Section */}
      <div className="mt-4">
        <div className="d-flex">
          <h4 className="ps-3">Trending</h4>
          <Button variant="dark" className="justify-content-right ms-auto pe-3">
            <i className="bi bi-plus-circle pe-2"></i>
            Add Trending Products
          </Button>
        </div>

        <div className="mt-4">
          <Row className="row-cols-1 row-cols-md-3 g-4">
            {trendingItems.map((item, index) => (
              <Col key={index}>
                <Card className="h-100">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleTrendingImageUpload(index, e)}
                    className="d-none"
                    id={`trending-${index}-upload`}
                  />
                  <Card.Img
                    variant="top"
                    src={item.image || ""}
                    alt={item.title}
                    onClick={() =>
                      document
                        .getElementById(`trending-${index}-upload`)
                        .click()
                    }
                    style={{
                      cursor: "pointer",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;