import React, { useState, useRef, useEffect } from "react";
// import { useTranslation } from "react-i18next";
import i18n from "../../../i18n/i18n";
import "./LanguageSelector.css";
import { FaAngleDown } from "react-icons/fa";
import English from "../../Assets/Flags/England.png";
import Germany from "../../Assets/Flags/Germany.png";
import Italy from "../../Assets/Flags/Italy.png";
import Spain from "../../Assets/Flags/Spain.png";
import France from "../../Assets/Flags/France.png";

// Language options with flags
const languages = [
  { code: "en", name: "English", flag: English },
  { code: "de", name: "Deutsch", flag: Germany },
  { code: "it", name: "Italiano", flag: Italy },
  { code: "es", name: "Español", flag: Spain },
  { code: "fr", name: "Français", flag: France },
];

const LanguageSelector = ({ mobile }) => {
  // const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("selected_language") || "en"
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Find the selected language object
  const selectedLanguage = languages.find((lang) => lang.code === selectedLang);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode); // Change i18n language
    localStorage.setItem("selected_language", langCode); // Save selection
    setSelectedLang(langCode); // Update state
    setIsOpen(false); // Close dropdown after selection
  };

  // Toggle dropdown
  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
    console.log("Dropdown toggled:", !isOpen); // Debug log
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`language-selector ${mobile ? "mobile" : ""}`}
      ref={dropdownRef}
      style={{ position: "relative" }}
    >
      <button className="selected-lang" onClick={toggleDropdown} type="button">
        <img
          src={selectedLanguage?.flag}
          alt={selectedLanguage?.name}
          className="flag-icon"
        />
        <FaAngleDown
          size={20}
          color="white"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>

      {/* Force display the dropdown for debugging */}
      <div
        className="dropdown"
        style={{
          display: isOpen ? "block" : "none",
          position: "absolute",
          top: "100%",
          left: 0,
          background: "white",
          border: "1px solid #ccc",
          borderRadius: "8px",
          width: "150px",
          zIndex: 9999,
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          padding: "5px 0",
        }}
      >
        {languages.map((lang) => (
          <div
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={lang.flag}
              alt={lang.name}
              style={{
                width: "20px",
                marginRight: "8px",
              }}
            />
            <span>{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
