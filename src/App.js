import React from "react";
import "./i18n/i18n";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRoutes from "./Routes/AdminRoutes";
import WebsiteRoutes from "./Routes/WebsiteRoutes";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Admin Routes (with login check inside) */}
          <Route path="/admin/*" element={<AdminRoutes />} />

          {/* Website Routes (default) */}
          <Route path="/*" element={<WebsiteRoutes />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
