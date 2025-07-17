import React, { useState, useEffect } from "react";
import FormInput from "./components/FormInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");

  const addTask = (title, date) => {
    const newTask = {
      id: Date.now(),
      title,
      date,
      isDone: false,
    };
    setTasks([newTask, ...tasks]);
    alert("Tugas berhasil ditambahkan");
  };

  const deleteTask = (id) => {
    if (confirm("Yakin ingin menghapus tugas?")) {
      setTasks(tasks.filter((task) => task.id !== id));
      alert("Tugas berhasil dihapus");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const editTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
    alert("Tugas berhasil diubah");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.isDone).length;
  const pending = total - completed;

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1>📋 Manajemen Tugas</h1>
      <div className="stats">
        <span>Total: {total}</span>
        <span>Selesai: {completed}</span>
        <span>Belum: {pending}</span>
      </div>

      {/* Input pencarian */}
      <input
        type="text"
        placeholder="🔍 Cari tugas..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="flex-layout">
        <FormInput onAdd={addTask} />
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </div>
    </div>
  );
}

export default App;
