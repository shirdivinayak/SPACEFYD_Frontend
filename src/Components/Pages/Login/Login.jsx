import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons for show/hide password
import { Link } from "react-router-dom"; // Import Link for routing
import LoginImage from "../../../Assets/Images/LoginImage.png";
import LoginSide from "../../../Assets/Images/LoginSide.png";

function Login() {
  // State to manage form inputs and password visibility
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Credentials:", credentials); // Console the credentials
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        flexDirection: "row",
      }}
    >
      {/* Left Half with the image */}
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${LoginSide})`, // Correct format to include the image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right Half with logo and login form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft:"50px",
          alignItems: "left",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Logo */}
        <div style={{ position: "absolute", top: "5%", textAlign: "left" }}>
          <img
            src={LoginImage} // Replace with the correct path to your logo
            alt="Logo"
            style={{ width: "150px", height: "auto" }}
          />
        </div>

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
          style={{
            width: "80%",
            maxWidth: "400px",
            padding: "20px",
            // border: "1px solid #ddd",
            borderRadius: "8px",
            // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
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
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
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
                  top: "35px",
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
                to="/reset-password" // Redirects to the reset password page
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
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "#007BFF",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
