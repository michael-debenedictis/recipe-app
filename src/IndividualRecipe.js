import React from "react";

function IndividualRecipe( {item, index, recipes, setRecipes} ) {
  let backgroundColor
  if (index % 2 === 0) {
    backgroundColor = '#fce5cd';
  } else {
    backgroundColor = '#fffff';
  }
  const handleDelete = ( {target} ) => {
    setRecipes(cur => {
      const theRecipes = [...cur];
      const theRecipesFiltered = theRecipes.filter(recipe => recipe.name !== item.name);
      return theRecipesFiltered
    })
  }
  return (
    <tr style={{backgroundColor: backgroundColor}} >
      <td className='small' value='name' name='name' >
        <p name='name' value='name'>{item.name}</p>
      </td>
      <td className='small' value='cuisine' name='cuisine' >
        <p name='cuisine' value='cuisine'>{item.cuisine}</p>
      </td>
      <td className='small' value='photo' name='photo' >
        <img name='photo' value='photo' style={{width: '100%', height: '100%', objectFit: 'contain'}} alt='the recipe' src={item.photo}/>
      </td>
      <td className='big content_td' value='ingredients' name='ingredients' >
        <p name='ingredients' value='ingredients'>{item.ingredients}</p>
      </td>
      <td className='big content_td' value='preparation' name='preparation' >
        <p name='preparation' value='preparation'>{item.preparation}</p>
      </td>
      <td className='small' value='delete' name='delete' >
        <button onClick={handleDelete} name='delete' > Delete </button>
      </td>
    </tr>
  )
}

export default IndividualRecipe;