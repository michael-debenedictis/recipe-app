import React from 'react';

function RecipeCreate( {handleCreate, handleFormChange, form} ) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  return (
    <form id='formcreate' name='create' onSubmit={handleCreate}>
      <table>
        <tbody>
          <tr className='inputboxes'>
            <td className='small' >
              <input id='namefield' type='text' name='name' required placeholder='Name' onChange={handleFormChange} />
            </td>
            <td className='small' >
              <input id='cuisinefield' type='text' name='cuisine' required placeholder='Cuisine' onChange={handleFormChange} />
            </td>
            <td className='small' >
              <input id='photofield' type='url' name='photo' required placeholder='URL' onChange={handleFormChange} />
            </td>
            <td className='big' >
              <textarea id='ingredientsfield' name='ingredients' required placeholder='Ingredients' onChange={handleFormChange} />
            </td>
            <td className='big' >
              <textarea id='preparationfield' name='preparation' required placeholder='Preparation' onChange={handleFormChange} />
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