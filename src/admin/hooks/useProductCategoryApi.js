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

  const editCategory = async (updatedItem) => {
    try {
      console.log(updatedItem)
      setLoading(true);
      setError(null);
      const response = await axiosInstance.post("/editCategory", {
        type: 'project',
        id: updatedItem.id,
        name: updatedItem.category,
      });
      setMessage("Category updated successfully.");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to update category.");
    } finally {
      setLoading(false);
    }
  };
  const fetchProjectCategories = async () => {
    console.log("event called")
    try {
      setLoading(true);
      const response = await axiosInstance.post("/displayCategory", {
        type: "product", // Added type in the request body
      });
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch categories.");
      return { data: [] };
    } finally {
      setLoading(false);
    }
  };
  const deleteCategory = async (categoryIds) => {
    try {
      setLoading(true);
      setError(null);
  
      // Ensure categoryIds is always an array
      const idsToDelete = Array.isArray(categoryIds) ? categoryIds : [categoryIds];
  
      await axiosInstance.post("/deleteCategory", { id: idsToDelete,   type: "project" });
  
      setCategories((prevItems) =>
        prevItems.filter((item) => !idsToDelete.includes(item.id))
      );
  
      setMessage("Category(ies) deleted successfully.");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to delete category(ies).");
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
    editCategory, // Added editCategory function
    fetchProjectCategories,
    setMessage,
    deleteCategory,
    setError,
  };
};

export default useProjectCategoryApi;
