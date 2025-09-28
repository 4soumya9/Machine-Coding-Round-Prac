import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
