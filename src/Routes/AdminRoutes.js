import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../admin/Components/Pages/Home/MainContent";
import Product from "../admin/Components/Pages/Products/Products";
import Project from "../admin/Components/Pages/Projects/Project";
import Brands from "../admin/Components/Pages/brands/brands";
import ProductCategory from "../admin/Components/Pages/Category/ProductCategory/ProductCategory";
import ProjectCategory from "../admin/Components/Pages/Category/ProjectCategory/ProjectCategory";
import EditProductScreen from "../admin/Components/Pages/Products/Editproduct";
import AddProject from "../admin/Components/Pages/Projects/AddProjects";
import AddBrand from "../admin/Components/Pages/brands/AddBrands";
import EditProjectScreen from "../admin/Components/Pages/Projects/EditProject";
import AddProduct from "../admin/Components/Pages/Products/AddProduct";
import Login from "../admin/Components/Pages/Login/Login";
import { PrivateRoute } from "./PrivateRoute";
import Sidebar from "../admin/Components/common/Sidebar";
import TopNavbar from "../admin/Components/common/Topnavbar";
import { useAuth } from "../AuthContext"; // Import authentication context

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex" style={{ backgroundColor: "#4C6559" }}>
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

const AdminRoutes = () => {
  const { user } = useAuth(); // Get authentication state
  const location = useLocation();

  if (!user) {
    return <Login />;
  }

  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/categories/products" element={<PrivateRoute><ProductCategory /></PrivateRoute>} />
        <Route path="/categories/projects" element={<PrivateRoute><ProjectCategory /></PrivateRoute>} />
        <Route path="/products" element={<PrivateRoute><Product /></PrivateRoute>} />
        <Route path="/brands" element={<PrivateRoute><Brands /></PrivateRoute>} />
        <Route path="/projects" element={<PrivateRoute><Project /></PrivateRoute>} />
        <Route path="/projects/addprojects" element={<PrivateRoute><AddProject /></PrivateRoute>} />
        <Route path="/brands/addbrands" element={<PrivateRoute><AddBrand /></PrivateRoute>} />
        <Route path="/projects/editprojects" element={<PrivateRoute><EditProjectScreen /></PrivateRoute>} />
        <Route path="/products/editproduct" element={<PrivateRoute><EditProductScreen /></PrivateRoute>} />
        <Route path="/products/addproduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
