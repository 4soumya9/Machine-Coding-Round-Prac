import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};

export default Card;
