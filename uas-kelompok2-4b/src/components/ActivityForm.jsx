import { useState } from 'react';
import { Calendar, FileText, Tag, Text } from 'lucide-react';

const initialForm = {
  title: '',
  category: 'Tugas',
  deadline: '',
  description: '',
};

const ActivityForm = ({ onAdd }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert('Judul tidak boleh kosong!');
    onAdd({ id: Date.now().toString(), ...form, isDone: false });
    setForm(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/20 dark:bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/30 dark:border-white/10 transition-all duration-300"
    >
      <h2 className="text-xl font-semibold mb-4 text-center text-zinc-800 dark:text-zinc-100">Tambah Aktivitas 📝</h2>

      <div className="space-y-4">
        {/* Title */}
        <div className="flex items-center gap-3">
          <FileText className="text-primary w-5 h-5" />
          <input
            type="text"
            name="title"
            placeholder="Judul aktivitas"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-white/60 dark:bg-zinc-800 text-black dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-400 shadow-inner"
          />
        </div>

        {/* Category */}
        <div className="flex items-center gap-3">
          <Tag className="text-primary w-5 h-5" />
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-white/60 dark:bg-zinc-800 text-black dark:text-white"
          >
            <option value="Tugas">📒 Tugas</option>
            <option value="Ujian">📝 Ujian</option>
            <option value="Presentasi">🎤 Presentasi</option>
            <option value="Organisasi">📣 Organisasi</option>
          </select>
        </div>

        {/* Deadline */}
        <div className="flex items-center gap-3">
          <Calendar className="text-primary w-5 h-5" />
          <input
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-white/60 dark:bg-zinc-800 text-black dark:text-white"
          />
        </div>

        {/* Description */}
        <div className="flex items-start gap-3">
          <Text className="text-primary w-5 h-5 mt-2" />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Deskripsi aktivitas"
            className="w-full p-2 rounded-lg bg-white/60 dark:bg-zinc-800 text-black dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-400 resize-none shadow-inner"
            rows="3"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 rounded-xl hover:scale-105 active:scale-95 transition transform"
      >
        Tambah Aktivitas
      </button>
    </form>
  );
};

export default ActivityForm;
