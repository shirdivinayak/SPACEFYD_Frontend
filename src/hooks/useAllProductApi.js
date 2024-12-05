import { useState, useEffect } from "react";
import axiosInstance from "../instance/axiosInstance";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.post("/displayCategory"); // Adjust endpoint as needed
        setCategories(response.data.data || []); // Safely set categories
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch categories."); // Fix reference here
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useFetchCategories;
