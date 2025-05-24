import React, { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
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
import axiosInstance from "../../../../instance/axiosInstance";
import ImageModal from "../../../components/ImageViewer/ImageViewer"; // Adjust path accordingly

// Fallback data in case nothing is passed
const fallbackData = {
  title: "Gulf Logistics & Warehouse Facility",
  description:
    "A Luxurious Penthouse With Seamless Smart Home Integration, Offering Breathtaking Views, Modern Interiors, And Cutting-Edge Automation For Ultimate Comfort.",
  coverImage: CoverImage,
  images: [Image1, Image2, Image2, Image1, Image5, Image2],
};

// Bootstrap placeholder component for similar projects
const SimilarProjectsPlaceholder = ({ count = 3 }) => {
  return (
    <div className="more-projects-grid">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="more-project-item placeholder-glow">
          <div
            className="placeholder w-100"
            style={{ height: "200px", backgroundColor: "#e9ecef" }}
          ></div>
          <h3 className="more-project-title mt-2">
            <span className="placeholder col-8"></span>
          </h3>
          <p className="more-project-description">
            <span className="placeholder col-12"></span>
            <span className="placeholder col-10"></span>
            <span className="placeholder col-8"></span>
          </p>
        </div>
      ))}
    </div>
  );
};

const ProjectsDetail = () => {
  const { t } = useTranslation("projectDetails");
  const navigate = useNavigate();

  // Get project data from navigation state
  const location = useLocation();
  const [projectData, setProjectData] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState({ project: true, categories: true });
const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);


   const openModal = (src) => {
    setModalImage(src);
    setModalOpen(true);
  };

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
    setLoading((prev) => ({ ...prev, project: false }));
  }, [location]);

  const fetchSimillarProjects = async () => {
    if (!projectData || !projectData._id) return;

    setLoading((prev) => ({ ...prev, categories: true }));
    try {
      const response = await axiosInstance.post("/fetchSimillarProjects", {
        id: projectData._id,
        categoryId: projectData.categoryId,
      });
      if (response.data.data.length > 0) {
        setSimilar(response.data.data);
        console.log(response.data.data, "===== fetched similar products");
      }
    } catch (error) {
      console.error("Error fetching similar products:", error);
    } finally {
      setLoading((prev) => ({ ...prev, categories: false }));
    }
  };

  useEffect(() => {
    if (projectData) {
      fetchSimillarProjects();
    }
  }, [projectData]);

  // Handle the case where data is still loading
  if (loading.project) {
    return (
      <>
        <HomeNavbar />
        <div className="main">
          <div className="container mt-5">
            <div className="placeholder-glow">
              <div
                className="placeholder col-12"
                style={{ height: "300px" }}
              ></div>
              <h1 className="placeholder col-6 mt-4"></h1>
              <p className="placeholder col-12 mt-3"></p>
              <p className="placeholder col-12"></p>
              <p className="placeholder col-10"></p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
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
            style={{ cursor: "pointer" }}
            onClick={() => openModal(projectData.images[0])}
          />
        </div>

        {/* Description */}
        <div className="content-container">
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
                    style={{ cursor: "pointer" }}
        onClick={() => openModal(img)}
                />
              ))}
          </div>
        </div>

        <div>
          {similar.length > 0 && (
            <div className="more-projects-container">
              <h2 className="more-projects-heading">{t("similar-products")}</h2>
              <button
                onClick={() => navigate("/ProjectList")}
                className="view-more-button"
              >
                {t("view-more-btn")}
              </button>
            </div>
          )}

          {/* Projects Grid with Loading State */}
          {loading.categories ? (
            <SimilarProjectsPlaceholder count={3} />
          ) : (
            <div className="more-projects-grid">
              {similar.map((project, index) => (
                <div
                  key={index}
                  className="more-project-item"
                  onClick={() =>
                    navigate(
                      `/ProjectsDetail/${encodeURIComponent(
                        project.projectName
                      )}`,
                      { state: { project } }
                    )
                  }
                >
                  <img
                    src={project.images[0]}
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
          )}
        </div>
      </div>
      <ImageModal
        src={modalImage}
        alt="Enlarged view"
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />

      <Footer />
    </>
  );
};

export default ProjectsDetail;