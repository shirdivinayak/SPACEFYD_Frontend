import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Login from "./Components/Pages/Login/Login";
import Sidebar from "./Components/common/Sidebar";
import TopNavbar from "./Components/common/Topnavbar";
import Home from "./Components/Pages/Home/MainContent";
import Product from "./Components/Pages/Products/Products";
import Project from "./Components/Pages/Projects/Project";
import ProductCategory from "./Components/Pages/Category/ProductCategory/ProductCategory";

function App() {
  // A wrapper to exclude certain components for specific routes
  const Layout = ({ children }) => {
    const location = useLocation();

    // Exclude Sidebar and TopNavbar for the login page
    const isLoginPage = location.pathname === "/login";

    return (
      <div className="d-flex">
        {!isLoginPage && <Sidebar />}
        <div
          className="flex-grow-1"
          style={{ backgroundColor: "#F5F5F5", padding: "0" }}
        >
          {!isLoginPage && <TopNavbar />}
          {children}
        </div>
      </div>
    );
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/categories/products" element={<ProductCategory />} />
          <Route path="/products" element={<Product />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
