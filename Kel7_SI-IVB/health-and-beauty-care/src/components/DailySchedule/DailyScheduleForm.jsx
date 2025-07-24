import React, { useState, useEffect } from 'react'; 
import styles from './DailyScheduleForm.module.css';

// Tambahkan prop 
function DailyScheduleForm({ onAddSchedule, editingSchedule, onUpdateSchedule, onCancelEdit }) {
  const [activityName, setActivityName] = useState('');
  const [time, setTime] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('Senin');
  const [activityType, setActivityType] = useState('Healthy');

  useEffect(() => {
    if (editingSchedule) {
      setActivityName(editingSchedule.activityName);
      setTime(editingSchedule.time);
      setDayOfWeek(editingSchedule.dayOfWeek);
      setActivityType(editingSchedule.activityType);
    } else {
      // Reset form jika tidak ada schedule yang diedit (mode tambah)
      setActivityName('');
      setTime('');
      setDayOfWeek('Senin');
      setActivityType('Healthy');
    }
  }, [editingSchedule]); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!activityName.trim() || !time.trim()) {
      alert('Nama kegiatan dan waktu tidak boleh kosong!');
      return;
    }

    if (editingSchedule) {
      // Jika dalam mode edit, panggil onUpdateSchedule
      const updatedSchedule = {
        ...editingSchedule, // Pertahankan ID yang sama
        dayOfWeek: dayOfWeek,
        time: time,
        activityName: activityName.trim(),
        activityType: activityType,
      };
      onUpdateSchedule(editingSchedule.id, updatedSchedule);
      onCancelEdit(); // Setelah update, keluar dari mode edit
    } else {
      // Jika dalam mode tambah, panggil onAddSchedule
      const newSchedule = {
        id: String(+new Date()), 
        dayOfWeek: dayOfWeek,
        time: time,
        activityName: activityName.trim(),
        activityType: activityType,
      };
      onAddSchedule(newSchedule);
    }

    // Reset form (baik setelah tambah maupun setelah update)
    setActivityName('');
    setTime('');
    setDayOfWeek('Senin');
    setActivityType('Healthy');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h3>{editingSchedule ? 'Edit Jadwal Perawatan' : 'Tambah Jadwal Perawatan Baru'}</h3> {/* Judul dinamis */}
      <div className={styles.formGroup}>
        <label htmlFor="dayOfWeek">Hari:</label>
        <select
          id="dayOfWeek"
          className={styles.formControl}
          value={dayOfWeek}
          onChange={(e) => setDayOfWeek(e.target.value)}
        >
          <option value="Senin">Senin</option>
          <option value="Selasa">Selasa</option>
          <option value="Rabu">Rabu</option>
          <option value="Kamis">Kamis</option>
          <option value="Jumat">Jumat</option>
          <option value="Sabtu">Sabtu</option>
          <option value="Minggu">Minggu</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="time">Waktu (HH:MM):</label>
        <input
          type="time"
          id="time"
          className={styles.formControl}
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="activityName">Nama Kegiatan:</label>
        <input
          type="text"
          id="activityName"
          className={styles.formControl}
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
          placeholder="Contoh: Yoga Pagi, Masker Wajah"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="activityType">Jenis Kegiatan:</label>
        <select
          id="activityType"
          className={styles.formControl}
          value={activityType}
          onChange={(e) => setActivityType(e.target.value)}
        >
          <option value="Healthy">Healthy</option>
          <option value="Beauty">Beauty</option>
        </select>
      </div>

      <button type="submit" className={styles.submitButton}>
        {editingSchedule ? 'Simpan Perubahan' : 'Tambah Jadwal'}
      </button>
      {editingSchedule && ( // Tombol batal hanya muncul saat mode edit
        <button
          type="button"
          className={styles.cancelButton}
          onClick={onCancelEdit}
        >
          Batal Edit
        </button>
      )}
    </form>
  );
}

export default DailyScheduleForm;