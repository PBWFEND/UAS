// src/components/FilterButtons.jsx
import React from 'react';
// import styles from './FilterButtons.module.css'; // <-- HAPUS BARIS INI

function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { name: 'all', label: 'Semua Catatan' },
    { name: 'active', label: 'Catatan Aktif' },
    { name: 'archived', label: 'Catatan Arsip' },
    { name: 'favorite', label: 'Favorit' },
  ];

  return (
    <div className="filter-buttons-container"> {/* Menggunakan class global */}
      {filters.map((filter) => (
        <button
          key={filter.name}
          className={`
            action-button 
            filter-button 
            ${currentFilter === filter.name ? 'active-filter' : ''} 
            glassmorphism 
          `} 
          onClick={() => onFilterChange(filter.name)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;