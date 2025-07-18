import React, { useState, useEffect } from "react";
import FilmForm from "./components/FilmForm";
import FilmList from "./components/FilmList";
import ThemeToggle from "./components/ThemeToggle";
import Toast from "./components/Toast";
import "./index.css";

function App() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [toast, setToast] = useState(null); // notifikasi
  const [search, setSearch] = useState(""); // state pencarian
  const [filterStatus, setFilterStatus] = useState("all");



  useEffect(() => {
    const savedFilms = JSON.parse(localStorage.getItem("films")) || [];
    setFilms(savedFilms);
  }, []);

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(films));
  }, [films]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const addFilm = (film) => {
    setFilms([...films, film]);
    showToast("Film berhasil ditambahkan!", "success");
  };

  const updateFilm = (updatedFilm) => {
    const updatedList = films.map((film) =>
      film.id === updatedFilm.id ? updatedFilm : film
    );
    setFilms(updatedList);
    setSelectedFilm(null);
    showToast("Film berhasil diperbarui!", "warning");
  };

  const deleteFilm = (id) => {
    const filtered = films.filter((film) => film.id !== id);
    setFilms(filtered);
    showToast("Film berhasil dihapus!", "error");
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen p-4 bg-gray-100 dark:bg-gray-900`}>
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-700 dark:text-blue-300">
          Manajemen Film Pribadi
        </h1>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        <input
          type="text"
          placeholder="🔍 Cari judul film..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
        />
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setFilterStatus("all")}
            className={`px-3 py-1 rounded text-sm font-medium ${
              filterStatus === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white"
            }`}
          >
            🔄 Semua
          </button>
          <button
            onClick={() => setFilterStatus("watched")}
            className={`px-3 py-1 rounded text-sm font-medium ${
              filterStatus === "watched"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white"
            }`}
          >
            ✅ Sudah Ditonton
          </button>
          <button
            onClick={() => setFilterStatus("unwatched")}
            className={`px-3 py-1 rounded text-sm font-medium ${
              filterStatus === "unwatched"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white"
            }`}
          >
            ❌ Belum Ditonton
          </button>
        </div>

        <FilmForm
          addFilm={addFilm}
          selectedFilm={selectedFilm}
          updateFilm={updateFilm}
        />
        <FilmList
        films={films
          .filter((film) => film.title.toLowerCase().includes(search.toLowerCase()))
          .filter((film) =>
            filterStatus === "watched"
              ? film.watched
              : filterStatus === "unwatched"
              ? !film.watched
              : true
          )}
        setSelectedFilm={setSelectedFilm}
        deleteFilm={deleteFilm}
      />


      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;
