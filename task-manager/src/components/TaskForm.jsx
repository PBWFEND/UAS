import { useState } from "react";

function TaskForm({ addTask }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("blue");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text, color);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-grow border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border border-gray-200 rounded-lg px-2 focus:outline-none bg-white shadow-sm"
        >
          <option value="blue">🔵 Blue</option>
          <option value="red">🔴 Red</option>
          <option value="green">🟢 Green</option>
          <option value="yellow">🟡 Yellow</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition-colors duration-200 font-medium"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TaskForm;