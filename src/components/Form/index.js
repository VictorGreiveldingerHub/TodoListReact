import React from 'react';
import PropTypes from 'prop-types';

import 'src/components/Form/styles.scss'; 

const Form = () => {
  return (
    <form className="add">
        <input 
          type="text"
          name="name"
          id="todo-input"
          placeholder="Ajouter une tâche" 
        />
    </form>
  );
};

Form.propTypes = {
};

export default Form;
