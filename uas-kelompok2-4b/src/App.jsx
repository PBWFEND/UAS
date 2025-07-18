import { useEffect, useState } from 'react';
import Home from './pages/Home';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [activities, setActivities] = useState(() => {
    const stored = localStorage.getItem('activities');
    return stored ? JSON.parse(stored) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored === 'true';
  });

  // Simpan dark mode ke localStorage & set class dark di <html>
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Simpan aktivitas ke localStorage
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  const handleAddActivity = (activity) => {
    setActivities((prev) => [...prev, activity]);
    toast.success('Aktivitas berhasil ditambahkan!');
  };

  const handleUpdateActivity = (updated) => {
    const yakin = window.confirm('Anda yakin ingin memperbarui aktivitas ini?');
    if (yakin) {
      setActivities((prev) =>
        prev.map((act) => (act.id === updated.id ? updated : act))
      );
      toast.success('Aktivitas berhasil diperbarui!');
    }
  };

  const handleDeleteActivity = (id) => {
    const yakin = window.confirm('Anda yakin ingin menghapus aktivitas ini?');
    if (yakin) {
      setActivities((prev) => prev.filter((act) => act.id !== id));
      toast.success('Aktivitas berhasil dihapus!');
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <Toaster position="top-right" />
      <Home
        activities={activities}
        onAddActivity={handleAddActivity}
        onUpdateActivity={handleUpdateActivity}
        onDeleteActivity={handleDeleteActivity}
        searchTerm={searchTerm}
        onSearch={handleSearch}
        filterCategory={filterCategory}
        onFilter={handleFilter}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </>
  );
}

export default App;
