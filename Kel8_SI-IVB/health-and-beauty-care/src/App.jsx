import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import DailySchedulePage from './pages/DailySchedulePage';
import FavoriteProductPage from './pages/FavoriteProductPage';
import RoutineTrackerPage from '../src/pages/RoutineTrackerPage';
import useLocalStorage from './hooks/useLocalStorage';
import styles from './App.module.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const [dailySchedules, setDailySchedules] = useLocalStorage('dailySchedules', []);
  const [favoriteProducts, setFavoriteProducts] = useLocalStorage('favoriteProducts', []);

  // --- Fungsi CRUD untuk Daily Schedules ---
  const addDailySchedule = (newSchedule) => {
    setDailySchedules((prevSchedules) => [...prevSchedules, newSchedule]);
    alert('Jadwal perawatan berhasil ditambahkan!');
  };

  const updateDailySchedule = (id, updatedSchedule) => {
    setDailySchedules((prevSchedules) =>
      prevSchedules.map((schedule) =>
        schedule.id === id ? { ...schedule, ...updatedSchedule } : schedule
      )
    );
    alert('Jadwal perawatan berhasil diubah!');
  };

  const deleteDailySchedule = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus jadwal ini?')) {
    setDailySchedules((prevSchedules) => prevSchedules.filter((schedule) => schedule.id !== id));
    alert('Jadwal perawatan berhasil dihapus!'); 
  }
  };

  const toggleScheduleCompletion = (id) => {
    setDailySchedules((prevSchedules) =>
      prevSchedules.map((schedule) =>
        schedule.id === id ? { ...schedule, isCompleted: !schedule.isCompleted } : schedule
      )
    );
  };

  // --- Fungsi CRUD untuk Favorite Products ---
  const addFavoriteProduct = (newProduct) => {
    setFavoriteProducts((prevProducts) => [...prevProducts, newProduct]);
    alert('Produk favorit berhasil ditambahkan:', newProduct);
  };

  const deleteFavoriteProduct = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus produk favorit ini?')) {
    setFavoriteProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id !== id);
    });
    alert('Produk favorit berhasil dihapus!'); 
  }
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <Dashboard
            dailySchedules={dailySchedules}
            favoriteProducts={favoriteProducts}
            deleteProduct={deleteFavoriteProduct}
          />
        );
      case 'dailySchedules':
        return (
          <DailySchedulePage
            schedules={dailySchedules}
            addSchedule={addDailySchedule}
            updateSchedule={updateDailySchedule}
            deleteSchedule={deleteDailySchedule}
            toggleCompletion={toggleScheduleCompletion}
          />
        );
      case 'favoriteProducts':
        return (
          <FavoriteProductPage
            products={favoriteProducts}
            addProduct={addFavoriteProduct}
            deleteProduct={deleteFavoriteProduct}
          />
        );
      case 'routineTracker':
        return (
          <RoutineTrackerPage
            schedules={dailySchedules}
            toggleCompletion={toggleScheduleCompletion}
          />
        );
      default:
        return (
          <Dashboard
            dailySchedules={dailySchedules}
            favoriteProducts={favoriteProducts}
            deleteProduct={deleteFavoriteProduct}
          />
        );
    }
  };

  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.mainContent}>
        <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
        <main className={styles.pageContent}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;