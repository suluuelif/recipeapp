// src/components/AddRecipe.js
import React, { useState } from 'react';

// Functional component called AddRecipe
// It receives 'addRecipe' as a prop
const AddRecipe = ({ addRecipe }) => {
  const [name, setName] = useState(''); // State for recipe name
  const [description, setDescription] = useState(''); // State for recipe description

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (name.trim() && description.trim()) {
      addRecipe(name, description); // Call addRecipe with name and description
      setName(''); // Reset name input
      setDescription(''); // Reset description input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} // Update name state on change
        placeholder="Recipe name"
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} // Update description state on change
        placeholder="Recipe description"
      ></textarea>
      <button type="submit">Add Recipe</button> 
    </form>
  );
};

// Exporting the AddRecipe component to use it in other parts of the app
export default AddRecipe;
