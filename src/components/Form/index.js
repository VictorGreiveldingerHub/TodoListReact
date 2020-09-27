import React from 'react';
import PropTypes from 'prop-types';

import 'src/components/Form/styles.scss'; 

const Form = () => {
  return (
    <form className="add">
      <label>
        <input 
          type="text"
          name="name"
          placeholder="Ajouter une tâche" />
      </label>
      <input type="submit" value="Ajouter" />
    </form>
  );
};

Form.propTypes = {
};

export default Form;
