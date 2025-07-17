import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';
import './index.css'; 
import './App.css';    


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem("habits");
    return stored ? JSON.parse(stored) : [];
  });
  const [feedback, setFeedback] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingHabit, setEditingHabit] = useState(null);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => setHabits([...habits, habit]);

  const updateHabit = (updated) => {
    setHabits(habits.map(h => h.id === updated.id ? updated : h));
    setEditingHabit(null);
  };

  const toggleHabit = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, done: !h.done } : h));
  };

  const deleteHabit = (id) => {
  const deleted = habits.find(h => h.id === id);
  setHabits(habits.filter(h => h.id !== id));
  setFeedback(`✅ Habit "${deleted.name}" telah dihapus.`);
  setTimeout(() => setFeedback(""), 2500);
};


  const startEditHabit = (habit) => setEditingHabit(habit);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <div className="container">
        <h1>📋 Habit Tracker</h1>
        <button className="mode-button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Mode Terang" : "🌙 Mode Gelap"}
        </button>
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <HabitForm onAdd={addHabit} onEdit={updateHabit} editingHabit={editingHabit} />
        {feedback && <div className="feedback">{feedback}</div>}
        <HabitList
          habits={habits}
          searchTerm={searchTerm}
          onToggle={toggleHabit}
          onDelete={deleteHabit}
          onEdit={startEditHabit}
        />
      </div>
    </div>
  );
}

export default App;
