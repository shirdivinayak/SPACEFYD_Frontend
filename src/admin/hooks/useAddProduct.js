import { useState } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useAddProductApi = () => {
  // State to handle the form data, loading, success, and error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Function to make the POST request to add the project
  const addProduct = async (productData) => {  // Renamed from useaddProject
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Make the API request using axios
      const response = await axiosInstance.post("/addProduct", productData);
      console.log(productData);
      // If the request is successful, handle the response
      setSuccess(response.data); // Assuming the response contains the result you need
    } catch (err) {
      // Handle errors
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const editProduct = async (productData) => {  // Renamed from useaddProject
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Make the API request using axios
      const response = await axiosInstance.post("/editProduct", productData);
      console.log(productData);
      // If the request is successful, handle the response
      setSuccess(response.data); // Assuming the response contains the result you need
    } catch (err) {
      // Handle errors
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    addProduct,  // Ensure you return `addProject`
    editProduct,  // Ensure you return `addProject`
    loading,
    error,
    success,
  };
};

export default useAddProductApi;
