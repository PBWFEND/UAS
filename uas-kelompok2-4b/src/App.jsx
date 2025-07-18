import { useEffect, useState } from 'react';
import Home from './pages/Home';

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
  };

  const handleUpdateActivity = (updated) => {
    setActivities((prev) =>
      prev.map((act) => (act.id === updated.id ? updated : act))
    );
  };

  const handleDeleteActivity = (id) => {
    setActivities((prev) => prev.filter((act) => act.id !== id));
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
  );
}

export default App;
