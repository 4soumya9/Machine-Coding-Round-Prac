import { useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import useMovies from "./Movies/useMovies";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { movies, loading, error, totalPages } = useMovies(query, page);
  return (
    <div>
      <h1>Movie Explorer</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
      />
      {error && <p>{error}</p>}
      {loading && <p>Loading</p>}

      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      {movies.length > 0 && (
        <Pagination page={page} totalPages={totalPages} onPageChang={setPage} />
      )}
    </div>
  );
}

export default App;
