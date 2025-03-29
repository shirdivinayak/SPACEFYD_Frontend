import { useState } from "react";
import axiosInstance from "../../instance/axiosInstance"; // Ensure the path is correct

const useBrandCategoryApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBrandCategories = async () => {
    console.log("event called")
    try {
      setLoading(true);
      const response = await axiosInstance.post("/displayBrand");
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
    fetchBrandCategories,
    setError,
  };
};

export default useBrandCategoryApi;
