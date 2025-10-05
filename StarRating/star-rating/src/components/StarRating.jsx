import React, { useState } from "react";

const StarRating = ({ totalStars, onRate }) => {
  const [rating, setRating] = useState(0);

  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    if (onRate) {
      onRate(value);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const value = index + 1;
        return (
          <span
            key={value}
            className={`star ${value <= (hover || rating) ? "filled" : ""}`}
            onClick={() => handleClick(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
