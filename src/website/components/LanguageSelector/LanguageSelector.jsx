import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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

const LanguageSelector = () => {
  const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("selected_language") || "en"
  );

  // Find the selected language object
  const selectedLanguage = languages.find((lang) => lang.code === selectedLang);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode); // Change i18n language
    localStorage.setItem("selected_language", langCode); // Save selection
    setSelectedLang(langCode); // Update state
  };

  return (
    <div className="language-selector">
      <button className="selected-lang">
        <img
          src={selectedLanguage?.flag}
          alt={selectedLanguage?.name}
          className="flag-icon"
        />
        <FaAngleDown size={20} color="white" />
      </button>
      <ul className="dropdown">
        {languages.map((lang) => (
          <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
            <img src={lang.flag} alt={lang.name} className="flag-icon" />
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
