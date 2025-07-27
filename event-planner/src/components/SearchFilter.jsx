import React from 'react';

function SearchFilter({ searchTerm, onSearchChange, filter, onFilterChange }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Cari nama, deskripsi, atau lokasi kegiatan..."
        value={searchTerm} 
        onChange={(e) => onSearchChange(e.target.value)} 
        className="flex-grow p-2.5 bg-glassBgLight/50 border border-glassBorder rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                   transition duration-200 ease-in-out font-body 
                   text-glassTextDark placeholder-glassPlaceholder text-sm"
      />
      <div className="relative">
        <select
          value={filter} 
          onChange={(e) => onFilterChange(e.target.value)} 
          className="block appearance-none w-full bg-glassBgLight/50 border border-glassBorder 
                     text-glassTextDark py-2.5 px-4 pr-8 rounded-lg leading-tight 
                     focus:outline-none focus:bg-glassBgLight/70 focus:border-primary 
                     text-sm font-body cursor-pointer"
        >
          <option value="all">Semua Kegiatan</option>
          <option value="upcoming">Kegiatan Mendatang</option>
          <option value="completed">Kegiatan Selesai</option>
          <option value="overdue">Kegiatan Terlewat</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-glassTextDark">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z"/></svg>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;