import { useState } from "react";
import axiosInstance from "../../instance/axiosInstance"; // Ensure the path is correct

const useProjectCategoryApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);

  const addCategory = async (categoryData) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/addCategory", categoryData);
      const newCategory = response.data;
      setCategories((prev) => [...prev, newCategory]);
      setMessage(`Category ${categoryData.name} added successfully.`);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to add category.");
    } finally {
      setLoading(false);
    }
  };
  const fetchProjectCategories = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/displayCategory", {
        type: "project", // Added type in the request body
      });
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch categories.");
      return { data: [] };
    } finally {
      setLoading(false);
    }
  };
  
  

  return {
    loading,
    error,
    message,
    categories,
    addCategory,
    fetchProjectCategories,
    setMessage,
    setError,
  };
};

export default useProjectCategoryApi;
