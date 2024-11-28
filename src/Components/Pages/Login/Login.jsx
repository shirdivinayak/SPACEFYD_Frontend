import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa"; // Import eye icons for show/hide password
import { Link } from "react-router-dom"; // Import Link for routing
import LoginImage from "../../../Assets/Images/LoginImage.png";
import LoginSide from "../../../Assets/Images/LoginSide.jpeg";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Credentials:", credentials);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Left Half with the image */}
      <div
        style={{
          width: "50%", // Ensure the left side takes exactly half of the width
          backgroundImage: `url(${LoginSide})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right Half with logo and login form */}
      <div
        style={{
          width: "50%", // Ensure the right side takes exactly half of the width
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Vertically centered
          padding: "0 10%", // Horizontal padding for centering the content
          backgroundColor: "#ffffff",
          paddingBottom: "180px",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: "20px", paddingBottom: "100px" }}>
          <img
            src={LoginImage}
            alt="Logo"
            style={{ width: "200px", height: "auto" }} // Larger logo
          />
        </div>

        {/* Title */}
        <div
          style={{
            marginBottom: "20px",
            textAlign: "left",
            color: "#B6985A",
          }}
        >
          <h2>
            Login to Your
            <br /> Account
          </h2>
        </div>

        {/* Login Form */}
        <div
        // style={{
        //   width: "100%",
        //   maxWidth: "400px",
        //   padding: "20px",
        //   border: "1px solid #ddd",
        //   borderRadius: "8px",
        //   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        //   backgroundColor: "#fff",
        // }}
        >
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
                required
              />
            </div>

            {/* Password Input with Show/Hide Icon */}
            <div style={{ marginBottom: "15px", position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
                required
              />
              {/* Eye Icon for Toggle */}
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#888",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Forgot Password Link */}
            <div style={{ textAlign: "left", marginBottom: "15px" }}>
              <Link
                to="/reset-password"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                display: "flex",
                justifyContent: "space-between", // Ensure arrow aligns to the right
                alignItems: "center",
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "#011140",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <span>Login</span>
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
