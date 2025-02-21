import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css"; // Import CSS file
import HeroImage from "../../Assets/AboutUs/hero.svg";
import BackgroundImage from "../../Assets/Services/backgroundimage.svg"; // Background image for main container

const Services = () => {
  return (
    <div>
      {/* Hero Section with Background */}
      <div
        className="services-container"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="container px-4">
          <h1 className="service-title">Services</h1>
          <p className="service-description">
            Seamlessly blending technology, functionality, and design to create
            intelligent, <br /> future-ready spaces tailored to your needs.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div
        className="main-container"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <h1 className="service-head">Smart Home Integration</h1>

        {/* Left and Right Content Sections */}
        <div className="content-wrapper">
          {/* Left Content */}
          <div className="content-container">
            <h2>Automated lighting and climate control</h2>
            <p>
              Smart systems optimize lighting and temperature, enhancing
              comfort, energy efficiency, and ambiance with seamless automation
              and control.
            </p>

            {/* List Items */}
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>Smart LED lighting with customizable presets</p>
            </div>
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>Motion sensor-based lighting systems</p>
            </div>
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>Centralized climate control via smart thermostats</p>
            </div>
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>Zonal temperature control systems</p>
            </div>
            <div className="sub-content-no">
              <i className="bi bi-arrow-right icon"></i>
              <p>Daylight integration and adaptive dimming</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="content-container-right">
            <h2>Home Theaters and VR Gaming Setups</h2>
            <p>
              Immersive entertainment with high-quality visuals, surround sound,
              and smart automation for a cinematic and interactive gaming
              experience.
            </p>

            {/* List Items */}
            <div className="sub-content">
              <p>4K/8K projectors and large-format displayss</p>
              <i className="bi bi-arrow-left icon"></i>
            </div>
            <div className="sub-content">
              <p>Surround sound systems with acoustic paneling</p>
              <i className="bi bi-arrow-left icon"></i>
            </div>
            <div className="sub-content">
              <p>Ambient lighting for immersive experiences</p>
              <i className="bi bi-arrow-left icon"></i>
            </div>
            <div className="sub-content">
              <p>VR-ready gaming consoles and seating arrangements</p>
              <i className="bi bi-arrow-left icon"></i>
            </div>
            <div className="sub-content">
              <p>Streaming device integration and automation</p>
              <i className="bi bi-arrow-left icon"></i>
            </div>
          </div>
          <div className="content-container">
            <h2>Voice-Activated Curtains and Wardrobes</h2>
            <p>
              Hands-free convenience with automated curtains and wardrobes,
              integrating voice commands for effortless control and enhanced
              functionality.
            </p>

            {/* List Items */}
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>Motorized curtain rails with voice integration</p>
            </div>
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>Smart wardrobe lighting with voice control</p>
            </div>
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>Automated clothing retrieval systems</p>
            </div>
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>
                Integration with Alexa, Google Assistant, and other platforms
              </p>
            </div>
            <div className="sub-content-no">
              <i className="bi bi-arrow-right icon"></i>
              <p>Customized scheduling for curtain operation</p>
            </div>
          </div>
        </div>
        <div className="border"></div>
        <h1 className="service-head">Interior Fit-Out & Design</h1>

        {/* Left and Right Content Sections */}
        <div className="content-wrapper">
          {/* Left Content */}
          <div className="content-container">
            <h2>Climate-Adaptive HVAC Systems</h2>
            <p>
            Smart HVAC adapts to environmental conditions, ensuring optimal temperature, air quality, and energy efficiency for ultimate comfort.
            </p>

            {/* List Items */}
          
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>Smart air conditioning with weather-based adjustments</p>
            </div>
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>Humidity control and air purification systems</p>
            </div>
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>Zone-based HVAC automation</p>
            </div>
            <div className="sub-content-no">
              <i className="bi bi-arrow-right icon"></i>
              <p>Integration with home automation platforms</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="content-container-right">
            <h2>Bespoke Modular Kitchens and Custom Furniture</h2>
            <p>
            Tailored kitchen and furniture solutions designed for style, functionality, and space efficiency with premium materials and smart integration.
            </p>

            {/* List Items */}
          
            <div className="sub-content">
              <p>Space-saving pull-out cabinets and hidden compartments</p>
              <i className="bi bi-arrow-left icon"></i>
            </div>
            <div className="sub-content">
              <p>Custom dining and countertop solutions</p>
              <i className="bi bi-arrow-left icon"></i>
            </div>
            <div className="sub-content">
              <p>Ergonomic furniture with adjustable features</p>
              <i className="bi bi-arrow-left icon"></i>
            </div>
            <div className="sub-content">
              <p>Sustainable materials and finishes</p>
              <i className="bi bi-arrow-left icon"></i>
            </div>
          </div>
          <div className="content-container">
            <h2>Turnkey Interior Solutions</h2>
            <p>
            End-to-end design, execution, and automation services, creating functional, stylish, and technology-integrated spaces effortlessly.
            </p>

            {/* List Items */}
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>End-to-end design and execution services</p>
            </div>
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>Space planning and 3D visualizations</p>
            </div>
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>Flooring, wall finishes, and false ceilings</p>
            </div>
            <div className="sub-content">
              <i className="bi bi-arrow-right icon"></i>
              <p>
              Lighting, furniture, and decor sourcing
              </p>
            </div>
            <div className="sub-content-no">
              <i className="bi bi-arrow-right icon"></i>
              <p>Custom storage solutions for every room</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
