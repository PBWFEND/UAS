import React, { useState, useEffect } from "react";
import TaskModal from "./components/TaskModal";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPriority, setNewPriority] = useState("normal");
  const [searchTerm, setSearchTerm] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [musicUrl, setMusicUrl] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const checkNotifications = () => {
      const now = new Date();
      const nowDate = now.toISOString().split("T")[0];
      const nowTime = now.getHours() + ":" + now.getMinutes();

      tasks.forEach((task) => {
        if (task.date === nowDate && task.reminderTime === nowTime) {
          if (Notification.permission === "granted") {
            new Notification("Pengingat Tugas", {
              body: `${task.title} - ${task.description}`,
            });
          } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then((permission) => {
              if (permission === "granted") {
                new Notification("Pengingat Tugas", {
                  body: `${task.title} - ${task.description}`,
                });
              }
            });
          }
        }
      });
    };

    const interval = setInterval(checkNotifications, 60000);
    return () => clearInterval(interval);
  }, [tasks]);

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => setPopupMessage(""), 3000);
  };

  const addTask = () => {
    if (!newTitle.trim() || !newDate) return;
    const newTask = {
      id: Date.now(),
      title: newTitle,
      date: newDate,
      description: newDescription,
      reminderTime: "",
      done: false,
      priority: newPriority,
    };
    setTasks([...tasks, newTask]);
    setNewTitle("");
    setNewDate("");
    setNewDescription("");
    setNewPriority("normal");
    showPopup("Tugas berhasil ditambahkan!");
  };

  const deleteTask = (taskToDelete) => {
    if (window.confirm("Yakin ingin menghapus tugas ini?")) {
      setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
      setSelectedTask(null);
      showPopup("Tugas dihapus.");
    }
  };

  const editTask = (taskToEdit) => {
    const updated = prompt("Edit task title:", taskToEdit.title);
    if (updated !== null && updated.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === taskToEdit.id ? { ...task, title: updated } : task
        )
      );
      setSelectedTask(null);
      showPopup("Tugas berhasil diperbarui.");
    }
  };

  const toggleDone = (taskToToggle) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskToToggle.id ? { ...task, done: !task.done } : task
      )
    );
    showPopup(
      taskToToggle.done
        ? "Tugas dibatalkan selesai."
        : "Tugas ditandai selesai."
    );
    setSelectedTask(null);
  };

  const calculateDaysLeft = (date) => {
    const now = new Date();
    const deadline = new Date(date);
    const diffTime = deadline - now;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const extractYouTubeId = (url) => {
    const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
    return match ? match[1] : "";
  };

  const extractSpotifyId = (url) => {
    const match = url.match(/track\/([a-zA-Z0-9]+)/);
    return match ? match[1] : "";
  };

  const total = tasks.length;
  const completed = tasks.filter((task) => task.done).length;
  const pending = total - completed;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#93c5fd_10%,transparent_40%),radial-gradient(circle_at_75%_75%,#fcd34d_10%,transparent_40%)] opacity-10 animate-pulse"></div>

      <nav className="w-full bg-white shadow-md py-4 px-6 mb-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-text">
          Task Calendar
        </h1>

        <div className="flex items-center space-x-4"></div>
      </nav>

      {popupMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-2 rounded-full shadow-lg animate-bounce">
          {popupMessage}
        </div>
      )}

      <div className="container mx-auto py-6 px-4 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white bg-opacity-60 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200 md:col-span-1">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            Tambah Tugas
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nama tugas"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Deskripsi tugas (opsional)"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
              rows={3}
            ></textarea>
            <select
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
            >
              <option value="penting">🔥 Penting</option>
              <option value="normal">📝 Normal</option>
              <option value="santai">🌿 Santai</option>
            </select>
            <button
              onClick={addTask}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold shadow"
            >
              ➕ Tambahkan
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              🎵 Putar Musik
            </h3>
            <input
              type="text"
              placeholder="Masukkan link YouTube/Spotify"
              value={musicUrl}
              onChange={(e) => setMusicUrl(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-purple-400"
            />
            {musicUrl && (
              <div className="mt-3 aspect-video">
                {musicUrl.includes("youtube.com") ||
                musicUrl.includes("youtu.be") ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${extractYouTubeId(
                      musicUrl
                    )}`}
                    title="YouTube Music"
                    allow="autoplay"
                    allowFullScreen
                    className="w-full h-48 rounded-lg shadow"
                  ></iframe>
                ) : musicUrl.includes("spotify.com") ? (
                  <iframe
                    src={`https://open.spotify.com/embed/track/${extractSpotifyId(
                      musicUrl
                    )}`}
                    title="Spotify Music"
                    allow="autoplay"
                    allowtransparency="true"
                    allowFullScreen
                    className="w-full h-20 rounded-lg shadow"
                  ></iframe>
                ) : (
                  <p className="text-sm text-red-500">❌ Link tidak valid.</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-white bg-opacity-60 backdrop-blur-lg p-4 rounded-xl shadow border">
            <div className="mb-2 text-sm italic text-gray-600">
              🌟 "Tugas besar terselesaikan dengan tindakan konsisten."
            </div>
            <div className="mb-4 flex justify-between text-sm text-gray-700">
              <span>📌 Total: {total}</span>
              <span>✅ Selesai: {completed}</span>
              <span>🕓 Belum: {pending}</span>
            </div>
            <input
              type="text"
              placeholder="Cari tugas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-sm shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks
              .filter((task) =>
                task.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((task) => (
                <div
                  key={task.id}
                  className={`transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl bg-white rounded-xl p-5 shadow ${
                    task.done ? "opacity-50 line-through" : ""
                  }`}
                  onClick={() => setSelectedTask(task)}
                >
                  <h3 className="font-semibold text-lg text-blue-800 mb-1">
                    {task.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">
                    📅 {new Date(task.date).toLocaleDateString()} (
                    {calculateDaysLeft(task.date)} hari lagi)
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      task.priority === "penting"
                        ? "bg-red-100 text-red-700"
                        : task.priority === "santai"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {task.priority || "normal"}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDone(task);
                    }}
                    className="block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200"
                  >
                    {task.done ? "✅ Selesai" : "✔️ Tandai Selesai"}
                  </button>
                </div>
              ))}
          </div>
        </div>

        {selectedTask && (
          <TaskModal
            task={selectedTask}
            onClose={() => setSelectedTask(null)}
            onEdit={editTask}
            onDelete={deleteTask}
            onToggleDone={toggleDone}
          />
        )}
      </div>
    </div>
  );
};

export default App;
