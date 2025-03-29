import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../instance/axiosInstance";

const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastId, setLastId] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch initial projects
  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/displayProject", { lastId: null });
      setProjects(response.data.data || []);
      setLastId(response.data.lastFetchedId || null);
      setHasMore(response.data.data && response.data.data.length > 0);
      console.log("Initial fetch response:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch projects.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to fetch more projects (for pagination)
  const fetchMoreProjects = useCallback(async () => {
    if (!lastId || !hasMore) return;
    
    setLoading(true);
    try {
      const response = await axiosInstance.post("/displayProject", { lastId });
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
  }, [lastId, hasMore]);

  // Initial load
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