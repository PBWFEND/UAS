import React from 'react';
import styles from './Dashboard.module.css';
import DashboardImage from '../../assets/dashboard.png';
import FavoriteProductList from '../FavoriteProduct/FavoriteProductList'; 

// Terima props 
function Dashboard({ dailySchedules, favoriteProducts, deleteProduct }) {
  // Filter aktivitas untuk hari ini 
  const todayInIndonesian = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
  const todayActivities = dailySchedules.filter(schedule =>
    schedule.dayOfWeek.toLowerCase() === todayInIndonesian.toLowerCase()
  );

  return (
    <div className={styles.dashboard}>
      <section className={`${styles.introSection} ${styles.introBackground}`}>
        <h2>Selamat Datang di Health and Beauty Care!</h2>
        <p>Aplikasi ini dirancang untuk membantumu mengelola jadwal perawatan kesehatan dan kecantikan harianmu. Jangan pernah lupakan pentingnya merawat diri di tengah kesibukanmu. Jaga dirimu, di mana pun Kamu berada!</p>
        <img src={DashboardImage} alt="Animasi Selamat Datang" className={styles.introImage} />
      </section>

      <section className={`${styles.todayActivities} ${styles.activitiesBackground}`}>
        <h3>Aktivitas Perawatan Hari Ini ({todayInIndonesian})</h3>
        {todayActivities.length > 0 ? (
          <ul>
            {todayActivities.map((activity) => (
              <li key={activity.id} className={styles.activityItem}>
                <span className={styles.activityTime}>{activity.time}</span> - {activity.activityName} ({activity.activityType})
              </li>
            ))}
          </ul>
        ) : (
          <p>Tidak ada aktivitas terjadwal untuk hari ini.</p>
        )}
      </section>

      <section className={`${styles.favoriteProducts} ${styles.productsBackground}`}>
        <FavoriteProductList
          products={favoriteProducts}
          deleteProduct={deleteProduct} 
        />
      </section>
    </div>
  );
}

export default Dashboard;