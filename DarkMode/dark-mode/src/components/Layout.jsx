import React from "react";
// import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import "../App.css";
const Layout = () => {
  //   const mode = useSelector((state) => state.theme.mode);
  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/">Profile </Link>
          <Link to="/contact">Contact</Link>
        </div>
        <DarkModeToggle />
      </nav>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
