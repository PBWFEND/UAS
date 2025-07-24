import './FilterControls.css';

function FilterControls({ filter, onFilterChange, searchQuery, onSearchChange }) {
  return (
    <div className="filter-controls">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Cari transaksi..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Cari transaksi"
        />
        <span className="search-icon">🔍</span>
      </div>
      
      <div className="filter-select-container">
        <select
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="filter-select"
          aria-label="Filter transaksi"
        >
          <option value="semua">Semua Transaksi</option>
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
        <span className="dropdown-icon">▼</span>
      </div>
    </div>
  );
}

export default FilterControls;