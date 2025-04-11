import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import AboutUSEn from "../website/Screens/AboutUs/translation.en.json";
import ContactUsEn from "../website/Screens/ContactUs/translation.en.json";
import ProductDetailsEn from "../website/Screens/Products/ProductDetails/translation.en.json";
import ProductsEn from "../website/Screens/Products/ProductList/translation.en.json";
import ProjectsDetailsEn from "../website/Screens/Projects/ProjectsDetail/translation.en.json";
// import ProjectsListEn from "../website/Screens/Projects/ProjectsList/translation.en.json";
import ServicesEn from "../website/Screens/Services/translation.en.json";
import HomeCardSectionEn from "../website/components/Home/CardSection/translation.en.json";

import AboutUSDe from "../website/Screens/AboutUs/translation.de.json";
import ContactUsDe from "../website/Screens/ContactUs/translation.de.json";
import ProductDetailsDe from "../website/Screens/Products/ProductDetails/translation.de.json";
import ProductsDe from "../website/Screens/Products/ProductList/translation.de.json";
import ProjectsDetailsDe from "../website/Screens/Projects/ProjectsDetail/translation.de.json";
import ServicesDe from "../website/Screens/Services/translation.de.json";
import HomeCardSectionDe from "../website/components/Home/CardSection/translation.de.json";

import AboutUSIt from "../website/Screens/AboutUs/translation.it.json";
import ContactUsIt from "../website/Screens/ContactUs/translation.it.json";
import ProductDetailsIt from "../website/Screens/Products/ProductDetails/translation.it.json";
import ProductsIt from "../website/Screens/Products/ProductList/translation.en.json";
import ProjectsDetailsIt from "../website/Screens/Projects/ProjectsDetail/translation.it.json";
import ServicesIt from "../website/Screens/Services/translation.it.json";
import HomeCardSectionIt from "../website/components/Home/CardSection/translation.it.json";

import AboutUSEs from "../website/Screens/AboutUs/translation.es.json";
import ContactUsEs from "../website/Screens/ContactUs/translation.es.json";
import ProductDetailsEs from "../website/Screens/Products/ProductDetails/translation.es.json";
import ProductsEs from "../website/Screens/Products/ProductList/translation.en.json";
import ProjectsDetailsEs from "../website/Screens/Projects/ProjectsDetail/translation.es.json";
import ServicesEs from "../website/Screens/Services/translation.es.json";
import HomeCardSectionEs from "../website/components/Home/CardSection/translation.es.json";

import AboutUSFr from "../website/Screens/AboutUs/translation.fr.json";
import ContactUsFr from "../website/Screens/ContactUs/translation.fr.json";
import ProductDetailsFr from "../website/Screens/Products/ProductDetails/translation.fr.json";
import ProductsFr from "../website/Screens/Products/ProductList/translation.en.json";
import ProjectsDetailsFr from "../website/Screens/Projects/ProjectsDetail/translation.fr.json";
import ServicesFr from "../website/Screens/Services/translation.fr.json";
import HomeCardSectionFr from "../website/components/Home/CardSection/translation.fr.json";

const savedLanguage = localStorage.getItem("selected_language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      about: AboutUSEn,
      contact: ContactUsEn,
      productdetails: ProductDetailsEn,
      products: ProductsEn,
      projectDetails: ProjectsDetailsEn,
      // projectsList: ProjectsListEn,
      services: ServicesEn,
      card: HomeCardSectionEn,
    },

    de: {
      about: AboutUSDe,
      contact: ContactUsDe,
      productdetails: ProductDetailsDe,
      products: ProductsDe,
      projectDetails: ProjectsDetailsDe,
      services: ServicesDe,

      card: HomeCardSectionDe,
    },

    it: {
      about: AboutUSIt,
      contact: ContactUsIt,
      productdetails: ProductDetailsIt,
      products: ProductsIt,
      projectDetails: ProjectsDetailsIt,
      services: ServicesIt,
      // card: HomeCardSectionIt,

      // projectsList: ProjectsListEn,
    },

    es: {
      about: AboutUSEs,
      contact: ContactUsEs,
      productdetails: ProductDetailsEs,
      products: ProductsEs,
      projectDetails: ProjectsDetailsEs,
      services: ServicesEs,

      card: HomeCardSectionEn,
      // projectsList: ProjectsListEn,
    },

    fr: {
      about: AboutUSFr,
      contact: ContactUsFr,
      card: HomeCardSectionEn,
      productdetails: ProductDetailsFr,
      products: ProductsFr,
      projectDetails: ProjectsDetailsFr,
      services: ServicesFr,

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
