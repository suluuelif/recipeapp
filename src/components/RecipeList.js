import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, deleteRecipe }) =>{
    return(
        <div className= "recipe-list">
            {recipes.map(recipe=>(
                <RecipeItem
                key={recipe.id}
                recipe={recipe}
                deleteRecipe={deleteRecipe}
                />
            ))}

        </div>
    );
};

export default RecipeList;