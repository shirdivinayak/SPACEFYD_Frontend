import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useFetchproducts = () => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastId, setLastId] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  // Function to fetch products
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/displayProduct");
      setproducts(response.data.data || []);
      setLastId(response.data.lastFetchedId || null);
      setHasMore(response.data.data && response.data.data.length > 0);
      console.log("Initial fetch response:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMoreProducts = useCallback(async () => {
    if (!lastId || !hasMore) return;
    
    setLoading(true);
    try {
      const response = await axiosInstance.post("/displayProduct", { lastId });
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
  }, [lastId, hasMore]);

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
