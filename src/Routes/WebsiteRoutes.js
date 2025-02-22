import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../website/Screens/AboutUs/AboutUs";
import Services from "../website/Screens/Services/Services";
import ProjectsDetail from "../website/Screens/Projects/ProjectsDetail/Project-Detail";


const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/ProjectsDetail" element={<ProjectsDetail />} />

    </Routes>
  );
};

export default WebsiteRoutes;
