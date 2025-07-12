import './HabitItem.css';

function HabitItem({ habit, onToggle, onDelete, onEdit }) {
  return (
    <li className={`habit-item ${habit.done ? 'done' : ''}`}>
      <div className="habit-title">{habit.name}</div>
      {habit.desc && <div className="habit-description">{habit.desc}</div>}
      <div className="habit-actions">
        <button className={`toggle-btn ${habit.done ? 'completed' : ''}`} onClick={() => onToggle(habit.id)}>
          {habit.done ? '✅ Selesai' : '❌ Belum'}
        </button>
        <button className="edit-btn" onClick={() => onEdit(habit)}>✏️ Edit</button>
        <button className="delete-btn" onClick={() => onDelete(habit.id)}>🗑️ Hapus</button>
      </div>
    </li>
  );
}

export default HabitItem;