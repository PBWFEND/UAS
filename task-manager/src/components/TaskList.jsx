import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>No tasks found.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
