import React, { useState, useEffect } from 'react';
import styles from './RoutineTrackerPage.module.css'; 
import DailyScheduleItem from '../components/DailySchedule/DailyScheduleItem'; 

// Menerima 'schedules' (semua jadwal), dan fungsi toggleCompletion
function RoutineTrackerPage({ schedules, toggleCompletion }) {
  const [currentDayInIndonesian, setCurrentDayInIndonesian] = useState(''); 

  useEffect(() => {
    const date = new Date();
    setCurrentDayInIndonesian(date.toLocaleDateString('id-ID', { weekday: 'long' }));
  }, []); 

  const todaySchedules = schedules
    .filter(schedule => schedule.dayOfWeek.toLowerCase() === currentDayInIndonesian.toLowerCase())
    .sort((a, b) => a.time.localeCompare(b.time)); 

  return (
    <div className={styles.container}>
      <h2>Pelacak Rutinitas Harian</h2> 
      {currentDayInIndonesian && (
        <p className={styles.currentDayInfo}>Aktivitas untuk Hari Ini : {currentDayInIndonesian}</p>
      )}

      {todaySchedules.length > 0 ? (
        <ul className={styles.scheduleList}>
          {todaySchedules.map(schedule => (
            <DailyScheduleItem
              key={schedule.id}
              schedule={schedule}
              updateSchedule={() => { }}
              deleteSchedule={() => { }}
              toggleCompletion={toggleCompletion}
              isRoutineTrackerView={true}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.noScheduleMessage}>
          Tidak ada rutinitas terjadwal untuk hari **{currentDayInIndonesian}**.
          Silakan tambahkan jadwal di halaman "Manajemen Perawatan" atau sesuaikan jadwal yang ada.
        </p>
      )}
    </div>
  );
}

export default RoutineTrackerPage;