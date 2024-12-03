import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Login from "./Components/Pages/Login/Login";
import Sidebar from "./Components/common/Sidebar";
import TopNavbar from "./Components/common/Topnavbar";
import Home from "./Components/Pages/Home/MainContent";
import Product from "./Components/Pages/Products/Products";
import Project from "./Components/Pages/Projects/Project";
import ProductCategory from "./Components/Pages/Category/ProductCategory/ProductCategory";
import ProjectCategory from "./Components/Pages/Category/ProjectCategory/ProjectCategory";
import EditProductScreen from "./Components/Pages/Products/Editproduct";
import ImageGalleryModal from "./Components/common/ImageGalleryModal"; // Import the modal

function App() {
  const Layout = ({ children }) => {
    const location = useLocation();

    // Exclude Sidebar and TopNavbar for the login page
    const isLoginPage = location.pathname === "/login";

    if (isLoginPage) {
      return children;
    }

    return (
      <div className="d-flex">
        <Sidebar />
        <div
          className="flex-grow-1"
          style={{ backgroundColor: "#F5F5F5", padding: "0" }}
        >
          <TopNavbar />
          {children}
        </div>
      </div>
    );
  };

  // State for the ImageGalleryModal
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);

  // Function to open the modal
  const openGallery = (imageList, index) => {
    setImages(imageList);
    setCurrentImageIndex(index);
    setModalVisible(true);
  };

  // Function to close the modal
  const closeGallery = () => {
    setModalVisible(false);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login />} />
          {/* Main Routes */}
          <Route
            path="/"
            element={<Home openGallery={openGallery} />} // Pass modal handler
          />
          <Route
            path="/categories/products"
            element={<ProductCategory openGallery={openGallery} />}
          />
          <Route
            path="/categories/projects"
            element={<ProjectCategory openGallery={openGallery} />}
          />
          <Route
            path="/products"
            element={<Product openGallery={openGallery} />}
          />
          <Route
            path="/projects"
            element={<Project openGallery={openGallery} />}
          />
          <Route path="/EditProduct" element={<EditProductScreen />} />
        </Routes>

        {/* ImageGalleryModal */}
        <ImageGalleryModal
          images={images}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          visible={isModalVisible}
          close={closeGallery}
        />
      </Layout>
    </Router>
  );
}

export default App;
