import React, { useState } from 'react';

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  return (
    <div className={`task-item ${task.isDone ? 'done' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />{' '}
        {editing ? (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <button onClick={() => {
              onEdit(task.id, editedTitle);
              setEditing(false);
            }}>Simpan</button>
          </>
        ) : (
          <span>
            {task.title} ({task.date})
          </span>
        )}
      </div>
      {!editing && (
        <div>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Hapus</button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;