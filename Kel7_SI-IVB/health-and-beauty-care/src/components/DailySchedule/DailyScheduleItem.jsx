import React from 'react';
import styles from './DailyScheduleItem.module.css'; // Pastikan ini ada dan berisi gaya yang Anda inginkan

function DailyScheduleItem({ schedule, deleteSchedule, onEdit, toggleCompletion, isRoutineTrackerView }) {
  const { id, time, activityName, activityType, dayOfWeek, isCompleted } = schedule;

  // Fungsi untuk menangani perubahan status selesai/belum selesai (checkbox)
  const handleToggleCompletion = () => {
    if (toggleCompletion) {
      toggleCompletion(id);
    }
  };

  // Fungsi untuk menangani klik tombol Edit
  const handleEdit = () => {
    if (onEdit) {
      onEdit(schedule); // Teruskan seluruh objek jadwal untuk diedit
    }
  };

  // Fungsi untuk menangani klik tombol Hapus
  const handleDelete = () => {
    if (deleteSchedule) {
      deleteSchedule(id);
    }
  };

  return (
    // Tambahkan kelas conditional 'completed' berdasarkan isCompleted
    <li className={`${styles.scheduleCard} ${isCompleted ? styles.completed : ''}`}>
      <div className={styles.scheduleHeader}>
        <span className={styles.scheduleDay}>{dayOfWeek}</span>
        <span className={`${styles.scheduleType} ${activityType === 'Healthy' ? styles.healthy : (activityType === 'Skincare' ? styles.skincare : styles.beauty)}`}>
            {activityType}
        </span>
      </div>
      <div className={styles.scheduleBody}>
        <p className={styles.scheduleTime}>{time}</p>
        <h4 className={styles.scheduleName}>{activityName}</h4>
        <p className={styles.scheduleId}>ID: {id}</p>
      </div>

      <div className={styles.dynamicActionsContainer}>
        {isRoutineTrackerView && (
          <div className={styles.completionStatus}>
            <label className={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={isCompleted} 
                onChange={handleToggleCompletion} 
              />
              <span className={styles.checkmark}></span>
            </label>
          </div>
        )}

        {!isRoutineTrackerView && (
          <div className={styles.scheduleActions}>
            {onEdit && ( 
              <button className={styles.editButton} onClick={handleEdit}>
                Edit
              </button>
            )}
            {deleteSchedule && ( 
              <button className={styles.deleteButton} onClick={handleDelete}>
                Hapus
              </button>
            )}
          </div>
        )}
      </div> 
    </li>
  );
}

export default DailyScheduleItem;