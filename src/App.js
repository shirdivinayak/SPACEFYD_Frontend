import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./Components/common/Sidebar";
import TopNavbar from "./Components/common/Topnavbar";
<<<<<<< HEAD
import Home from "./Components/Pages/Home/MainContent";
import Categories from "./Components/Pages/Category/ProjectCategory/ProjectCategory";
import Product from "./Components/Pages/Products/Products";
import Project from "./Components/Pages/Projects/Project";
=======
import Home from "./Components/Pages/MainContent";
import Categories from "./Components/Pages/Category/ProjectCategory/ProjectCategory";
import ProductTable from "./Components/Pages/Products/Products";
import ProjectTable from "./Components/Pages/Projects/Project";
>>>>>>> ab8b85bc1554dbb9eb706d0507dc490e5db36073


function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
<<<<<<< HEAD
        <div className="flex-grow-1"style={{ backgroundColor: "#F5F5F5", padding: "0"}}>
          <TopNavbar /> 
          <div >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products" element={<Product />} />
              <Route path="/projects" element={<Project />} />
=======
        <div className="flex-grow-1">
          <TopNavbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products" element={<ProductTable />} />
              <Route path="/projects" element={<ProjectTable />} />
>>>>>>> ab8b85bc1554dbb9eb706d0507dc490e5db36073
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;