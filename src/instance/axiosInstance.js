import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fae7-1-7-243-159.ngrok-free.app", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
