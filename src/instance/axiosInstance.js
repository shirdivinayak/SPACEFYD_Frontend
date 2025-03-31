import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://spacifyd-510525585890.us-central1.run.app", // Replace with your API base URL
  // baseURL: " https://9b1a-111-92-86-108.ngrok-free.app", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
