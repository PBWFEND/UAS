import React, { useState, useEffect } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import SearchFilter from './components/SearchFilter';
import Dashboard from './components/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [events, setEvents] = useLocalStorage('event-planner-events', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingEvent, setEditingEvent] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 30 * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddOrUpdateEvent = (newEvent) => {
    if (editingEvent) {
      setEvents(events.map(event =>
        event.id === newEvent.id ? newEvent : event
      ));
      setEditingEvent(null);
      alert('Kegiatan berhasil diperbarui!');
    } else {
      setEvents([...events, newEvent]);
      alert('Kegiatan berhasil ditambahkan!');
    }
    setCurrentTime(new Date());
  };

  const handleToggleComplete = (id) => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, isCompleted: !event.isCompleted } : event
    ));
    alert('Status kegiatan berhasil diubah!');
    setCurrentTime(new Date());
  };

  const handleDeleteEvent = (id, eventName) => {
    const confirmDelete = window.confirm(`Apakah Anda yakin ingin menghapus kegiatan "${eventName}"?`);
    if (confirmDelete) {
      setEvents(events.filter(event => event.id !== id));
      alert('Kegiatan berhasil dihapus!');
      if (editingEvent && editingEvent.id === id) {
        setEditingEvent(null);
      }
    }
    setCurrentTime(new Date());
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-appBackgroundStart to-appBackgroundEnd font-sans flex items-center justify-center p-4"> 
      <div className="w-full max-w-7xl h-[calc(100vh-2rem)] bg-glassBgLight rounded-5xl shadow-glass-xl backdrop-blur-xl border border-glassBorder p-4 flex flex-col lg:flex-row gap-4 overflow-hidden"> 
        <div className="flex-1 flex flex-col max-h-full overflow-y-auto custom-scrollbar lg:overflow-hidden">
          <div className="text-center mb-4 px-2 pt-2 flex-shrink-0"> 
            <h1 className="text-3xl lg:text-4xl font-heading font-extrabold text-gradient-main"> 
              Event Planner App
              <span className="block text-lg lg:text-xl font-body font-normal text-glassTextDark mt-1">Atur Waktu Anda dengan Lebih Baik</span> 
            </h1>
          </div>

          <EventForm
            onSubmit={handleAddOrUpdateEvent}
            initialData={editingEvent}
            className="flex-grow w-full max-w-lg mx-auto pb-2 overflow-y-auto min-h-0" 
          />
        </div>

        <div className="flex-2 flex flex-col justify-start overflow-y-auto p-4 custom-scrollbar space-y-4"> 
          <Dashboard events={events} currentTime={currentTime} />
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filter={filter}
            onFilterChange={setFilter}
          />
          <EventList
            events={events}
            onToggleComplete={handleToggleComplete}
            onEdit={handleEditEvent}
            onDelete={handleDeleteEvent}
            filter={filter}
            searchTerm={searchTerm}
            currentTime={currentTime}
          />
        </div>
      </div>
    </div>
  );
}

export default App;