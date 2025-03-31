import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subcategoriesLoading, setSubcategoriesLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.post("/displayCategory", {
          type: "product",
        });
        setCategories(response.data.data || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const fetchSubCategories = useCallback(async (categoryId) => {
        if (!categoryId) {
      setSubCategories([]);
      return;
    }

    try {
      setSubcategoriesLoading(true);
      const response = await axiosInstance.post("/displaySubCategoryById", {
        type: "product",
        id: categoryId // Pass the selected category ID
      });
      setSubCategories(response.data.data || []);
      console.log("subcategory",response.data.data)
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch subcategories.");
      setSubCategories([]);
    } finally {
      setSubcategoriesLoading(false);
    }
  }, []); // Empty dependency array to memoize the function

  const deleteProducts = async (categoryIds) => {
    try {
      setError(null);
      const idsToDelete = Array.isArray(categoryIds) ? categoryIds : [categoryIds];
      await axiosInstance.post("/deleteProduct", { id: idsToDelete });
    } catch (error) {
      setError(error.response?.data?.message || "Failed to delete category(ies).");
    }
  };

  return { 
    categories, 
    subCategories, 
    loading, 
    error, 
    deleteProducts, 
    fetchSubCategories,
    subcategoriesLoading 
  };
};

export default useFetchCategories;