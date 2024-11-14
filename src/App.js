import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./Components/common/Sidebar";
import TopNavbar from "./Components/common/Topnavbar";
import Home from "./Components/Pages/Home/MainContent";
import Categories from "./Components/Pages/Category/ProjectCategory/ProjectCategory";
import Product from "./Components/Pages/Products/Products";
import Project from "./Components/Pages/Projects/Project";


function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1"style={{ backgroundColor: "#F5F5F5", padding: "0"}}>
          <TopNavbar /> 
          <div >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories/products" element={<Categories />} />
              <Route path="/products" element={<Product />} />
              <Route path="/projects" element={<Project />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;