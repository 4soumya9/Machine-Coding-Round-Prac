import React, { useState } from "react";
import { Menu } from "lucide-react";
import "../App.css";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <Menu size={42} />
      </button>
      {isOpen && (
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
