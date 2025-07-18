import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchFilter.css';

function SearchFilter({ searchTerm, onSearchChange }) {
  return (
    <div className="search-filter">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={onSearchChange}
        className="search-input"
      />
    </div>
  );
}

export default SearchFilter;