import { useEffect, useState } from "react";

function useMovies(query, page = 1) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const API_KEY = "8cc9e4e6ab723fce9981d3668c9f6d3d";
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const endPoint = query
          ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
          : `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`;

        const res = await fetch(endPoint);
        const data = await res.json();
        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query, page]);
  return { movies, loading, error, totalPages };
}

export default useMovies;
