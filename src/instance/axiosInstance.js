import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://spacifyd-510525585890.us-central1.run.app", // Replace with your API base URL
  // baseURL: "https://3ad5-103-203-73-139.ngrok-free.app", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
