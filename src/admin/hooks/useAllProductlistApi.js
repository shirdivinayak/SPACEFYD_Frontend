import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useFetchproducts= (categoryId = null) => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastId, setLastId] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  // Function to fetch products
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      let response;
            
        if (categoryId) {
          // Use displayCategoryById endpoint when a specific category is selected
          const payload = { lastId: null, categoryId };
          response = await axiosInstance.post("/displayProductByID", payload);
        } else {
          // Use displayProject endpoint for "All Projects"
          const payload = { lastId: null };
          response = await axiosInstance.post("/displayProduct", payload);
        }
      setproducts(response.data.data || []);
      setLastId(response.data.lastFetchedId || null);
      setHasMore(response.data.data && response.data.data.length > 0);
      console.log("Initial fetch response:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  }, [categoryId]);

  const fetchMoreProducts = useCallback(async () => {
    if (!lastId || !hasMore) return;
    
    // setLoading(true);
    try {
        let response;
      
      if (categoryId) {
        // Use displayCategoryById endpoint when a specific category is selected
        const payload = { lastId, categoryId };
        response = await axiosInstance.post("/displayProductByID", payload);
      } else {
        // Use displayProject endpoint for "All Projects"
        const payload = { lastId };
        response = await axiosInstance.post("/displayProduct", payload);
      }
      
      const newProducts = response.data.data || [];
      
      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setproducts(prevProducts => [...prevProducts, ...newProducts]);
        setLastId(response.data.lastFetchedId || null);
      }
      console.log("Fetch more response:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch more products.");
    } finally {
      setLoading(false);
    }
  }, [lastId, hasMore, categoryId]);

  // Initial load
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { 
    products, 
    loading, 
    error, 
    refetch: fetchProducts, 
    fetchMoreProducts, 
    hasMore 
  };
};
export default useFetchproducts;
