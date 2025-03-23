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
    setRecipes(recipes.filter(recipe => recipe.id !== id)); // Remove recipe with matching ID
  };

  return (
    <div className="App">
      <Header /> 
      <AddRecipe addRecipe={addRecipe} /> 
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} /> 
    </div>
  );
}

// Exporting the App component to use it in other parts of the app
export default App;
