// App.js
import React from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-grow-1">
        {/* Top Navbar */}
        <TopNavbar />
        {/* Main Content */}
        <MainContent />
      </div>
    </div>
  );
}

export default App;
