import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./admin/Components/Pages/Login/Login";
import AdminRoutes from "./Routes/AdminRoutes";
import WebsiteRoutes from "./Routes/WebsiteRoutes";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />

          {/* Website Routes (default) */}
          <Route path="/*" element={<WebsiteRoutes />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
