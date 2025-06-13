import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../../Assets/AboutUs/hero.svg";
import "./ProjectList.css";
import HomeNavbar from "../../../components/Home/NavbarDark/DarkNavbar";
import Footer from "../../../components/Home/Footer/Footer";
import axiosInstance from "../../../../instance/axiosInstance";
import { useTranslation } from "react-i18next";

const ProjectList = () => {
  const { t } = useTranslation("projectslist");

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingMoreProjects, setLoadingMoreProjects] = useState(false);
  const [projects, setProjects] = useState([]);
  const [lastFetchedId, setLastFetchedId] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Reset projects and pagination state when category changes
      setProjects([]);
      setLastFetchedId(null);
      setHasMore(true);
      fetchProjects(selectedCategory, null);
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    setLoadingCategories(true);
    try {
      const response = await axiosInstance.post("/displayCategory", {
        type: "project",
      });

      if (
        response.data &&
        response.data.data &&
        Array.isArray(response.data.data)
      ) {
        const allProjectsCategory = {
          _id: "All Projects", // Unique identifier for the "All Projects" category
          name: t("All Projects"), // Translate this to show 'All Projects'
        };
        const allCategories = [allProjectsCategory, ...response.data.data];
        setCategories(allCategories);
        // Set the selected category to "All Projects" by default
        setSelectedCategory(allProjectsCategory._id);
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

  const fetchProjects = async (categoryId, lastId) => {
    console.log("====api called");
    const isInitialFetch = lastId === null;

    if (isInitialFetch) {
      setLoadingProjects(true);
    } else {
      setLoadingMoreProjects(true);
    }

    try {
      const endpoint =
        categoryId === "All Projects" ? "/displayProject" : "/displayProjectByID";
      const response = await axiosInstance.post(endpoint, {
        categoryId: categoryId !== "All Projects" ? categoryId : undefined,
        lastId: lastId,
      });
      console.log(response.data.lastFetchedId, "---lSTFETCH");

      if (response.data && response.data.data) {
        const newProjects = response.data.data;
        const newLastFetchedId = response.data.lastFetchedId;

        if (isInitialFetch) {
          setProjects(newProjects);
        } else {
          // Prevent duplicates: filter out any projects that already exist in the current list
          const updatedProjects = [
            ...projects,
            ...newProjects.filter(
              (newProject) => !projects.some((project) => project._id === newProject._id)
            ),
          ];
          setProjects(updatedProjects);
        }

        if (newLastFetchedId) {
          setLastFetchedId(newLastFetchedId);
          setHasMore(newProjects.length > 0);
        } else {
          setHasMore(false);
        }
      } else {
        if (isInitialFetch) {
          setProjects([]);
        }
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      if (isInitialFetch) {
        setProjects([]);
      }
      setHasMore(false);
    } finally {
      if (isInitialFetch) {
        setLoadingProjects(false);
      } else {
        setLoadingMoreProjects(false);
      }
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Set up intersection observer for infinite scrolling
  const lastProjectElementRef = useCallback(
    (node) => {
      if (loadingProjects || loadingMoreProjects) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchProjects(selectedCategory, lastFetchedId);
        }
      });

      if (node) observer.current.observe(node);
    },
    [
      loadingProjects,
      loadingMoreProjects,
      hasMore,
      selectedCategory,
      lastFetchedId,
    ]
  );

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

  // Loader for fetching more projects
  const LoadMorePlaceholder = () => {
    return (
      <div className="more-projects-grid">
        {[1, 2].map((item) => (
          <div
            key={`load-more-${item}`}
            className="more-project-item placeholder-project"
          >
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
            <h1 className="service-title">{t("our-projects")}</h1>
            <p
              className="service-description"
              dangerouslySetInnerHTML={{ __html: t("discover") }}
            ></p>
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
            {projects.map((project, index) => {
              if (index === projects.length - 1) {
                return (
                  <div
                    ref={lastProjectElementRef}
                    key={`${project._id}-${index}`}
                    className="more-project-item"
                  >
                    <img
                      onClick={() =>
                        navigate(
                          `/ProjectsDetail/${encodeURIComponent(
                            project.projectName
                          )}`,
                          { state: { project } }
                        )
                      }
                      src={project.images[0] || project.img}
                      alt={project.projectName}
                      className="more-project-image"
                    />
                    <h3 className="more-project-title">
                      {project.projectName}
                    </h3>
                    <p className="more-project-description">
                      {project.projectDescription}
                    </p>
                  </div>
                );
              } else {
                return (
                  <div
                    key={`${project._id}-${index}`}
                    className="more-project-item"
                  >
                    <img
                      onClick={() =>
                        navigate(
                          `/ProjectsDetail/${encodeURIComponent(
                            project.projectName
                          )}`,
                          { state: { project } }
                        )
                      }
                      src={project.images[0] || project.img}
                      alt={project.projectName}
                      className="more-project-image"
                    />
                    <h3 className="more-project-title">
                      {project.projectName}
                    </h3>
                    <p className="more-project-description">
                      {project.projectDescription}
                    </p>
                  </div>
                );
              }
            })}

            {/* Loader for additional projects */}
            {loadingMoreProjects && <LoadMorePlaceholder />}
          </div>
        ) : (
          <div className="no-projects-container">
            <p className="no-projects-message">{t("no-project")}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProjectList;
