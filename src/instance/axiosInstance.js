import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://70d9-111-92-81-154.ngrok-free.app", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
