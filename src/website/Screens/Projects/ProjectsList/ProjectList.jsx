import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../../Assets/AboutUs/hero.svg";
import "./ProjectList.css";
import HomeNavbar from "../../../components/Home/NavbarDark/DarkNavbar";
import Footer from "../../../components/Home/Footer/Footer";
import axiosInstance from "../../../../instance/axiosInstance";

const ProjectList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchProjects(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    setLoadingCategories(true);
    try {
      const response = await axiosInstance.post("/displayCategory", {
        type: "project"
      });
      
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        setCategories(response.data.data);
        if (response.data.data.length > 0) {
          setSelectedCategory(response.data.data[0]._id);
        }
      } else {
        console.error("Invalid category data format:", response.data);
        setCategories([]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    } finally {
      setLoadingCategories(false);
    }
  };

  const fetchProjects = async (categoryId) => {
    setLoadingProjects(true);
    try {
      const response = await axiosInstance.post('/displayProjectByID', { 
        categoryId: categoryId 
      });
      
      if (response.data && response.data.data) {
        setProjects(response.data.data);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    } finally {
      setLoadingProjects(false);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Placeholder loader for categories
  const CategoryPlaceholders = () => {
    return (
      <div className="category-placeholder-container">
        {[1, 2, 3, 4, 5].map((item) => (
          <span key={item} className="placeholder-glow category-placeholder">
            <span className="placeholder col-12"></span>
          </span>
        ))}
      </div>
    );
  };

  // Placeholder loader for projects
  const ProjectPlaceholders = () => {
    return (
      <div className="more-projects-grid">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="more-project-item placeholder-project">
            <div className="placeholder-glow project-image-placeholder">
              <span className="placeholder col-12 h-100"></span>
            </div>
            <h3 className="placeholder-glow more-project-title">
              <span className="placeholder col-7"></span>
            </h3>
            <p className="placeholder-glow more-project-description">
              <span className="placeholder col-9"></span>
              <span className="placeholder col-12"></span>
            </p>
          </div>
        ))}
      </div>
    );
  };

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
            <h1 className="service-title">Our Projects</h1>
            <p className="service-description">
              Discover our diverse portfolio showcasing transformative
              designs and <br /> exceptional craftsmanship 
              across every project
            </p>
          </div>
        </div>
        
        {/* Category List */}
        <div className="category-containers">
          {loadingCategories ? (
            <CategoryPlaceholders />
          ) : (
            categories.map((category) => (
              <span
                key={category._id}
                className={`category-items ${
                  selectedCategory === category._id ? "selected-category" : ""
                }`}
                onClick={() => handleCategoryClick(category._id)}
              >
                {category.name}
              </span>
            ))
          )}
        </div>

        {/* Project List */}
        {loadingProjects ? (
          <ProjectPlaceholders />
        ) : projects.length > 0 ? (
          <div className="more-projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="more-project-item">
                <img
                  onClick={() => 
                    navigate(`/ProjectsDetail/${encodeURIComponent(project.projectName)}`, { state: { project } })
                  }
                  src={project.images[0] || project.img}
                  alt={project.projectName}
                  className="more-project-image"
                />
                <h3 className="more-project-title">{project.projectName}</h3>
                <p className="more-project-description">{project.projectDescription}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects-container">
            <p className="no-projects-message">No projects found for this category</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProjectList;