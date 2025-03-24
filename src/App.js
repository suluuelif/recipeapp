// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import './App.css';

// Functional component called App
function App() {
  // State for recipes
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  // Function to add a new recipe
  const addRecipe = (name, description) => {
    const newRecipe = {
      id: Date.now(), // Unique ID based on current time
      name,
      description
    };
    setRecipes([...recipes, newRecipe]); // Add new recipe to recipes state
  };

  // Function to delete a recipe by ID
  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(recipes.filter(recipe => recipe.id !== id));
    setRecipes(updatedRecipes);
    filterRecipes(searchTerm);// Remove recipe with matching ID
    setLikedRecipes(likedRecipes.filter((recipeId)=> recipeId !== id));

  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(e.target.value);
  } 



  const filterRecipes = (term) => {
    const filtered = recipes.filter(recipe =>{
      return (
        recipe.name.toLowerCase().includes(term.toLowerCase()) ||
        recipe.description.toLowerCase().includes(term.toLowerCase())

      );
    });
    setFilteredRecipes(filtered);
  };
  const toggleFavorite = (id) => {
    if(likedRecipes.includes(id)){
      setLikedRecipes(likedRecipes.filter(recipeId => recipeId !== id));
  }
  else{
    setLikedRecipes([...likedRecipes, id]);
  }
}

const toggleView = () => {
  setShowFavorites(!showFavorites);
  // if(!showFavorites){
  //   const favRecipes = recipes.filter(recipe => likedRecipes.includes(recipe.id));
  //   setFilteredRecipes(favRecipes);
  // } else {
  //   setFilteredRecipes(recipes);
  // }
}

const displayedRecipes = showFavorites?
  recipes.filter(recipe => likedRecipes.includes(recipe.id)):
  searchTerm? filteredRecipes: recipes;
   
  return (
    <div className="App">
      <Header /> 
      <AddRecipe addRecipe={addRecipe} /> 
      <input
      type="text"
      placeholder='Search recipes...'
      value={searchTerm}
      onChange={handleSearchChange}
      ></input>
      <button onClick={toggleView}>
        {showFavorites? 'Show All': 'Show favorite recipes'}
      </button>
      {}
      {filteredRecipes.length===0 && searchTerm.length!==0 ? (<p>No recipes found</p>): 
        (<RecipeList recipes={displayedRecipes} 
          deleteRecipe={deleteRecipe} 
          toggleFavorite={toggleFavorite}
          likedRecipes={likedRecipes}
          />)}
      <Footer />
      </div>
  );
}

// Exporting the App component to use it in other parts of the app
export default App;
