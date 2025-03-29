// src/components/RecipeList.js
import React from "react";

const RecipeList = ({ recipes, deleteRecipe, toggleFavorite, likedRecipes, updateRating }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.name}</h3>
          <p>{recipe.description}</p>

          {/* Rating Component */}
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => updateRating(recipe.id, star)}
                style={{ color: recipe.rating >= star ? "gold" : "gray" }}
              >
                ★
              </span>
            ))}
          </div>

          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          <button onClick={() => toggleFavorite(recipe.id)}>
            {likedRecipes.includes(recipe.id) ? "❤️" : "♡"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;