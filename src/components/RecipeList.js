import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, deleteRecipe, toggleFavorite, likedRecipes }) =>{
    return(
        <div className= "recipe-list">
            {recipes.map(recipe=>(
                <RecipeItem
                key={recipe.id}
                recipe={recipe}
                deleteRecipe={deleteRecipe}
                toggleFavorite={toggleFavorite}
          likedRecipes={likedRecipes}
                />
            ))}

        </div>
    );
};

export default RecipeList;