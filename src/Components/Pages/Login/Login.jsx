import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for routing
import LoginImage from "../../../Assets/Images/LoginImage.png";
import LoginSide from "../../../Assets/Images/LoginSide.png";
import theme from "../../../Assets/colors/styles";

function Login() {
  const navigate = useNavigate(); // For navigation after login
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors

    if (!credentials.email || !credentials.password) {
      setErrorMessage("Please fill in both email and password.");
      return;
    }

  //   try {
  //     const response = await axios.post("/api/login", credentials); // Replace with your API endpoint
  //     if (response.data.success) {
  //       // Store the token in local storage
  //       localStorage.setItem("token", response.data.token);

  //       // Redirect to the home page
  //       navigate("/");
  //     } else {
  //       setErrorMessage(response.data.message || "Invalid login credentials.");
  //     }
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //     setErrorMessage("An error occurred. Please try again.");
  //   }
  // };

   // Simulate a successful login
   if (
    credentials.email === "admin@123.com" &&
    credentials.password === "123456"
  ) {
    // Simulate token storage
    localStorage.setItem("token", "mock-token");

    // Redirect to the home page
    navigate("/");
  } else {
    setErrorMessage("Invalid email or password. Please try again.");
  }
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
          backgroundImage: `url(${LoginSide})`,
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
    marginLeft: "50px",
    alignItems: "flex-start", // Use 'flex-start' to align everything to the left
    backgroundColor: "#ffffff",
  }}
>
  {/* Logo */}
  <div style={{ position: "absolute", top: "5%", textAlign: "left" }}>
    <img
      src={LoginImage}
      alt="Logo"
      style={{ width: "250px", height: "auto" }}
    />
  </div>

  <div
    style={{
      textAlign: "left",
      color: "#B6985A",
      marginRight: "200px",
    }}
  >
    <h2
      style={{
        textAlign: "left",
        color: "#B6985A",
        fontWeight:"bold",
        paddingLeft:20,
        marginBottom:20,
      }}
    >
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
      borderRadius: "8px",
      backgroundColor: "#fff",
      textAlign: "left", // Align the form contents to the left
    }}
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
          {showPassword ? (
      <i className="bi bi-eye-slash" style={{ fontSize: "16px" }}></i> // Bootstrap icon for "eye-slash"
    ) : (
      <i className="bi bi-eye" style={{ fontSize: "16px" }}></i> // Bootstrap icon for "eye"
    )}
        </span>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div
          style={{
            color: "red",
            marginBottom: "15px",
            fontSize: "14px",
            textAlign: "left",
          }}
        >
          {errorMessage}
        </div>
      )}

      {/* Forgot Password Link */}
      <div style={{ textAlign: "left", marginBottom: "15px" }}>
        <Link
         
          style={{
            textDecoration: "none",
            color: "#000000",
            fontSize: "14px",
          }}
        >
          Forgot your Password?
        </Link>
      </div>

      {/* Submit Button */}
      <button
  type="submit"
  style={{
    width: "100%",
    padding: "10px 20px", // Adjust padding to fit both text and icon
    borderRadius: "4px",
    border: "none",
    backgroundColor: theme.colors.buttonPrimary,
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center", // Align items vertically in the center
    justifyContent: "space-between", // Space out the text and the icon
    height: "48px", // You can adjust this height as needed
  }}
>
  <span>Login</span>
  <i className="bi bi-arrow-right" style={{ fontSize: "18px" }}></i> {/* Right arrow icon */}
</button>

    </form>
  </div>
</div>

    </div>
  );
}

export default Login;
