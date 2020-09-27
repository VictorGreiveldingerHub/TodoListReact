import React from 'react';

import 'src/components/List/styles.scss';

const List = () => {

  return (
    <ul className="todo-list">
        <li>
            <input 
                className="todo"
                type="checkbox" 
            />
            <span> Voici une chose à faire</span>
        </li>
        <li>
            <input 
                className="todo"
                type="checkbox" 
            />
            <span> Voici une chose à faire</span>
        </li>
        <li>
            <input 
                className="todo"
                type="checkbox" 
            />
            <span> Voici une chose à faire</span>
        </li>
        <li>
            <input 
                className="todo"
                type="checkbox" 
            />
            <span> Voici une chose à faire</span>
        </li>
    </ul>
  );
};

List.propTypes = {
};

export default List;
