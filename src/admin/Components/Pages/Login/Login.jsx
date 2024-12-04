import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../../Assets/Images/LoginImage.png";
import LoginSide from "../../../Assets/Images/LoginSide.png";
import RightCorner from "../../../Assets/Images/cornerright.png";
import theme from "../../../Assets/colors/styles";
import { useAuth } from "../../../../AuthContext";




function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!credentials.email || !credentials.password) {
      setErrorMessage("Please fill in both email and password.");
      return;
    }

    // Mock login logic
    if (credentials.email === "admin@123.com" && credentials.password === "123@abc") {
      const mockToken = "mock-token";
      login(mockToken); // Update context
      navigate("/");
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%", flexDirection: "row" }}>
      {/* Left Half */}
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${LoginSide})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right Half */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "50px",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ position: "absolute", top: "5%" }}>
          <img src={LoginImage} alt="Logo" style={{ width: "250px", height: "auto" }} />
        </div>
        <h2 style={{ color: "#B6985A", fontWeight: "bold", marginBottom: 20, paddingLeft: 20 }}>
          Login to Your <br /> Account
        </h2>
        <div style={{ maxWidth: "400px", padding: "20px", backgroundColor: "#fff" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
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
            <div style={{ marginBottom: "15px", position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
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
                <i className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`} />
              </span>
            </div>
            {errorMessage && <div style={{ color: "red", marginBottom: "15px" }}>{errorMessage}</div>}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                backgroundColor: theme.colors.buttonPrimary,
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

      <div
          style={{
            position: "absolute",
            bottom: "0px", // Adjust to your liking
            right: "0px", // Adjust to your liking
          }}
        >
          <img src={RightCorner} style={{ width: "350px", height: "auto" }} />
        </div>
    </div>
  );
}

export default Login;
