import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../Assets/AboutUs/hero.svg";
import Email from "../../Assets/ContactUs/Emai.svg";
import Location from "../../Assets/ContactUs/Location.svg";
import Phone from "../../Assets/ContactUs/Phone.svg";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    // if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="services-container"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="container px-4">
          <h1 className="service-title">Contact Us</h1>
        </div>
      </div>

      <div className="text-center">
        <h2 className="contact-heading">Get In Touch With Us</h2>
        <p className="contact-description">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
          <br /> An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="container contact-container">
        <div className="row">
          {/* Left Side - Contact Info */}
          <div className="col-md-5 contact-info">
            <div className="contact-item">
              <img src={Location} alt="Location" className="contact-icon" height={23} width={23}/>
              <div className="contact-text">
                <h1>Address</h1>
                <p>
                  236 5th SE Avenue, New
                  <br />
                  York NY10000, United
                  <br /> States
                </p>
              </div>
            </div>

            <div className="contact-item">
              <img src={Phone} alt="Phone" className="contact-icon-phone" height={20} width={20}/>
              <div className="contact-text">
                <h1>Phone</h1>
                <p>Mobile: +(84) 546-678990</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="contact-item">
              <img src={Email} alt="Email" className="contact-icon-email" height={20} width={20} />
              <div className="contact-text">
                <h1>Email</h1>
                <p>hasghgds@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-md-7">
            <form onSubmit={handleSubmit} className="contact-form">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Abc"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}

              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Abc@def.com"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}

              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
              />
              {errors.subject && (
                <span className="error-text">{errors.subject}</span>
              )}

              <label>Message</label>
              <textarea
                name="message"
                placeholder="Hi i'd like to ask about"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
              ></textarea>
              {errors.message && (
                <span className="error-text">{errors.message}</span>
              )}

              <button type="submit" className="btn btn-primary mt-3 submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
