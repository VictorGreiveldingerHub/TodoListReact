import React from 'react';

import 'src/components/List/styles.scss';

const List = () => {

  return (
    <ul className="todo-list">
        <li className="todo">
            <input
                className="todo-check"
                type="checkbox" 
            />
            <span className="todo-text">
                Faire une TodoList en React
            </span>
        </li>
        <li className="todo">
            <input
                className="todo-check"
                type="checkbox" 
            />
             <span className="todo-text">
                Faire un CV + pseudo portfolio
            </span>
        </li>
        <li className="todo">
            <input
                type="checkbox"
                className="todo-check"
            />
            <span className="todo-text">
                Trouver un travail
            </span>
        </li>
        <li className="todo">
            <input
                type="checkbox"
                className="todo-check"
            />
            <span className="todo-text">
            Acheter un nouveau mac
            </span>
        </li>
    </ul>
  );
};

List.propTypes = {
};

export default List;
