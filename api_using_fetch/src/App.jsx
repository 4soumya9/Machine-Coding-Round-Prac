import { Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
// import MovieCard from "./Components/MovieCard";
import Home from "./Pages/Home";
import History from "./Pages/History";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />

        {/* <Route/> */}
      </Routes>
    </>
  );
}

export default App;
