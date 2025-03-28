import { useState, useEffect } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useCategoryApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/displayCategory", {
        type: "product", // Added type in the request body
      });      // Assuming response.data contains the categories in response.data.data
      setCategories(response.data.data || []); // Store categories in state
      console.log(response.data.data)
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch categories.");
    } finally {
      setLoading(false);
    }
  };
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



  const addSubCategory = async (subCategoryData) => {
    try {
      setLoading(true);
      await axiosInstance.post("/subcategories", subCategoryData);
      setMessage(`Subcategory ${subCategoryData.name} added successfully.`);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to add subcategory.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories(); // Fetch categories when the component mounts
  }, []);

  return {
    loading,
    error,
    message,
    categories,
    addCategory,
    addSubCategory,
    setMessage,
    setError,
  };
};

export default useCategoryApi;
