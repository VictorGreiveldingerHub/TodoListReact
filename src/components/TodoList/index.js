// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';

import initialTasks from 'src/data/tasks.js';


const TodoList = () => {
  // Hooks 
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskText, setNewTaskText] = useState('');

  const handleCheckboxChange = (taskId) => {
    const newTasks = tasks.map((task) => {
      const taskCopy = { ...task };
      if (taskCopy.id === taskId) taskCopy.done = !taskCopy.done;
      return taskCopy;
    });
    setTasks(newTasks);
  };

  const addTask = () => {
    // Calcul d'un id pour la nouvelle tâche
    const taskIds = tasks.map((task) => task.id);
    const maxId = Math.max(...taskIds);
    const id = maxId + 1;
    // const id = (Math.max(...taskIds)) + 1;

    // Modélisation de la nouvelle tâche
    const taskToAdd = {
      id,
      text: newTaskText,
      done: false,
    };
    const newTasks = [...tasks, taskToAdd];

    // MÀJ du state de l'élément React
    setTasks(newTasks);
    // On vide l'input du formulaire
    setNewTaskText('');
  };

  return (
    <div id="todo">
      <Form 
        text={newTaskText}
        addTask={addTask}
        updateText={setNewTaskText}
      />
      <Counter />
      <List
        tasks={initialTasks}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

// == Export
export default TodoList;
