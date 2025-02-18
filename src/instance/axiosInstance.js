import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://6b5c-103-203-73-232.ngrok-free.app", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
