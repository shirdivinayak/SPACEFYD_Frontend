import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../website/Screens/AboutUs/AboutUs";


const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/AboutUs" element={<AboutUs />} />

    </Routes>
  );
};

export default WebsiteRoutes;
