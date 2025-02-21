import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../website/Screens/AboutUs/AboutUs";
import Services from "../website/Screens/Services/Services";


const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Services" element={<Services />} />

    </Routes>
  );
};

export default WebsiteRoutes;
