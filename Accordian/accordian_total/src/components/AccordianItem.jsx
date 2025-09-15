import React from "react";
import "../App.css";
const AccordianItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion_item">
      <button className="accordion_header" onClick={onClick}>
        {title}
        <span className="accordion_icon">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div> {content}</div>}
    </div>
  );
};

export default AccordianItem;
