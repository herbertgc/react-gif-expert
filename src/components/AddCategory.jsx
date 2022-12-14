import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState( '' );

  const onInputChange = ({ target }) => {
    setInputValue( target.value )
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    const val = inputValue.trim();
    if( val.length <= 1 ) return;

    //setCategory( (categories) => [ inputValue, ...categories ] );
    onNewCategory( val ); 
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmitForm }>
      <input
        type="text"
        placeholder="Buscar"
        value={ inputValue }
        onChange = { onInputChange }
      />
    </form>
  )
}
