import React, { useState } from "react";
import "../App.css";
const StarRating = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="star-css">
      <h2>Star Rating</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          onClick={() => setCount(star)}
          style={{ color: star <= count ? "gold" : "gray" }}
        >
          {" "}
          ★
        </div>
      ))}
      <div>{count}</div>
      <div onClick={() => setCount(0)}>Rest</div>
    </div>
  );
};

export default StarRating;


// className={`star ${star <= count ? "active" : ""}`}

// .star {
//   color: gray;
//   transition: color 0.2s ease;
// }

// .star.active {
//   color: gold;
// }