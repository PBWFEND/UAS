import { useState } from 'react';
import { CheckCircle, Circle, Trash2, Pencil, Save, X } from 'lucide-react';

const ActivityItem = ({ data, onUpdate, onDelete }) => {
  const { id, title, category, deadline, description, isDone } = data;
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState({ title, category, deadline, description });

  const toggleStatus = () => {
    const updated = { ...data, isDone: !isDone };
    onUpdate(updated);
  };

  const handleSave = () => {
    const updated = { ...data, ...edited };
    onUpdate(updated);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEdited({ title, category, deadline, description });
    setIsEditing(false);
  };

  const categories = ['Tugas', 'Ujian', 'Presentasi', 'Organisasi'];

  return (
    <div
      className={`relative p-5 rounded-2xl border backdrop-blur-md bg-white/60 dark:bg-zinc-800/60 shadow-xl transition-all duration-300 
        ${isDone
          ? 'border-green-400 dark:border-green-600'
          : 'border-zinc-300 dark:border-zinc-700'}`}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 space-y-2">
          {isEditing ? (
            <>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-xl border dark:bg-zinc-700"
                value={edited.title}
                onChange={(e) => setEdited({ ...edited, title: e.target.value })}
                placeholder="Judul Aktivitas"
              />

              <select
                className="w-full px-4 py-2 rounded-xl border dark:bg-zinc-700 dark:text-white"
                value={edited.category}
                onChange={(e) => setEdited({ ...edited, category: e.target.value })}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <input
                type="date"
                className="w-full px-4 py-2 rounded-xl border dark:bg-zinc-700"
                value={edited.deadline}
                onChange={(e) => setEdited({ ...edited, deadline: e.target.value })}
              />

              <textarea
                className="w-full px-4 py-2 rounded-xl border dark:bg-zinc-700"
                value={edited.description}
                onChange={(e) => setEdited({ ...edited, description: e.target.value })}
                placeholder="Deskripsi"
              />
            </>
          ) : (
            <>
              <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white">
                {title}
              </h2>

              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 font-medium">
                  📁 {category}
                </span>

                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100 font-medium">
                  ⏰ {deadline}
                </span>

                {isDone && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 font-medium">
                    ✅ Selesai
                  </span>
                )}
              </div>

              {description && (
                <p className="text-sm text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                  {description}
                </p>
              )}
            </>
          )}
        </div>

        <div className="flex flex-col gap-2 items-end">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 text-sm px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md transition"
              >
                <Save size={16} /> Simpan
              </button>

              <button
                onClick={handleCancel}
                className="flex items-center gap-2 text-sm px-4 py-2 bg-zinc-400 hover:bg-zinc-500 text-white rounded-full shadow-md transition"
              >
                <X size={16} /> Batal
              </button>
            </>
          ) : (
            <>
              <button
                onClick={toggleStatus}
                className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full font-medium whitespace-nowrap shadow-md transition-all
                  hover:scale-[1.03] active:scale-[0.98]
                  ${isDone
                    ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:brightness-110'
                    : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:brightness-110'}`}
              >
                {isDone ? (
                  <>
                    <Circle size={16} /> Belum Selesai
                  </>
                ) : (
                  <>
                    <CheckCircle size={16} /> Tandai Selesai
                  </>
                )}
              </button>

              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 text-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md transition"
              >
                <Pencil size={16} /> Edit
              </button>

              <button
                onClick={() => onDelete(id)}
                className="flex items-center gap-2 text-sm px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium whitespace-nowrap shadow-md hover:brightness-110 hover:scale-[1.03] active:scale-[0.98] transition"
              >
                <Trash2 size={16} /> Hapus
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
