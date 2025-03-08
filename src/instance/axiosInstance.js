import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://3ad5-103-203-73-139.ngrok-free.app", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
