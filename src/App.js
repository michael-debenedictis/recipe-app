import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"


function App() {
  const initialFormState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  };
  const [form, setForm] = useState(initialFormState);
  const handleFormChange = ( {target} ) => {
    console.log(target.name, 'hi')
    const nameTarget = target.name;
    setForm((cur) => {
      const formUpdated = {...cur}
      formUpdated[nameTarget] = target.value;
      return formUpdated
    })
  }
  const [recipes, setRecipes] = useState(RecipeData);
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const handleCreate = (event) => {
    event.persist();
    event.preventDefault();
    let newObject = {
      name: form.name,
      cuisine: form.cuisine,
      photo: form.photo,
      ingredients: form.ingredients,
      preparation: form.preparation
    }
    setRecipes(cur => {
      return [...cur, newObject]
    })
    const nameField = document.querySelector('#namefield');
    const cuisineField = document.querySelector('#cuisinefield');
    const photoField = document.querySelector('#photofield');
    const ingredientsField = document.querySelector('#ingredientsfield');
    const preparationField = document.querySelector('#preparationfield');
    nameField.value = '';
    cuisineField.value = '';
    photoField.value = '';
    ingredientsField.value = '';
    preparationField.value = '';
    setForm(initialFormState)
  }
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} setRecipes={setRecipes} />
      <RecipeCreate handleCreate={handleCreate} handleFormChange={handleFormChange} form={form} />
    </div>
  );
}
export default App;