import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useFetchProjects = (categoryId = null) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastId, setLastId] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch projects with the correct endpoint based on categoryId
  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      let response;
      
      if (categoryId) {
        // Use displayCategoryById endpoint when a specific category is selected
        const payload = { lastId: null, categoryId };
        response = await axiosInstance.post("/displayProjectByID", payload);
      } else {
        // Use displayProject endpoint for "All Projects"
        const payload = { lastId: null };
        response = await axiosInstance.post("/displayProject", payload);
      }
      
      setProjects(response.data.data || []);
      setLastId(response.data.lastFetchedId || null);
      setHasMore(response.data.data && response.data.data.length > 0);
      console.log("Fetch response:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch projects.");
    } finally {
      setLoading(false);
    }
  }, [categoryId]);

  // Function to fetch more projects (for pagination)
  const fetchMoreProjects = useCallback(async () => {
    if (!lastId || !hasMore) return;

    // setLoading(true);
    try {
      let response;
      
      if (categoryId) {
        // Use displayCategoryById endpoint when a specific category is selected
        const payload = { lastId, categoryId };
        response = await axiosInstance.post("/displayProjectByID", payload);
      } else {
        // Use displayProject endpoint for "All Projects"
        const payload = { lastId };
        response = await axiosInstance.post("/displayProject", payload);
      }
      
      const newProjects = response.data.data || [];

      if (newProjects.length === 0) {
        setHasMore(false);
      } else {
        setProjects(prevProjects => [...prevProjects, ...newProjects]);
        setLastId(response.data.lastFetchedId || null);
      }
      console.log("Fetch more response:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch more projects.");
    } finally {
      setLoading(false);
    }
  }, [lastId, hasMore, categoryId]);

  // Fetch projects when the component mounts or categoryId changes
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return { 
    projects, 
    loading, 
    error, 
    refetch: fetchProjects, 
    fetchMoreProjects, 
    hasMore 
  };
};

export default useFetchProjects;