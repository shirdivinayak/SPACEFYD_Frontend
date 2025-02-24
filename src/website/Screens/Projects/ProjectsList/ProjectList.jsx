import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../../Assets/AboutUs/hero.svg";
import Image1 from "../../../Assets/Projetcs/image1.svg";
import Image2 from "../../../Assets/Projetcs/image2.svg";
import Image5 from "../../../Assets/Projetcs/image5.svg";
import "./ProjectList.css"; // Import CSS file

const ProjectList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Industrialspaces");
  const navigate = useNavigate(); // Hook for navigation

  const projectsData = {
    Industrialspaces: [
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
    ],
    Commercial: [
      {
        img: Image2,
        title: "Modern Office Space",
        description:
          "An innovative office design with ergonomic furniture and smart technology to enhance productivity and comfort.",
      },
      {
        img: Image1,
        title: "Luxury Hotel Suite",
        description:
          "An elegant hotel suite with premium interiors and state-of-the-art automation for an unforgettable experience.",
      },
    ],
    Residential: [
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
    ],
    Hospitality: [
      {
        img: Image2,
        title: "Modern Office Space",
        description:
          "An innovative office design with ergonomic furniture and smart technology to enhance productivity and comfort.",
      },
      {
        img: Image1,
        title: "Luxury Hotel Suite",
        description:
          "An elegant hotel suite with premium interiors and state-of-the-art automation for an unforgettable experience.",
      },
    ],
    Retail: [
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
    ],
    Education: [
      {
        img: Image2,
        title: "Modern Office Space",
        description:
          "An innovative office design with ergonomic furniture and smart technology to enhance productivity and comfort.",
      },
      {
        img: Image1,
        title: "Luxury Hotel Suite",
        description:
          "An elegant hotel suite with premium interiors and state-of-the-art automation for an unforgettable experience.",
      },
    ],
  };

  const categories = Object.keys(projectsData);

  return (
    <div className="main">
      {/* Hero Section */}
      <div
        className="services-container"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="container px-4">
          <h1 className="service-title">Our Projects</h1>
          <p className="service-description">
            Discover our diverse portfolio showcasing transformative
            designs and <br /> exceptional craftsmanship 
            across every project
          </p>
        </div>
      </div>
      {/* Category List */}
      <div className="category-container">
        {categories.map((category) => (
          <span
            key={category}
            className={`category-item ${
              selectedCategory === category ? "selected-category" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Project List */}
      <div className="more-projects-grid">
        {projectsData[selectedCategory].map((project, index) => (
          <div key={index} className="more-project-item">
            <img
              onClick={() =>
                navigate(`/ProjectsDetail/${encodeURIComponent(project.title)}`)
              }
              src={project.img}
              alt={project.title}
              className="more-project-image"
            />
            <h3 className="more-project-title">{project.title}</h3>
            <p className="more-project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
