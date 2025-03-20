import { useState, useEffect } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useAllProject = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
  try {
    const response = await axiosInstance.post("/displayCategory", {
      type: "project", // Added type in the request body
    });

    setCategories(response.data.data || []); // Safely set categories
  } catch (err) {
    setError(err.response?.data?.message || "Failed to fetch categories.");
  } finally {
    setLoading(false);
  }
};

    
    fetchCategories();
  }, []);

  const deleteCategory = async (categoryIds) => {
    try {
      setError(null);
  
      // Ensure categoryIds is always an array
      const idsToDelete = Array.isArray(categoryIds) ? categoryIds : [categoryIds];
  
      await axiosInstance.post("/deleteProject", { id: idsToDelete});
  
      // setMessage("Category(ies) deleted successfully.");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to delete category(ies).");
    } finally {
      setLoading(false);
    }
  };



return {
  loading,
  error,
  // message,
  categories,
  // addCategory,
  // editCategory, // Added editCategory function
  // fetchProjectCategories,
  // setMessage,
  deleteCategory,
  // setError,
};
};


export default useAllProject;
