import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://spacifyd-510525585890.us-central1.run.app", 
  // baseURL: "https://f5f4-103-203-73-204.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
