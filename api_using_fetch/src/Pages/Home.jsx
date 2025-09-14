import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";

const API_KEY = "8cc9e4e6ab723fce9981d3668c9f6d3d";
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );

      const data = await res.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <h2> Popular Movies</h2>
      <div>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
