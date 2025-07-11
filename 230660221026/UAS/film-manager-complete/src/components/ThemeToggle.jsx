import React from "react";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="text-center mb-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-full text-sm font-medium bg-gray-300 dark:bg-gray-600 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition"
      >
        {darkMode ? "☀️ Mode Terang" : "🌙 Mode Gelap"}
      </button>
    </div>
  );
}

export default ThemeToggle;
