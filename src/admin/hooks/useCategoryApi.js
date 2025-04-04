import { useState, useEffect } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useCategoryApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchProjectCategories = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/displayCategory", {
        type: "product",
      });
      const fetchedCategories = response.data.data || []; 
      setCategories(fetchedCategories); // Update the hook's state
      return response.data; // Return the data for manual calls if needed
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch categories.");
      return { data: [] };
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
      await fetchProjectCategories(); // Refresh categories from server    
      } catch (error) {
      setError(error.response?.data?.message || "Failed to add category.");
    } finally {
      setLoading(false);
    }
  };
  const editCategory = async (categoryData) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/editCategory", categoryData);
      const newCategory = response.data;
      // setCategories((prev) => [...prev, newCategory]);
      await fetchProjectCategories(); // Refresh categories from server    
      setMessage(`Category ${categoryData.name} editted successfully.`);
      } catch (error) {
      setError(error.response?.data?.message || "Failed to add category.");
    } finally {
      setLoading(false);
    }
  };

  const addSubCategory = async (subCategoryData) => {
    try {
      setLoading(true);
      await axiosInstance.post("/addSubCategory", subCategoryData);
      setMessage(`Subcategory ${subCategoryData.name} added successfully.`);
     await fetchProjectCategories();

    } catch (error) {
      setError(error.response?.data?.message || "Failed to add subcategory.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories on mount
  useEffect(() => {
    fetchProjectCategories();
  }, []);

   const deleteCategory = async (categoryIds) => {
      try {
        setLoading(true);
        setError(null);
    
        // Ensure categoryIds is always an array
        const idsToDelete = Array.isArray(categoryIds) ? categoryIds : [categoryIds];
    
        await axiosInstance.post("/deleteCategory", { id: idsToDelete,   type: "product" });
    
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
    editCategory,
    addSubCategory,
    setMessage,
    setError,
    deleteCategory,
    fetchProjectCategories, // Export this for manual calls if needed
  };
};

export default useCategoryApi;