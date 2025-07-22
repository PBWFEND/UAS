import React from 'react';
import styles from './Sidebar.module.css';

// Terima prop 
function Sidebar({ onNavigate, currentPage }) {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => onNavigate('dashboard')}
              className={`${styles.navButton} ${currentPage === 'dashboard' ? styles.active : ''}`}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('dailySchedules')}
              className={`${styles.navButton} ${currentPage === 'dailySchedules' ? styles.active : ''}`}
            >
              Manajemen Perawatan
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('favoriteProducts')}
              className={`${styles.navButton} ${currentPage === 'favoriteProducts' ? styles.active : ''}`}
            >
              Produk Favorit
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('routineTracker')}
              className={`${styles.navButton} ${currentPage === 'routineTracker' ? styles.active : ''}`}
            >
              Rutinitas Harian
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;