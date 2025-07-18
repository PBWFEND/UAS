import React from 'react';
import { FaRegCircle, FaCheckCircle, FaRegTrashAlt } from 'react-icons/fa';
import './Item.css';

function Item({ todo, toggleDone, deleteTodo }) {
  const categoryIcon = todo.category === 'Home' ? '🏠' : '#'; 
  const categoryLabel = todo.category || 'Inbox';

  return (
    <div className={`item ${todo.isDone ? 'done' : ''}`}>
      <div className="item-left-section">
        <button
          className={`checkbox ${todo.isDone ? 'checked' : ''}`}
          onClick={() => toggleDone(todo.id)}
        >
          {todo.isDone ? <FaCheckCircle className="check-icon" /> : <FaRegCircle className="uncheck-icon" />}
        </button>
        <div className="task-details">
          <span className="title">{todo.title}</span>
          {todo.category !== 'Inbox' && (
            <div className="item-tags">
              <span className="tag-icon">{categoryIcon}</span>
              <span className="tag-label">{categoryLabel}</span>
            </div>
          )}
        </div>
      </div>
      <div className="item-actions">
        <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default Item;