import React from 'react';
import './styles.scss'; 

const Counter = ({nbCurrentTasks}) => {
  
  // const sentence = 'tâche';
  // if (nbCurrentTasks > 1) {
  //   sentence += 's';
  // };

  return (
    <div id="todo-counter">{nbCurrentTasks} à faire</div>
  );
};

export default Counter;
