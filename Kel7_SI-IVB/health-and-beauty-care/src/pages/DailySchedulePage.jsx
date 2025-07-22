import React, { useState } from 'react'; 
import DailyScheduleForm from '../components/DailySchedule/DailyScheduleForm';
import DailyScheduleList from '../components/DailySchedule/DailyScheduleList';

function DailySchedulePage({ schedules, addSchedule, updateSchedule, deleteSchedule, toggleCompletion }) {
  const [editingSchedule, setEditingSchedule] = useState(null); 

  // Fungsi untuk memulai mode edit
  const handleEdit = (scheduleToEdit) => {
    console.log("Mulai edit jadwal:", scheduleToEdit);
    setEditingSchedule(scheduleToEdit);
  };

  // Fungsi untuk membatalkan mode edit
  const handleCancelEdit = () => {
    console.log("Batal edit jadwal.");
    setEditingSchedule(null);
  };

  return (
    <div>
      <h2>Manajemen Perawatan Harian</h2>
      <DailyScheduleForm
        onAddSchedule={addSchedule}
        editingSchedule={editingSchedule} 
        onUpdateSchedule={updateSchedule} 
        onCancelEdit={handleCancelEdit} 
      />

      <DailyScheduleList
        schedules={schedules}
        updateSchedule={updateSchedule}
        deleteSchedule={deleteSchedule}
        toggleCompletion={toggleCompletion}
        onEdit={handleEdit} 
      />
    </div>
  );
}

export default DailySchedulePage;