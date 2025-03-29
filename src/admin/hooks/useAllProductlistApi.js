import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useFetchproducts = () => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch products
  const fetchproducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/displayProduct");
      setproducts(response.data.data || []);
      console.log(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchproducts();
  }, [fetchproducts]);

  return { products, loading, error, refetch: fetchproducts };
};

export default useFetchproducts;
