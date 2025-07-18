// File: src/components/FilterBar.jsx
const FilterBar = ({ onFilter }) => {
  return (
    <select
      onChange={(e) => onFilter(e.target.value)}
      className="w-full md:w-1/3 p-2 border border-gray-300 dark:border-gray-600 
                 rounded-md shadow-sm bg-white dark:bg-zinc-800 
                 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                 transition duration-300"
    >
      <option value="All">Semua Kategori</option>
      <option value="Tugas">Tugas</option>
      <option value="Ujian">Ujian</option>
      <option value="Presentasi">Presentasi</option>
      <option value="Organisasi">Organisasi</option>
    </select>
  );
};

export default FilterBar;
