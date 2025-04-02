import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import useBannerApi from "../../../hooks/usebannerapi";

const Home = () => {
  const { addBrand, editBrand, fetchBanner, loading, error, success } = useBannerApi();
  const [banner, setBanner] = useState(null);
  const [bannerId, setBannerId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const [hasBanner, setHasBanner] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getBanner = async () => {
      try {
        const response = await fetchBanner();
        if (response?.success && Array.isArray(response.data) && response.data.length > 0) {
          setBanner(response.data[0].defaultImage);
          setBannerId(response.data[0]._id)
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

  const handleBannerImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file); // Save the actual file object
    
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result; // This is the base64 string
        setBanner(imageUrl);
        setIsChanged(true);
      };
      reader.readAsDataURL(file);
    } else {
      setMessage("Please upload a valid image file.");
      setTimeout(() => setMessage(""), 3000);
    }
  };
  
  const handleSave = async () => {
    if (!selectedFile) {
      setMessage("Please select an image file first.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
  
    try {
      // Create the payload for the API
      const bannerData = {
        id: bannerId ? bannerId : null,
        defaultImage: banner,
        bannerName: '',
        bannerDescription: ''
      };
      
      if (hasBanner) {
        await editBrand(bannerData);
      } else {
        await addBrand(bannerData);
        setHasBanner(true);
      }
      setIsChanged(false);
      setMessage("Banner saved successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error("Error saving banner:", err);
      setMessage("Error saving banner. Please try again.");
      setTimeout(() => setMessage(""), 3000);
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

      <div className="container" style={{ marginTop: "2rem" ,backgroundColor:'#fff',padding:'20px', width:'100%'
      }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "1000px",
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
        {message && (
          <p style={{ 
            color: message.includes("Error") ? "red" : "green", 
            textAlign: "center", 
            marginTop: "1rem" 
          }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;