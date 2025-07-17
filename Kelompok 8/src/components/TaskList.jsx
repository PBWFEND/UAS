import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) return <p>Tidak ada tugas</p>;

  const completedTasks = tasks.filter((task) => task.isDone);
  const pendingTasks = tasks.filter((task) => !task.isDone);

  return (
    <div className="task-list">
      {pendingTasks.length > 0 && (
        <>
          <h3>🕓 Tugas Belum Selesai</h3>
          {pendingTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </>
      )}

      {completedTasks.length > 0 && (
        <>
          <h3>✅ Tugas Selesai</h3>
          {completedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default TaskList;
