import { useState, useEffect } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useFetchProducts = (apiUrl) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.post("/displayProject"); // Adjust endpoint as needed
        setProducts(response.data || []); // Safset categories
        console.log(response.data)

      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch categories."); // Fix reference here
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
