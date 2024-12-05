import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home/MainContent";
import Product from "../Components/Pages/Products/Products";
import Project from "../Components/Pages/Projects/Project";
import Brands from "../Components/Pages/brands/brands";
import ProductCategory from "../Components/Pages/Category/ProductCategory/ProductCategory";
import ProjectCategory from "../Components/Pages/Category/ProjectCategory/ProjectCategory";
import EditProductScreen from "../Components/Pages/Products/Editproduct";
import AddProject from "../Components/Pages/Projects/AddProjetcs";
import AddBrand from "../Components/Pages/brands/AddBrands";
import EditProjectScreen from "../Components/Pages/Projects/EditProject";

import AddProduct from "../Components/Pages/Products/AddProduct";
import { PrivateRoute } from "./PrivateRoute";

const AdminRoutes = () => {
  return (
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
  );
};

export default AdminRoutes;
