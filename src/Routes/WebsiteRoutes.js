import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../website/Screens/AboutUs/AboutUs";
import Services from "../website/Screens/Services/Services";
import ProjectsDetail from "../website/Screens/Projects/ProjectsDetail/Project-Detail";
import ProjectList from "../website/Screens/Projects/ProjectsList/ProjectList";
import ContactUs from "../website/Screens/ContactUs/ContactUs";


const WebsiteRoutes = () => {
  
  return (
    <Routes>
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/ProjectList" element={<ProjectList />} />
      <Route path="/ProjectsDetail/:title" element={<ProjectsDetail />} />  {/* Add :title in path */}

    </Routes>
  );
};

export default WebsiteRoutes;
