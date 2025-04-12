import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://spacifyd-510525585890.us-central1.run.app", 
  // baseURL: "https://9dd2-111-92-86-108.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
