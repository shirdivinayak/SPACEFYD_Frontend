import React from "react";
import CarouselComponent from "../../components/Home/Carousel/CarouselComponent";
import Footer from "../../components/Home/Footer/Footer";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import HomeNavbar from "../../components/Home/Navbar/HomeNavbar";
import Sections from "../../components/Home/Sections/Sections";
// Import images
import image1 from "../../Assets/Home/Sections/image1.png";
import image2 from "../../Assets/Home/Sections/image2.png";
import image3 from "../../Assets/Home/Sections/image3.png";
import image4 from "../../Assets/Home/Sections/image4.png";
import image5 from "../../Assets/Home/Sections/image5.png";
import image6 from "../../Assets/Home/Sections/image6.png";
import ContentSection from "../../components/Home/Content/ContentSection";
import Products from "../../components/Home/Products/Products"
import CardSection from "../../components/CardSection/CardSection";

function App() {
  const backgroundImage = "https://via.placeholder.com/1920x1080"; // Replace with your background image URL

  const sections = [
    {
      heading: "Smart Home Integration",
      col8: {
        row1: {
          image: image1, // Use the imported image
          alt: "Image 1",
        },
        row2: {
          image: image2, // Use the imported image
          alt: "Image 2",
        },
      },
      col4: {
        image: image3, // Use the imported image
        alt: "Image 3",
      },
    },
    {
      heading: "Interior Fit-Out & Design",
      col8: {
        row1: {
          image: image4, // Use the imported image
          alt: "Image 4",
        },
        row2: {
          image: image5, // Use the imported image
          alt: "Image 5",
        },
      },
      col4: {
        image: image6, // Use the imported image
        alt: "Image 6",
      },
    },
  ];

  return (
    <>
      <HomeNavbar />
      <HeroSection />
      <CarouselComponent />
      <Products />
      <CardSection />
      <Sections backgroundImage={backgroundImage} sections={sections} />
      <ContentSection />
      <Footer />
    </>
  );
}

export default App;
