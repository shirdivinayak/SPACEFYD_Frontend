import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import AboutUSEn from "../website/Screens/AboutUs/translation.en.json";
import ContactUsEn from "../website/Screens/ContactUs/translation.en.json";
import ProductDetailsEn from "../website/Screens/Products/ProductDetails/translation.en.json";
import ProductsEn from "../website/Screens/Products/ProductList/translation.en.json";
import ProjectsDetailsEn from "../website/Screens/Projects/ProjectsDetail/translation.en.json";
import ProjectsListEn from "../website/Screens/Projects/ProjectsList/translation.en.json";
import ServicesEn from "../website/Screens/Services/translation.en.json";
import HomeCardSectionEn from "../website/components/Home/CardSection/translation.en.json";
import HomeCarousalEn from "../website/components/Home/Carousel/translation.en.json";
import HomeContentEn from "../website/components/Home/Content/translation.en.json";
import HomeHeroSectionEn from "../website/components/Home/HeroSection/translation.en.json";
import HomePartnershipEn from "../website/components/Home/Partnership/translation.en.json";
import HomeProductsEn from "../website/components/Home/Products/translation.en.json";
import HomeSectionsEn from "../website/components/Home/Sections/translation.en.json";
import HomeEn from "../website/Screens/Home/translation.en.json";

import AboutUSDe from "../website/Screens/AboutUs/translation.de.json";
import ContactUsDe from "../website/Screens/ContactUs/translation.de.json";
import ProductDetailsDe from "../website/Screens/Products/ProductDetails/translation.de.json";
import ProductsDe from "../website/Screens/Products/ProductList/translation.de.json";
import ProjectsDetailsDe from "../website/Screens/Projects/ProjectsDetail/translation.de.json";
import ProjectsListDe from "../website/Screens/Projects/ProjectsList/translation.de.json";
import ServicesDe from "../website/Screens/Services/translation.de.json";
import HomeCardSectionDe from "../website/components/Home/CardSection/translation.de.json";
import HomeCarousalDe from "../website/components/Home/Carousel/translation.de.json";
import HomeContentDe from "../website/components/Home/Content/translation.de.json";
import HomeHeroSectionDe from "../website/components/Home/HeroSection/translation.de.json";
import HomePartnershipDe from "../website/components/Home/Partnership/translation.de.json";
import HomeProductsDe from "../website/components/Home/Products/translation.de.json";
import HomeSectionsDe from "../website/components/Home/Sections/translation.de.json";
import HomeDe from "../website/Screens/Home/translation.de.json";

import AboutUSIt from "../website/Screens/AboutUs/translation.it.json";
import ContactUsIt from "../website/Screens/ContactUs/translation.it.json";
import ProductDetailsIt from "../website/Screens/Products/ProductDetails/translation.it.json";
import ProductsIt from "../website/Screens/Products/ProductList/translation.en.json";
import ProjectsDetailsIt from "../website/Screens/Projects/ProjectsDetail/translation.it.json";
import ProjectsListIt from "../website/Screens/Projects/ProjectsList/translation.it.json";
import ServicesIt from "../website/Screens/Services/translation.it.json";
import HomeCardSectionIt from "../website/components/Home/CardSection/translation.it.json";
import HomeCarousalIt from "../website/components/Home/Carousel/translation.it.json";
import HomeContentIt from "../website/components/Home/Content/translation.it.json";
import HomeHeroSectionIt from "../website/components/Home/HeroSection/translation.it.json";
import HomePartnershipIt from "../website/components/Home/Partnership/translation.it.json";
import HomeProductsIt from "../website/components/Home/Products/translation.it.json";
import HomeSectionsIt from "../website/components/Home/Sections/translation.it.json";
import HomeIt from "../website/Screens/Home/translation.it.json";

import AboutUSEs from "../website/Screens/AboutUs/translation.es.json";
import ContactUsEs from "../website/Screens/ContactUs/translation.es.json";
import ProductDetailsEs from "../website/Screens/Products/ProductDetails/translation.es.json";
import ProductsEs from "../website/Screens/Products/ProductList/translation.en.json";
import ProjectsDetailsEs from "../website/Screens/Projects/ProjectsDetail/translation.es.json";
import ProjectsListEs from "../website/Screens/Projects/ProjectsList/translation.es.json";
import ServicesEs from "../website/Screens/Services/translation.es.json";
import HomeCardSectionEs from "../website/components/Home/CardSection/translation.es.json";
import HomeCarousalEs from "../website/components/Home/Carousel/translation.es.json";
import HomeContentEs from "../website/components/Home/Content/translation.es.json";
import HomeHeroSectionEs from "../website/components/Home/HeroSection/translation.es.json";
import HomePartnershipEs from "../website/components/Home/Partnership/translation.es.json";
import HomeProductsEs from "../website/components/Home/Products/translation.es.json";
import HomeSectionsEs from "../website/components/Home/Sections/translation.es.json";
import HomeEs from "../website/Screens/Home/translation.es.json";

