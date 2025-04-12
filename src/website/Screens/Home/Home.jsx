import React from "react";
import CarouselComponent from "../../components/Home/Carousel/CarouselComponent";
import Footer from "../../components/Home/Footer/Footer";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import HomeNavbar from "../../components/Home/Navbar/HomeNavbar";
import Sections from "../../components/Home/Sections/Sections";
// Import images
import image1 from "../../Assets/Home/Section/pic1.png";
import image2 from "../../Assets/Home/Section/pic2.png";
import image3 from "../../Assets/Home/Section/pic3.png";
import image4 from "../../Assets/Home/Section/pic4.png";
import image5 from "../../Assets/Home/Section/pic5.png";
import image6 from "../../Assets/Home/Section/pic6.png";
import ContentSection from "../../components/Home/Content/ContentSection";
import Products from "../../components/Home/Products/Products";
import CardSection from "../../components/Home/CardSection/CardSection";
import Partnership from "../../components/Home/Partnership/Partnership";
import { useTranslation } from "react-i18next";

function App() {
  const backgroundImage = "https://via.placeholder.com/1920x1080"; // Replace with your background image URL

  const { t } = useTranslation("home");
  const sections = [
    {
      heading: t("head"),
      col8: {
        row1: {
          image: image1, // Directly use the imported image
          alt: t("automate"),
          text: t("automate"),
        },
        row2: {
          image: image2, // Directly use the imported image
          alt: t("home"),
          text: t("home"),
        },
      },
      col4: {
        image: image3, // Directly use the imported image
        alt: t("voice"),
        text: t("voice"),
      },
    },
    {
      heading: "Interior Fit-Out & Design",
      col8: {
        row1: {
          image: image4, // Directly use the imported image
          alt: t("climate"),
          text: t("climate"),
        },
        row2: {
          image: image5, // Directly use the imported image
          alt: t("bespoke"),
          text: t("bespoke"),
        },
      },
      col4: {
        image: image6, // Directly use the imported image
        alt: t("turkey"),
        text: t("turkey"),
      },
    },
  ];

  return (
    <>
      <HomeNavbar />
      <HeroSection />
      <CarouselComponent />
      <Partnership />
      <Products />
      <CardSection />
      <Sections backgroundImage={backgroundImage} sections={sections} />
      <ContentSection />
      <Footer />
    </>
  );
}

export default App;
