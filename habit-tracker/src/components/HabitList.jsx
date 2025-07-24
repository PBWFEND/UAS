import HabitItem from './HabitItem';
import { useState } from 'react';

function HabitList({ habits, onToggle, onDelete, onEdit, searchTerm }) {
  const [filter, setFilter] = useState("all");
  const filteredHabits = habits.filter((habit) => {
    if (filter === "done") return habit.done;
    if (filter === "not_done") return !habit.done;
    return true;
  }).filter((habit) => habit.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div className="filter-buttons">
        <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>📋 Semua</button>
        <button className={`filter-btn ${filter === "done" ? "active" : ""}`} onClick={() => setFilter("done")}>✅ Sudah Dicapai</button>
        <button className={`filter-btn ${filter === "not_done" ? "active" : ""}`} onClick={() => setFilter("not_done")}>❌ Belum Dicapai</button>
      </div>
      <ul>
        {filteredHabits.map((habit) => (
          <HabitItem key={habit.id} habit={habit} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </ul>
    </>
  );
}

export default HabitList;