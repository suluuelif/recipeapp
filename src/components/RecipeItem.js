import React from 'react';

const RecipeItem = ({recipe, deleteRecipe, toggleFavorite, likedRecipes}) =>{
    return(
        <div className="recipe">
            <span className= {`heart-icon ${likedRecipes.includes(recipe.id)? 'liked': ''}`}
            onClick={()=>toggleFavorite(recipe.id)}>
                ♥
            </span>
            toggleFavorite={toggleFavorite}
            likedRecipes={likedRecipes}
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <button onClick ={() => deleteRecipe(recipe.id)}>Delete</button>
        </div>
    );
};

export default RecipeItem;