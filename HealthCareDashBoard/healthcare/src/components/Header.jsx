import React from "react";
import headerPhoto from "../images/reactImg.png";
const Header = () => {
  return (
    <header>
      <h2>Health Care</h2>
      <div className="profile">
        <img src={headerPhoto} alt="My photo" />
        <span>Admin</span>
      </div>
    </header>
  );
};

export default Header;
