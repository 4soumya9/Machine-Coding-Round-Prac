import { useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import useMovies from "./Movies/useMovies";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { movies, loading, error, totalPages } = useMovies(query, page);
  return (
    <div className="app">
      <h1 className="header">Movie Explorer</h1>
      <input
        type="text"
        placeholder="Search Movie Name here"
        value={query}
        className="input_box"
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
      />
      {error && <p>{error}</p>}
      {loading && <p>Loading</p>}

      {movies.length > 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
      <div className="movies_grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie_card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      {/* {movies.length > 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )} */}
    </div>
  );
}

export default App;
