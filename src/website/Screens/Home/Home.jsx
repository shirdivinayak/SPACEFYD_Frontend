import CarouselComponent from "../../components/Home/Carousel/CarouselComponent";
import Footer from "../../components/Home/Footer/Footer";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import HomeNavbar from "../../components/Home/Navbar/HomeNavbar";


function Home() {
  const backgroundImage = "https://via.placeholder.com/1920x1080"; // Replace with your background image URL

  const sections = [
    {
      heading: "Section 1",
      col8: {
        row1: {
          image: "https://via.placeholder.com/800x400", // Replace with your image URL
          alt: "Image 1",
        },
        row2: {
          image: "https://via.placeholder.com/800x400", // Replace with your image URL
          alt: "Image 2",
        },
      },
      col4: {
        image: "https://via.placeholder.com/400x800", // Replace with your image URL
        alt: "Image 3",
      },
    },
    {
      heading: "Section 2",
      col8: {
        row1: {
          image: "https://via.placeholder.com/800x400", // Replace with your image URL
          alt: "Image 4",
        },
        row2: {
          image: "https://via.placeholder.com/800x400", // Replace with your image URL
          alt: "Image 5",
        },
      },
      col4: {
        image: "https://via.placeholder.com/400x800", // Replace with your image URL
        alt: "Image 6",
      },
    },
  ];
  return (
    <>
      <HomeNavbar />
      <HeroSection />
      <CarouselComponent />
      <Footer />
    </>
  );
}

export default Home;
