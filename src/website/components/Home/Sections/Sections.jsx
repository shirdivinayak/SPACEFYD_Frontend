import React from "react";
import "./Sections.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Sections = ({ backgroundImage, sections }) => {
  const { t } = useTranslation("sections");
  const navigate = useNavigate();

  const handleServiceNavigation = (sectionId) => {
    navigate(`/services#${sectionId}`);
    // window.scroll(0,0)
    // Smooth scroll after navigation
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div
      className="background-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Top Headings */}
      <div className="text-center mb-5">
        <h6 className="section-subtitle">{t("our")}</h6>
        <h1
          className="section-title"
          dangerouslySetInnerHTML={{ __html: t("tailor") }}
        ></h1>
      </div>

      {/* Sections Wrapper */}
      <div className="sections-wrapper">
        {sections.map((section, index) => (
          <div key={index} className="section-container">
            {/* Full width heading row */}
            <div className="heading-row">
              <h2 className="section-heading">{section.heading}</h2>
            </div>
            
            {/* Separate image grid row */}
            <div className="image-grid-row">
              <div className="image-grid">
                {/* Left Column - two stacked images */}
                <div className="left-images">
                  <div className="image-item">
                    <img src={section.col8.row1.image} alt={section.col8.row1.alt} 
                     onClick={() => handleServiceNavigation(section.col8.row1.targetId)}/>
                    <div className="image-overlay">
                      <p 
                       onClick={() => handleServiceNavigation(section.col8.row1.targetId)}>{section.col8.row1.text}</p>
                      <button 
                        className="arrow-button"
                        onClick={() => handleServiceNavigation(section.col8.row1.targetId)}
                        aria-label={`Navigate to ${section.col8.row1.text}`}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="image-item">
                    <img src={section.col8.row2.image} alt={section.col8.row2.alt} 
                      onClick={() => handleServiceNavigation(section.col8.row2.targetId)}
                    />
                    <div className="image-overlay">
                      <p
                      onClick={() => handleServiceNavigation(section.col8.row2.targetId)}>{section.col8.row2.text}</p>
                      <button 
                      onClick={() => handleServiceNavigation(section.col8.row2.targetId)}
                        className="arrow-button"
                        aria-label={`Navigate to ${section.col8.row2.text}`}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - single image */}
                <div className="right-image">
                  <div className="image-item">
                    <img src={section.col4.image} alt={section.col4.alt} 
                    onClick={() => handleServiceNavigation(section.col4.targetId)}/>
                    <div className="image-overlay">
                      <p
                        onClick={() => handleServiceNavigation(section.col4.targetId)}
                      >{section.col4.text}</p>
                      <button 
                        className="arrow-button"
                        onClick={() => handleServiceNavigation(section.col4.targetId)}
                        aria-label={`Navigate to ${section.col4.text}`}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;