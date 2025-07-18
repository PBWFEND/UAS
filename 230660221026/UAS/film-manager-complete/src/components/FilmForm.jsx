import React, { useState, useEffect } from "react";

function FilmForm({ addFilm, selectedFilm, updateFilm }) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [watched, setWatched] = useState(false);

  useEffect(() => {
    if (selectedFilm) {
      setTitle(selectedFilm.title);
      setDirector(selectedFilm.director);
      setWatched(selectedFilm.watched);
    }
  }, [selectedFilm]);

  const handleSubmit = (e) => {
  e.preventDefault();

  const trimmedTitle = title.trim();
  const trimmedDirector = director.trim();

  if (!trimmedTitle || !trimmedDirector) {
    alert("Mohon isi judul dan sutradara terlebih dahulu!");
    return;
  }

  const filmData = {
    id: selectedFilm ? selectedFilm.id : Date.now(),
    title: trimmedTitle,
    director: trimmedDirector,
    watched,
  };

  if (selectedFilm) {
    updateFilm(filmData);
  } else {
    addFilm(filmData);
  }

  // Kosongkan form hanya setelah berhasil
  setTitle("");
  setDirector("");
  setWatched(false);
};


  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-6 bg-white dark:bg-gray-700 rounded-xl shadow-xl transition duration-300"
    >
      <h2 className="text-lg font-bold mb-4 text-gray-700 dark:text-white">
        {selectedFilm ? "Edit Film" : "Tambah Film Baru"}
      </h2>
      <input
        className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-600"
        type="text"
        placeholder="Judul film"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-600"
        type="text"
        placeholder="Nama sutradara"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        required
      />
      <label className="inline-flex items-center mb-4">
        <input
          type="checkbox"
          className="form-checkbox mr-2 text-blue-600"
          checked={watched}
          onChange={(e) => setWatched(e.target.checked)}
        />
        <span className="text-sm text-gray-700 dark:text-gray-200">Sudah ditonton</span>
      </label>
      <br />
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
      >
        {selectedFilm ? "🔄 Update Film" : "➕ Tambah Film"}
      </button>
    </form>
  );
}

export default FilmForm;
