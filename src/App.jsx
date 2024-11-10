import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./admin/components/common/Sidebar";
import TopNavbar from "./admin/components/common/TopNavbar";
import Home from "./admin/components/pages/MainContent";
import Categories from "./admin/components/pages/Categories"
import Products from "./admin/components/pages/Products"
import Projects from "./admin/components/pages/Projects"
import Brands from "./admin/components/pages/Brands"

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <TopNavbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products" element={<Products />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/brands" element={<Brands />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;