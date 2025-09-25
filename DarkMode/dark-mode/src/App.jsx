import { useSelector } from "react-redux";
import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Contact from "./components/Contact";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  return (
    <div className={`app ${mode}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Profile />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// without useEffect
//Instead of touching <body>, we just let React add a class name (light or dark) to the outer <div> of our app.
// That class controls the theme using CSS.

{
  /* <div className={`app ${mode}`}>
      <div className="header">
        <DarkModeToggle />
      </div>
      <div className="content">
        <h1>Welcoome to My New App</h1>
        <p>Dark mode is now reusable</p>

        <Profile />
      </div>
    </div> */
}

// https://chatgpt.com/c/68d40700-2c54-8323-bd8c-96d58f6b5e62

// dark mode
