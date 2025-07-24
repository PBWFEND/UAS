function TaskItem({ task, toggleTask, deleteTask }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    red: "bg-red-100 text-red-800 border-red-200",
    green: "bg-green-100 text-green-800 border-green-200",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
  };

  return (
    <li
      className={`group flex items-center justify-between px-4 py-3 rounded-lg border-l-4 ${
        colorClasses[task.color] || colorClasses.blue
      } shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="flex items-center space-x-3">
        <button
          onClick={() => toggleTask(task.id)}
          className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 ${
            task.completed
              ? "bg-white text-green-500"
              : "bg-white text-gray-400 hover:text-gray-600"
          }`}
        >
          {task.completed ? "✓" : ""}
        </button>
        <span
          onClick={() => toggleTask(task.id)}
          className={`cursor-pointer ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-500 transition-all duration-200 p-1"
      >
        ✕
      </button>
    </li>
  );
}

export default TaskItem;