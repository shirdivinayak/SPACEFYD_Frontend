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

  const { t } = useTranslation("");
  const sections = [
    {
      heading: "Smart Home Integration",
      col8: {
        row1: {
          image: image1, // Directly use the imported image
          alt: "Automated lighting and climate control",
          text: "Automated lighting and climate control",
        },
        row2: {
          image: image2, // Directly use the imported image
          alt: "Home theaters and VR gaming setups",
          text: "Home theaters and VR gaming setups",
        },
      },
      col4: {
        image: image3, // Directly use the imported image
        alt: "Voice-activated curtains and wardrobes",
        text: "Voice-activated curtains and wardrobes",
      },
    },
    {
      heading: "Interior Fit-Out & Design",
      col8: {
        row1: {
          image: image4, // Directly use the imported image
          alt: "Climate-adaptive HVAC systems",
          text: "Climate-adaptive HVAC systems",
        },
        row2: {
          image: image5, // Directly use the imported image
          alt: "Bespoke modular kitchens and custom furniture",
          text: "Bespoke modular kitchens and custom furniture",
        },
      },
      col4: {
        image: image6, // Directly use the imported image
        alt: "Turkey interior soultions",
        text: "Turkey interior soultions",
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
