import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://068f-1-7-243-159.ngrok-free.app", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
