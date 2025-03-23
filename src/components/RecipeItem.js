import React from 'react';

const RecipeItem = ({recipe, deleteRecipe}) =>{
    return(
        <div className="recipe">
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <button onClick ={() => deleteRecipe(recipe.id)}>Delete</button>
        </div>
    );
};

export default RecipeItem;