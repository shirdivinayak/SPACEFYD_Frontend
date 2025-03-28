import { useState, useEffect } from "react";
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

  const fetchSubCategories = async (categoryId) => {
    if (!categoryId) {
      setSubCategories([]);
      return;
    }

    try {
      setSubcategoriesLoading(true);
      const response = await axiosInstance.post("/displaySubCategory", {
        type: "product",
        categoryId: categoryId // Pass the selected category ID
      });
      setSubCategories(response.data.data || []);
      console.log("subcategory",response.data.data)
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch subcategories.");
      setSubCategories([]);
    } finally {
      setSubcategoriesLoading(false);
    }
  };

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