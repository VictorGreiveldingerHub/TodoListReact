// == Import npm
import React from 'react';

// == Import
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';

import initialTasks from 'src/data/tasks.js';


const TodoList = () => {
  return (
    <div id="todo">
      <Form />
      <Counter />
      <List />
    </div>
  );
};

// == Export
export default TodoList;
