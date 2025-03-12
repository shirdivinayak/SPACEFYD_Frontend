import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../website/Screens/AboutUs/AboutUs";
import Services from "../website/Screens/Services/Services";
import ProjectsDetail from "../website/Screens/Projects/ProjectsDetail/Project-Detail";
import ProjectList from "../website/Screens/Projects/ProjectsList/ProjectList";
import ContactUs from "../website/Screens/ContactUs/ContactUs";
import Home from "../website/Screens/Home/Home";
import Products from "../website/Screens/Products/ProductList/Products";
import ProductDetail from "../website/Screens/Products/ProductDetails/ProductDetails";

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/ProjectList" element={<ProjectList />} />
      <Route path="/ProjectsDetail/:title" element={<ProjectsDetail />} />{" "}
      {/* Add :title in path */}
      <Route path="/Products" element={<Products />} />
      <Route path="/ProductDetails" element={<ProductDetail />} />
    </Routes>
  );
};

export default WebsiteRoutes;
