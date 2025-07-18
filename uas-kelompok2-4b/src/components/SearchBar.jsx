const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Cari aktivitas..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full md:w-1/2 p-2 border border-gray-300 dark:border-gray-600 
                 rounded-md shadow-sm bg-white dark:bg-zinc-800 
                 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                 transition duration-300"
    />
  );
};

export default SearchBar;
