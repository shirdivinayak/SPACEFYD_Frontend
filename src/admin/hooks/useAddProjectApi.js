import { useState } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useAddProjectApi = () => {
  // State to handle the form data, loading, success, and error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Function to make the POST request to add the project
  const addProject = async (projectData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Make the API request using axios
      const response = await axiosInstance.post("/api/projects", projectData);

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
    addProject,
    loading,
    error,
    success,
  };
};

export default useAddProjectApi;
