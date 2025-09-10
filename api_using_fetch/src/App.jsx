import { Link, Router, Routes } from "react-router-dom";
import "./App.css";
import MovieCard from "./Components/MovieCard";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="histor">History</Link>
      </nav>
      <Routes>
        
      </Routes>
    </Router>
  );
}

export default App;
