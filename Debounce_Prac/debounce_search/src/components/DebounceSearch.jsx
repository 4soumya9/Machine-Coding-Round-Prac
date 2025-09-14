import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const API_KEY = "8cc9e4e6ab723fce9981d3668c9f6d3d";
const BASE_URL = "https://api.themoviedb.org/3";
const DebounceSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  // const [debouncedQuery, setDebouncedQuery] = useState("");

  //Debounce input
  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     setDebouncedQuery(query);
  //     console.log("debounce");
  //   }, 5000);

  //   return () => clearTimeout(handler);
  // }, [query]);

  //hook
  const debouncedQuery = useDebounce(query, 500);

  //Fetch movies -> popular or search
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = "";
        if (debouncedQuery) {
          url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${debouncedQuery}`;
        } else {
          url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [debouncedQuery]);

  return (
    <div>
      <h1>Movie Explorer</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies</p>
      )}
    </div>
  );
};

export default DebounceSearch;
