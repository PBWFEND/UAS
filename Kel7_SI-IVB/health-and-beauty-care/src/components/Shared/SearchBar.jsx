import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearchChange, placeholder = 'Cari...' }) {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;