import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
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
import AddProject from "./Components/Pages/Projects/AddProjetcs";
import EditProjectScreen from "./Components/Pages/Projects/EditProject";
import AddProduct from "./Components/Pages/Products/AddProduct";
import { AuthProvider, useAuth } from "./AuthContext";

function App() {
  const Layout = ({ children }) => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    if (isLoginPage) {
      return children;
    }

    return (
      <div className="d-flex" style={{ backgroundColor: "#011140" }}>
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
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Login Route */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected Routes */}
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/categories/products" element={<PrivateRoute><ProductCategory /></PrivateRoute>} />
            <Route path="/categories/projects" element={<PrivateRoute><ProjectCategory /></PrivateRoute>} />
            <Route path="/products" element={<PrivateRoute><Product /></PrivateRoute>} />
            <Route path="/projects" element={<PrivateRoute><Project /></PrivateRoute>} />
            <Route path="/projects/addprojects" element={<PrivateRoute><AddProject /></PrivateRoute>} />
            <Route path="/projects/editprojects" element={<PrivateRoute><EditProjectScreen /></PrivateRoute>} />
            <Route path="/products/EditProduct" element={<PrivateRoute><EditProductScreen /></PrivateRoute>} />
            <Route path="/products/AddProduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

// Protected Route that checks for authentication
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  // If user is authenticated, render the children (protected pages)
  // If not, redirect to the login page
  return user ? children : <Navigate to="/login" />;
};

export default App;
