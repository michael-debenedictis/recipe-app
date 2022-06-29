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
    const nameTarget = target.name;
    setForm((cur) => {
      const formUpdated = {...cur}
      formUpdated[nameTarget] = target.value;
      return formUpdated
    })
    console.log(form)
  }
  const [recipes, setRecipes] = useState(RecipeData);
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const handleCreate = (event) => {
    console.log(event)
    event.persist();
    event.preventDefault();
    //////////////////////////////////
    
    console.log(event.target.name.value)
    console.log(event.target[2])
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