import React from "react";
import IndividualRecipe from './IndividualRecipe.js'

function RecipeList( {recipes, setRecipes} ) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className='small'>Name</th>
            <th className='small'>Cuisine</th>
            <th className='small'>Photo</th>
            <th className='big'>Ingredients</th>
            <th className='big'>Preparation</th>
            <th className='small'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((item, index) => <IndividualRecipe key={item.name.replaceAll(' ', '-')} item={item} index={index} recipes={recipes} setRecipes={setRecipes} />)}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
