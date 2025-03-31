import { useState, useCallback } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useBannerApi = () => {
  // State to handle the form data, loading, success, and error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Function to make the POST request to add the banner
  const addBrand = useCallback(async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Make the API request using axios
      const response = await axiosInstance.post("/addBannerImage", formData);
      // If the request is successful, handle the response
      setSuccess("Banner added successfully!");
      return response.data;
    } catch (err) {
      // Handle errors
      const errorMessage = err.response?.data?.message || "Something went wrong";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const editBrand = useCallback(async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Make the API request using axios
      const response = await axiosInstance.post("/editBannerImage", formData);
      // If the request is successful, handle the response
      setSuccess("Banner updated successfully!");
      return response.data;
    } catch (err) {
      // Handle errors
      const errorMessage = err.response?.data?.message || "Something went wrong";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchBanner = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Make the API request using axios - using GET instead of POST
      const response = await axiosInstance.post("/fetchBannerImage");
      return response.data; // Return just the data part since that's what we need
    } catch (err) {
      // Handle errors
      const errorMessage = err.response?.data?.message || "Failed to fetch banner";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    addBrand,
    editBrand,
    fetchBanner,
    loading,
    error,
    success,
  };
};

export default useBannerApi;