import AboutUSFr from "../website/Screens/AboutUs/translation.fr.json";
import ContactUsFr from "../website/Screens/ContactUs/translation.fr.json";
import ProductDetailsFr from "../website/Screens/Products/ProductDetails/translation.fr.json";
import ProductsFr from "../website/Screens/Products/ProductList/translation.en.json";
import ProjectsDetailsFr from "../website/Screens/Projects/ProjectsDetail/translation.fr.json";
import ProjectsListFr from "../website/Screens/Projects/ProjectsList/translation.fr.json";
import ServicesFr from "../website/Screens/Services/translation.fr.json";
import HomeCardSectionFr from "../website/components/Home/CardSection/translation.fr.json";
import HomeCarousalFr from "../website/components/Home/Carousel/translation.fr.json";
import HomeContentFr from "../website/components/Home/Content/translation.fr.json";
import HomeHeroSectionFr from "../website/components/Home/HeroSection/translation.fr.json";
import HomePartnershipFr from "../website/components/Home/Partnership/translation.fr.json";
import HomeProductsFr from "../website/components/Home/Products/translation.fr.json";
import HomeSectionsFr from "../website/components/Home/Sections/translation.fr.json";
import HomeFr from "../website/Screens/Home/translation.fr.json";

const savedLanguage = localStorage.getItem("selected_language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      about: AboutUSEn,
      contact: ContactUsEn,
      productdetails: ProductDetailsEn,
      products: ProductsEn,
      projectDetails: ProjectsDetailsEn,
      projectslist: ProjectsListEn,
      services: ServicesEn,
      card: HomeCardSectionEn,
      carousel: HomeCarousalEn,
      content: HomeContentEn,
      hero: HomeHeroSectionEn,
      partnership: HomePartnershipEn,
      producthome: HomeProductsEn,
      sections: HomeSectionsEn,
      home: HomeEn,
    },

    de: {
      about: AboutUSDe,
      contact: ContactUsDe,
      productdetails: ProductDetailsDe,
      products: ProductsDe,
      projectDetails: ProjectsDetailsDe,
      projectslist: ProjectsListDe,
      services: ServicesDe,
      card: HomeCardSectionDe,
      carousel: HomeCarousalDe,
      content: HomeContentDe,
      hero: HomeHeroSectionDe,
      partnership: HomePartnershipDe,
      producthome: HomeProductsDe,
      sections: HomeSectionsDe,
      home: HomeDe,
    },

    it: {
      about: AboutUSIt,
      contact: ContactUsIt,
      productdetails: ProductDetailsIt,
      products: ProductsIt,
      projectDetails: ProjectsDetailsIt,
      projectslist: ProjectsListIt,
      services: ServicesIt,
      card: HomeCardSectionIt,
      carousel: HomeCarousalIt,
      content: HomeContentIt,
      hero: HomeHeroSectionIt,
      partnership: HomePartnershipIt,
      producthome: HomeProductsIt,
      sections: HomeSectionsIt,
      home: HomeIt,
    },

    es: {
      about: AboutUSEs,
      contact: ContactUsEs,
      productdetails: ProductDetailsEs,
      products: ProductsEs,
      projectDetails: ProjectsDetailsEs,
      projectslist: ProjectsListEs,
      services: ServicesEs,
      card: HomeCardSectionEs,
      carousel: HomeCarousalEs,
      content: HomeContentEs,
      hero: HomeHeroSectionEs,
      partnership: HomePartnershipEs,
      producthome: HomeProductsEs,
      sections: HomeSectionsEs,
      home: HomeEs,
    },

    fr: {
      about: AboutUSFr,
      contact: ContactUsFr,
      productdetails: ProductDetailsFr,
      products: ProductsFr,
      projectDetails: ProjectsDetailsFr,
      projectslist: ProjectsListFr,
      services: ServicesFr,
      card: HomeCardSectionFr,
      carousel: HomeCarousalFr,
      content: HomeContentFr,
      hero: HomeHeroSectionFr,
      partnership: HomePartnershipFr,
      producthome: HomeProductsFr,
      sections: HomeSectionsFr,
      home: HomeFr,
    },
  },
  lng: savedLanguage,
  fallbackLng: "en", // If a translation is missing, fallback to English
  interpolation: {
    escapeValue: false, // Allows HTML tags like <b>, <i>, <br />
  },
});

export default i18n;
