import React from 'react';
import Item from './Item';
import './ItemList.css';

function ItemList({ todos, toggleDone, deleteTodo }) {
  return (
    <div className="item-list">
      {todos.length === 0 ? (
        <p className="no-items-message">No tasks here yet.</p>
      ) : (
        todos.map((todo) => (
          <Item key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
        ))
      )}
    </div>
  );
}

export default ItemList;