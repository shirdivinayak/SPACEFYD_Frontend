import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import AboutUSEn from "../website/Screens/AboutUs/translation.en.json";
// import HomePageEn from "../website/Screens/Home/translation.en.json";
// import ContactUsEn from "../website/Screens/ContactUs/translation.en.json";
// import ProductDetailsEn from "../website/Screens/Products/ProductDetails/translation.en.json";
// import ProductsEn from "../website/Screens/Products/Products/translation.en.json";
// import ProjectsDetailsEn from "../website/Screens/Projects/ProjectsDetails/translation.en.json";
// import ProjectsListEn from "../website/Screens/Projects/ProjectsList/translation.en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      // home: HomePageEn,
      about: AboutUSEn,
      // contact: ContactUsEn,
      // productDetails: ProductDetailsEn,
      // products: ProductsEn,
      // projectDetails: ProjectsDetailsEn,
      // projectsList: ProjectsListEn,
    },
    fr: {},
  },
  lng: "en", // Default language
  fallbackLng: "en", // If a translation is missing, fallback to English
  interpolation: {
    escapeValue: false, // Allows HTML tags like <b>, <i>, <br />
  },
});

export default i18n;
