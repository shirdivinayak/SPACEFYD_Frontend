import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useFetchProjects = (categoryId = null) => { // Accept categoryId as a parameter
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastId, setLastId] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch projects with optional categoryId
  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      const payload = { lastId: null };
      if (categoryId) {
        payload.categoryId = categoryId; // Include categoryId if provided
      }
      const response = await axiosInstance.post("/displayProject", payload);
      setProjects(response.data.data || []);
      setLastId(response.data.lastFetchedId || null);
      setHasMore(response.data.data && response.data.data.length > 0);
      console.log("Fetch response:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch projects.");
    } finally {
      setLoading(false);
    }
  }, [categoryId]); // categoryId as a dependency

  // Function to fetch more projects (for pagination)
  const fetchMoreProjects = useCallback(async () => {
    if (!lastId || !hasMore) return;

    setLoading(true);
    try {
      const payload = { lastId };
      if (categoryId) {
        payload.categoryId = categoryId; // Include categoryId if provided
      }
      const response = await axiosInstance.post("/displayProject", payload);
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
  }, [lastId, hasMore, categoryId]); // categoryId as a dependency

  // Fetch projects when the component mounts or categoryId changes
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]); // fetchProjects includes categoryId in its dependency array

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