import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../../Assets/AboutUs/hero.svg";
import CoverImage from "../../../Assets/Projetcs/cover.svg"; // Dummy cover image
import Image1 from "../../../Assets/Projetcs/image1.svg";
import Image2 from "../../../Assets/Projetcs/image2.svg";
import Image5 from "../../../Assets/Projetcs/image5.svg";
import "./Projetc-Detail.css"; // Import CSS file

const dummyData = {
  title: "Gulf Logistics & Warehouse Facility",
  description:
    "A Luxurious Penthouse With Seamless Smart Home Integration, Offering Breathtaking Views, Modern Interiors, And Cutting-Edge Automation For Ultimate Comfort.",
  coverImage: CoverImage,
  images: [Image1, Image2, Image2, Image1, Image5, Image2],
};

const projects = [
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

const ProjectsDetail = (props) => {
  console.log("ProjectsDetail Params:", props);

  return (
    <div className="main">
      {/* Hero Section */}
      <div
        className="services-container"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="container px-4">
          <h1 className="service-title">{dummyData.title}</h1>
        </div>
      </div>

      {/* Cover Image */}
      <div className="cover-image-container">
        <img src={dummyData.coverImage} alt="Cover" className="cover-image" />
      </div>

      {/* Description */}
      <div className="content-contatiner">
        <p className="project-description">{dummyData.description}</p>

        {/* Images Grid */}
        <div className="images-grid">
          {dummyData.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Project ${index}`}
              className="grid-image"
            />
          ))}
        </div>
      </div>
      <div>
        {/* Heading and Button */}
        <div className="more-projects-container">
          <h2 className="more-projects-heading">Similar Projects</h2>
          <button className="view-more-button">View More</button>
        </div>

        {/* Projects Grid */}
        <div className="more-projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="more-project-item">
              <img
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
    </div>
  );
};

export default ProjectsDetail;
