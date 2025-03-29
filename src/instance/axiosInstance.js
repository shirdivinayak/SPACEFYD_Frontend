import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://spacifyd-510525585890.us-central1.run.app", // Replace with your API base URL
  baseURL: "https://4b76-103-149-159-1.ngrok-free.app", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
