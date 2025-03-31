import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n/i18n";
import "./LanguageSelector.css";

// Language options with flags
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
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
      <button className="selected-lang">{selectedLanguage?.flag} ▼</button>
      <ul className="dropdown">
        {languages.map((lang) => (
          <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
            {lang.flag} {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
