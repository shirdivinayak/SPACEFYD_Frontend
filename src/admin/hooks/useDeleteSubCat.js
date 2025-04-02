import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useFetchCategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deleteProducts = async (categoryIds) => {
    try {
      setError(null);
      const idsToDelete = Array.isArray(categoryIds) ? categoryIds : [categoryIds];
      await axiosInstance.post("/deleteSubCategory", { id: idsToDelete });
    } catch (error) {
      setError(error.response?.data?.message || "Failed to delete category(ies).");
    }
  };

  return { 
 
    loading, 
    error, 
    deleteProducts, 
  };
};

export default useFetchCategories;