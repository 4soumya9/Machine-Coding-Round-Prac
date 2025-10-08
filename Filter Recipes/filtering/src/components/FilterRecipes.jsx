import React, { useState } from "react";
import recipes from "./Recepies";
import "../App.css";

const FilterRecipes = () => {
  const [minRating, setMinRating] = useState("");
  const [cartCount, setCartCount] = useState(0);

  // console.log(recipes);
  const filteredRecipes =
    minRating === ""
      ? recipes
      : recipes.filter((recipe) => recipe.rating >= parseFloat(minRating));
  // parseFloat() in JavaScript is a built-in function
  // that converts a string into a floating-point number (decimal number).

  //cal avg rating
  const avgRating =
    filteredRecipes.length > 0
      ? (
          filteredRecipes.reduce((sum, recipe) => sum + recipe.rating, 0) /
          filteredRecipes.length
        ).toFixed(2)
      : "0.00";

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="app">
      <h1>Receipe</h1>
      <div className="filter">
        <label>
          Filter by Rating
          <select
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
          >
            <option value="">All</option>
            <option value="4.0">4.0+</option>
            <option value="4.3">4.3+</option>
            <option value="4.5">4.5+</option>
            <option value="4.7">4.7+</option>
          </select>
        </label>
      </div>
      <div className="cart">
        <h3>CartItems :{cartCount}</h3>
      </div>
      <div className="avg">
        <h3>Avg Rating: {avgRating}</h3>
      </div>
      {/* //List */}
      <div className="recipes">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.name} />
              <h4>{recipe.name}</h4>
              <h4>{recipe.rating}</h4>
              <button onClick={handleAddToCart}>Add to cart</button>
            </div>
          ))
        ) : (
          <p>No recipes</p>
        )}
      </div>
    </div>
  );
};

export default FilterRecipes;
