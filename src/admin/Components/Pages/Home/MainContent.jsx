import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import useBannerApi from "../../../hooks/usebannerapi";

const Home = () => {
  const { addBrand, editBrand, fetchBanner, loading, error, success } = useBannerApi();
  const [banner, setBanner] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const [hasBanner, setHasBanner] = useState(false);

  useEffect(() => {
    const getBanner = async () => {
      try {
        const response = await fetchBanner();
        if (response?.success && Array.isArray(response.data) && response.data.length > 0) {
          setBanner(response.data[0].bannerUrl);
          setHasBanner(true);
        } else if (response?.success && response?.data?.bannerUrl) {
          setBanner(response.data.bannerUrl);
          setHasBanner(true);
        }
      } catch (err) {
        console.error("Error fetching banner:", err);
      }
    };
    
    getBanner();
  }, []);

  const handleBannerImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setBanner(imageUrl);
        setSelectedFile(file); // This should set the file object
        setIsChanged(true);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Please upload a valid image file.");
    }
  };

  const handleSave = async () => {
    if (!selectedFile) return;
    console.log("Selected file on save:", selectedFile); // This logs the File object
    const formData = new FormData();
    formData.append("defaultImage", selectedFile);
    formData.append("bannerName", "");
    formData.append("bannerDescription", "");
  
    try {
      if (hasBanner) {
        await editBrand(formData);
      } else {
        await addBrand(formData);
        setHasBanner(true);
      }
      setIsChanged(false);
    } catch (err) {
      console.error("Error saving banner:", err);
    }
  };

  
  const handleCancel = () => { 
    if (!hasBanner) {
      setBanner(null);
    } else {
      fetchBanner().then(response => {
        if (response?.success && Array.isArray(response.data) && response.data.length > 0) {
          setBanner(response.data[0].bannerUrl);
        } else if (response?.success && response?.data?.bannerUrl) {
          setBanner(response.data.bannerUrl);
        }
      }).catch(err => {
        console.error("Error restoring banner:", err);
      });
    }
    setSelectedFile(null);
    setIsChanged(false);
  };

  return (
    <div className="container w-75 p-20" style={{ padding: "1rem" }}>
      <h3>Home</h3>

      <div className="container" style={{ marginTop: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            style={{
              width: "748px",
              height: "421px",
              border: "1px dashed #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => document.getElementById("banner-upload").click()}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleBannerImageUpload}
              style={{ display: "none" }}
              id="banner-upload"
            />
            {banner ? (
              <img
                src={banner}
                alt="Banner"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Button variant="outline-secondary" style={{ fontSize: "1rem" }}>
                Click here to upload Banner
              </Button>
            )}
          </Card>
        </div>

        {isChanged && (
          <div style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}>
            <Button variant="outline-danger" onClick={handleCancel} style={{ marginRight: "0.5rem" }}>
              Cancel
            </Button>
            <Button variant="outline-success" onClick={handleSave} disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        )}
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        {success && <p style={{ color: "green", textAlign: "center" }}>Banner updated successfully!</p>}
      </div>
    </div>
  );
};

export default Home;