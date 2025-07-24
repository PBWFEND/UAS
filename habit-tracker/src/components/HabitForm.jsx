import { useState, useEffect } from "react";

function HabitForm({ onAdd, onEdit, editingHabit }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [done, setDone] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (editingHabit) {
      setName(editingHabit.name);
      setDesc(editingHabit.desc);
      setDone(editingHabit.done);
    }
  }, [editingHabit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (editingHabit) {
      onEdit({ ...editingHabit, name, desc, done });
      setFeedback("✅ Habit berhasil diperbarui!");
    } else {
      onAdd({ id: Date.now(), name, desc, done });
      setFeedback("🎉 Habit baru berhasil ditambahkan!");
    }

    // Reset form
    setName("");
    setDesc("");
    setDone(false);

    // Hilangkan notifikasi setelah 3 detik
    setTimeout(() => setFeedback(""), 3000);
  };

  return (
    <div className="form-container">
      <h2>{editingHabit ? "Edit Habit" : "Tambah Habit Baru"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama habit..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Deskripsi (opsional)"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => setDone(e.target.checked)}
          />
          Sudah dilakukan
        </label>
        <button type="submit" className="add-btn">
          {editingHabit ? "✏️ Update Habit" : "➕ Tambah Habit"}
        </button>
      </form>

      {feedback && <div className="feedback">{feedback}</div>}
    </div>
  );
}

export default HabitForm;
