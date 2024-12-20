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
import ProjectCategory from "./Components/Pages/Category/ProjectCategory/ProjectCategory";
import EditProductScreen from "./Components/Pages/Products/Editproduct";

function App() {
  const Layout = ({ children }) => {
    const location = useLocation();

    // Exclude Sidebar and TopNavbar for the login page
    const isLoginPage = location.pathname === "/login";

    if (isLoginPage) {
      return children;
    }

    return (
      <div className="d-flex">
        <Sidebar />
        <div
          className="flex-grow-1"
          style={{ backgroundColor: "#F5F5F5", padding: "0" }}
        >
          <TopNavbar />
          {children}
        </div>
      </div>
    );
  };

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login />} />
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/categories/products" element={<ProductCategory />} />
          <Route path="/categories/projects" element={<ProjectCategory />} />
          <Route path="/products" element={<Product />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/EditProduct" element={<EditProductScreen />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
