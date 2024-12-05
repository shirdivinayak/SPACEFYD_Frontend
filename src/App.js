import { React } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
import Sidebar from "./Components/common/Sidebar";
import TopNavbar from "./Components/common/Topnavbar";
import AdminRoutes from "./Routes/AdminRoutes";
import { AuthProvider } from "./AuthContext";

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
            <Route path="/*" element={<AdminRoutes />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
