import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import AboutUSEn from "../website/Screens/AboutUs/translation.en.json";
import HomeCardSectionEn from "../website/components/Home/CardSection/translation.en.json";
import ContactUsEn from "../website/Screens/ContactUs/translation.en.json";
import ProductsEn from "../website/Screens/Products/ProductList/translation.en.json";
// import ProductDetailsEn from "../website/Screens/Products/ProductDetails/translation.en.json";
// import ProjectsDetailsEn from "../website/Screens/Projects/ProjectsDetails/translation.en.json";
// import ProjectsListEn from "../website/Screens/Projects/ProjectsList/translation.en.json";

import AboutUSDe from "../website/Screens/AboutUs/translation.de.json";
import ContactUsDe from "../website/Screens/ContactUs/translation.de.json";
import HomeCardSectionDe from "../website/components/Home/CardSection/translation.de.json";
import ProductsDe from "../website/Screens/Products/ProductList/translation.de.json";

import AboutUSIt from "../website/Screens/AboutUs/translation.it.json";
import ContactUsIt from "../website/Screens/ContactUs/translation.it.json";

import AboutUSEs from "../website/Screens/AboutUs/translation.es.json";
import ContactUsEs from "../website/Screens/ContactUs/translation.es.json";

import AboutUSFr from "../website/Screens/AboutUs/translation.fr.json";
import ContactUsFr from "../website/Screens/ContactUs/translation.fr.json";

const savedLanguage = localStorage.getItem("selected_language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      about: AboutUSEn,
      contact: ContactUsEn,
      card: HomeCardSectionEn,
      // productDetails: ProductDetailsEn,
      products: ProductsEn,
      // projectDetails: ProjectsDetailsEn,
      // projectsList: ProjectsListEn,
    },

    de: {
      about: AboutUSDe,
      contact: ContactUsDe,
      card: HomeCardSectionDe,
      products: ProductsDe,
    },

    it: {
      about: AboutUSIt,
      contact: ContactUsIt,
      card: HomeCardSectionEn,
      // productDetails: ProductDetailsEn,
      products: ProductsEn,
      // projectDetails: ProjectsDetailsEn,
      // projectsList: ProjectsListEn,
    },

    es: {
      about: AboutUSEs,
      contact: ContactUsEs,
      card: HomeCardSectionEn,
      // productDetails: ProductDetailsEn,
      products: ProductsEn,
      // projectDetails: ProjectsDetailsEn,
      // projectsList: ProjectsListEn,
    },

    fr: {
      about: AboutUSFr,
      contact: ContactUsFr,
      card: HomeCardSectionEn,
      // productDetails: ProductDetailsEn,
      products: ProductsEn,
      // projectDetails: ProjectsDetailsEn,
      // projectsList: ProjectsListEn,
    },
  },
  lng: savedLanguage,
  fallbackLng: "en", // If a translation is missing, fallback to English
  interpolation: {
    escapeValue: false, // Allows HTML tags like <b>, <i>, <br />
  },
});

export default i18n;
