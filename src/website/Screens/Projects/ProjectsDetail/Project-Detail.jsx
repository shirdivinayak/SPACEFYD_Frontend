import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../../Assets/AboutUs/hero.svg";
import CoverImage from "../../../Assets/Projetcs/cover.svg"; // Fallback cover image
import Image1 from "../../../Assets/Projetcs/image1.svg";
import Image2 from "../../../Assets/Projetcs/image2.svg";
import Image5 from "../../../Assets/Projetcs/image5.svg";
import { ReactComponent as Linebot } from "../../../Assets/Products/Line.svg";

import "./Projetc-Detail.css"; // Import CSS file
import HomeNavbar from "../../../components/Home/NavbarDark/DarkNavbar"; // Import Navbar
import Footer from "../../../components/Home/Footer/Footer"; // Import Footer
import { useTranslation } from "react-i18next";

// Fallback data in case nothing is passed
const fallbackData = {
  title: "Gulf Logistics & Warehouse Facility",
  description:
    "A Luxurious Penthouse With Seamless Smart Home Integration, Offering Breathtaking Views, Modern Interiors, And Cutting-Edge Automation For Ultimate Comfort.",
  coverImage: CoverImage,
  images: [Image1, Image2, Image2, Image1, Image5, Image2],
};

const similarProjects = [
  {
    img: Image1,
    title: "Gulf Logistics & Warehouse Facility",
    description:
      "A luxurious penthouse with seamless smart home integration, offering breathtaking views, modern interiors, and cutting-edge automation for ultimate comfort.",
  },
  {
    img: Image5,
    title: "Al Hadeera Luxury Villa",
    description:
      "A luxurious penthouse with seamless smart home integration, offering breathtaking views, modern interiors, and cutting-edge automation for ultimate comfort.",
  },
];

const ProjectsDetail = () => {
  const { t } = useTranslation("projectDetails");

  // Get project data from navigation state
  const location = useLocation();
  // const params = useParams();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    // If project data was passed via navigation state
    if (location.state && location.state.project) {
      console.log("Project data from navigation:", location.state.project);
      setProjectData(location.state.project);
    } else {
      // If no data was passed, use fallback data
      console.log("No project data found in navigation state, using fallback");
      setProjectData(fallbackData);
    }
  }, [location]);

  // Handle the case where data is still loading
  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HomeNavbar />
      <div className="main">
        {/* Hero Section */}
        <div
          className="services-container"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="container px-4">
            <h1 className="service-title">{projectData.projectName}</h1>
          </div>
        </div>

        {/* Cover Image */}
        <div className="cover-image-container">
          <img
            src={projectData.images[0]}
            alt="Cover"
            className="cover-image"
          />
        </div>

        {/* Description */}
        <div className="content-contatiner">
          <p className="project-description">
            {projectData.projectDescription}
          </p>

          {/* Images Grid - use project images if available, otherwise use fallback */}
          <div className="images-grid">
            {(projectData.images || fallbackData.images)
              .slice(1)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Project ${index + 1}`}
                  className="grid-image"
                />
              ))}
          </div>
        </div>
        <div>
          {/* Heading and Button */}
          <div className="more-projects-container">
            <h2 className="more-projects-heading">{t("similar-products")}</h2>
            <button className="view-more-button">{t("view-more-btn")}</button>
          </div>

          {/* Projects Grid */}
          <div className="more-projects-grid">
            {similarProjects.map((project, index) => (
              <div key={index} className="more-project-item">
                <img
                  src={project.images}
                  alt={project.title}
                  className="more-project-image"
                />
                <h3 className="more-project-title">{project.projectName}</h3>
                <p className="more-project-description">
                  {project.projectDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectsDetail;
