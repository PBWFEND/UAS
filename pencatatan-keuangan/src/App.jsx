import { useEffect, useState, useCallback } from 'react';
import FormTransaksi from './components/FormTransaksi';
import TransaksiList from './components/TransaksiList';
import LaporanRingkas from './components/LaporanRingkas';
import FilterControls from './components/FilterControls';
import { formatCurrency, useDeviceType } from './utils/helpers';
import './App.css';

function App() {
  const [transaksiList, setTransaksiList] = useState([]);
  const [filter, setFilter] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const { isMobile } = useDeviceType();
  const [showForm, setShowForm] = useState(!isMobile);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Apply theme on mount and change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Load data from localStorage
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('dataKeuangan')) || [];
      setTransaksiList(data);
    } catch (error) {
      console.error("Gagal memuat data:", error);
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('dataKeuangan', JSON.stringify(transaksiList));
    } catch (error) {
      console.error("Gagal menyimpan data:", error);
    }
  }, [transaksiList]);

  const tambahTransaksi = useCallback((data) => {
    setTransaksiList(prev => {
      const newList = [
        ...prev,
        {
          ...data,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString()
        }
      ];
      return newList;
    });
    if (isMobile) setShowForm(false);
  }, [isMobile]);

  const updateTransaksi = useCallback((dataBaru) => {
    setTransaksiList(prev =>
      prev.map(t =>
        t.id === dataBaru.id ? { ...dataBaru, updatedAt: new Date().toISOString() } : t
      )
    );
  }, []);

  const hapusTransaksi = useCallback((id) => {
    if (window.confirm("Yakin ingin menghapus transaksi ini?")) {
      setTransaksiList(prev => prev.filter(t => t.id !== id));
    }
  }, []);

  const transaksiFiltered = transaksiList.filter(t => {
    const matchesFilter = filter === 'semua' || t.jenis === filter;
    const matchesSearch = t.keterangan.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const summary = transaksiList.reduce((acc, t) => {
    if (t.jenis === 'pemasukan') {
      acc.pemasukan += t.nominal;
      acc.saldo += t.nominal;
    } else {
      acc.pengeluaran += t.nominal;
      acc.saldo -= t.nominal;
    }
    return acc;
  }, { pemasukan: 0, pengeluaran: 0, saldo: 0 });

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title slide-up">
            <span className="app-icon">💰</span>
            <span>Catatan Keuangan</span>
          </h1>
          <div className="header-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={`Ubah ke mode ${theme === 'light' ? 'gelap' : 'terang'}`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            {isMobile && (
              <button
                className={`mobile-toggle-button ${showForm ? 'active' : ''}`}
                onClick={() => setShowForm(!showForm)}
                aria-label={showForm ? 'Tutup form' : 'Buka form'}
              >
                {showForm ? '✕' : '➕'}
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="main-content">
        {showForm && (
          <section className="form-section fade-in" aria-labelledby="form-title">
            <FormTransaksi
              onAdd={tambahTransaksi}
              onCancel={isMobile ? () => setShowForm(false) : null}
            />
          </section>
        )}

        {(!showForm || !isMobile) && (
          <div className="content-section">
            <section className="controls-section">
              <FilterControls
                filter={filter}
                onFilterChange={setFilter}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />

              <LaporanRingkas
                saldo={summary.saldo}
                pemasukan={summary.pemasukan}
                pengeluaran={summary.pengeluaran}
              />
            </section>

            <section className="transactions-section" aria-labelledby="transactions-title">
              <TransaksiList
                transaksiList={transaksiFiltered}
                onUpdate={updateTransaksi}
                onDelete={hapusTransaksi}
              />
            </section>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Dibuat Oleh Kelompok 1 dengan sepenuh ❤️</p>
      </footer>
    </div>
  );
}

export default App;