import React from "react";

function FilmList({ films, setSelectedFilm, deleteFilm }) {
  if (films.length === 0) {
    return <p className="text-center text-gray-400 italic">Tidak ada film ditemukan.</p>;
  }

  return (
    <div className="grid gap-4 mt-4">
      {films.map((film) => (
        <div
          key={film.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border dark:border-gray-700 hover:shadow-lg transition"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{film.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Sutradara: {film.director}</p>
              <p className={`mt-1 text-sm font-medium ${film.watched ? "text-green-600" : "text-red-500"}`}>
                {film.watched ? "✔️ Sudah ditonton" : "❌ Belum ditonton"}
              </p>
            </div>
            <div className="space-x-2 mt-1">
              <button
                onClick={() => setSelectedFilm(film)}
                className="px-3 py-1 rounded bg-yellow-400 text-black hover:bg-yellow-300 text-sm"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => deleteFilm(film.id)}
                className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 text-sm"
              >
                🗑 Hapus
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilmList;
