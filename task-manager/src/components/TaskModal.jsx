import React from 'react';

const TaskModal = ({ task, onClose, onEdit, onDelete }) => {
  if (!task) return null;

  return (
    <div className="task-modal" onClick={onClose}>
      <div className="task-modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{task.title}</h3>
        <p className="mb-1">Deadline: {new Date(task.date).toLocaleDateString()}</p>
        <p>Status: <span className={task.done ? 'task-status-completed' : 'task-status-pending'}>{task.done ? 'Selesai' : 'Belum Selesai'}</span></p>

        {task.description && (
          <p className="mt-3 text-sm text-gray-500">{task.description}</p>
        )}

        <div className="task-modal-actions">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            onClick={() => onEdit(task)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            onClick={() => onDelete(task)}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
