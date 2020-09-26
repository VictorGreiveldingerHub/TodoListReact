import React from 'react';
import PropTypes from 'prop-types';


const Form = () => {
  
  return (
    <form>
      <input
        type="text"
        id="todo-input"
        placeholder="Ajouter une tâche"
        autoComplete="off"
      />
    </form>
  );
};

Form.propTypes = {
};

export default Form;
