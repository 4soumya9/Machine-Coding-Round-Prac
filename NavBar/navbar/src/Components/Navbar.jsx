import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const [isDropDown, setIsDropDown] = useState(false); //  dropdown toggle(mobile)

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <div className={`nav-links ${isOpen ? "open" : " "}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          Aboout
        </NavLink>
        {/* Drop Down Sevices  */}
        <div
          className="dropdown"
          onClick={() => setIsDropDown(!isDropDown)} // mobile toggle
        >
          <span className="drop-btn">Services</span>
          <div className={`dropdown-content ${isDropDown ? "show" : ""}`}>
            <NavLink to="/services/web" onClick={() => setIsOpen(false)}>
              Web
            </NavLink>
            <NavLink to="/services/uiux" onClick={() => setIsOpen(false)}>
              UI/UX
            </NavLink>
            <NavLink to="/services/uiux" onClick={() => setIsOpen(false)}>
              App Dev
            </NavLink>
          </div>
        </div>
        {/* <NavLink to="/services" onClick={() => setIsOpen(false)}>
          Service
        </NavLink> */}
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
