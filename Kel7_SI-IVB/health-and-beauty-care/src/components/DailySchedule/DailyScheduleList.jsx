import React, { useState } from 'react';
import DailyScheduleItem from './DailyScheduleItem';
import SearchBar from '../Shared/SearchBar';
import styles from './DailyScheduleList.module.css';

function DailyScheduleList({ schedules, deleteSchedule, onEdit }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterDay, setFilterDay] = useState('All');

  const filteredSchedules = schedules
    .filter(schedule =>
      schedule.activityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.dayOfWeek.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.time.includes(searchTerm)
    )
    .filter(schedule =>
      filterType === 'All' ? true : schedule.activityType === filterType
    )
    .filter(schedule =>
      filterDay === 'All' ? true : schedule.dayOfWeek === filterDay
    )
    .sort((a, b) => {
      const daysOrder = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
      const dayA = daysOrder.indexOf(a.dayOfWeek);
      const dayB = daysOrder.indexOf(b.dayOfWeek);

      if (dayA !== dayB) {
        return dayA - dayB;
      }
      return a.time.localeCompare(b.time);
    });

  const daysOfWeek = ['All', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

  return (
    <div className={styles.listContainer}>
      <h3>Daftar Jadwal Perawatan</h3>
      <div className={styles.filters}>
        <SearchBar onSearchChange={setSearchTerm} placeholder="Cari berdasarkan nama, hari, atau waktu..." />

        <div className={styles.filterGroup}>
          <label htmlFor="filterType">Jenis:</label>
          <select
            id="filterType"
            className={styles.filterSelect}
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">Semua Jenis</option>
            <option value="Healthy">Healthy</option>
            <option value="Beauty">Beauty</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="filterDay">Hari:</label>
          <select
            id="filterDay"
            className={styles.filterSelect}
            value={filterDay}
            onChange={(e) => setFilterDay(e.target.value)}
          >
            {daysOfWeek.map(day => (
              <option key={day} value={day}>{day === 'All' ? 'Semua Hari' : day}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredSchedules.length > 0 ? (
        <ul className={styles.scheduleList}>
          {filteredSchedules.map((schedule) => (
            <DailyScheduleItem
              key={schedule.id}
              schedule={schedule}
              deleteSchedule={deleteSchedule}
              onEdit={onEdit} 
            />
          ))}
        </ul>
      ) : (
        <p className={styles.noSchedule}>Tidak ada jadwal yang ditemukan.</p>
      )}
    </div>
  );
}

export default DailyScheduleList;