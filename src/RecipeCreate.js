import React, { useState } from "react";

function RecipeCreate( {handleCreate, handleFormChange, form} ) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const clearInput = (event) => {
    
  }
  return (
    <form name='create' onSubmit={handleCreate}>
      <table>
        <tbody>
          <tr className='inputboxes'>
            <td className='small' >
              <input type='text' name='name' required placeholder='Name' value={form.name} onChange={handleFormChange} />
            </td>
            <td className='small' >
              <input type='text' name='cuisine' required placeholder='Cuisine' value={form.cuisine} onChange={handleFormChange} />
            </td>
            <td className='small' >
              <input type='url' name='photo' required placeholder='URL' value={form.photo} onChange={handleFormChange} />
            </td>
            <td className='big' >
              <textarea name='ingredients' required placeholder='Ingredients' value={form.ingredients} onChange={handleFormChange} />
            </td>
            <td className='big' >
              <textarea name='preparation' required placeholder='Preparation' value={form.preparation} onChange={handleFormChange} />
            </td>
            <td className='small' >
              <button type='submit'>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;