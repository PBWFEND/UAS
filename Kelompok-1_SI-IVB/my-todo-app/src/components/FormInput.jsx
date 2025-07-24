import React, { useState } from 'react';
import './FormInput.css';
import { FaTimes } from 'react-icons/fa'; 

function FormInput({ addTodo, placeholder, isInline = false, onCancel }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title); 
      setTitle('');
      if (!isInline && onCancel) {
        onCancel(); 
      }
    }
  };

  return (
    <form className={`form-input ${isInline ? 'inline' : ''}`} onSubmit={handleSubmit}>
      {!isInline && (
        <button type="button" className="close-modal-btn" onClick={onCancel}>
          <FaTimes />
        </button>
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-title-input"
      />
      <button type="submit" className="add-task-button">
        Add Task
      </button>
    </form>
  );
}

export default FormInput;