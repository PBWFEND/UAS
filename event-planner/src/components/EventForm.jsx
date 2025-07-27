import React, { useState, useEffect } from 'react';

function EventForm({ onSubmit, initialData, className }) {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) {
      setEventName(initialData.eventName || '');
      setDate(initialData.date || '');
      setTime(initialData.time || '');
      setLocation(initialData.location || '');
      setDescription(initialData.description || '');
    } else {
      setEventName('');
      setDate('');
      setTime('');
      setLocation('');
      setDescription('');
    }
    setError('');
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eventName.trim() || !date.trim()) {
      setError('Nama kegiatan dan Tanggal wajib diisi!');
      return;
    }

    const newEvent = {
      id: initialData ? initialData.id : String(Date.now()),
      eventName: eventName.trim(),
      date: date.trim(),
      time: time.trim(),
      location: location.trim(),
      description: description.trim(),
      isCompleted: initialData ? initialData.isCompleted : false,
    };

    onSubmit(newEvent);
    setError('');
    if (!initialData) {
      setEventName('');
      setDate('');
      setTime('');
      setLocation('');
      setDescription('');
    }
  };

  const inputClasses = "w-full p-2 bg-glassBgLight/50 border border-glassBorder rounded-lg " + 
                       "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent " +
                       "transition duration-200 ease-in-out font-body text-glassTextDark placeholder-glassPlaceholder text-sm"; 
  const labelClasses = "block text-glassTextDark text-sm font-semibold mb-1"; 

  return (
    <form onSubmit={handleSubmit} className={`p-4 bg-glassBgLight rounded-3xl shadow-glass-xl backdrop-blur-md border border-glassBorder ${className || ''}`}>
      <h2 className="text-xl font-heading font-bold text-glassTextDark mb-6 text-center"> {}
        {initialData ? 'Edit Kegiatan' : 'Tambah Kegiatan Baru'}
      </h2>
      {error && (
        <p className="bg-danger/10 border border-danger text-danger px-3 py-2 rounded-md relative mb-3 text-xs font-body" role="alert"> {}
          {error}
        </p>
      )}

      <div className="mb-4"> {}
        <label htmlFor="eventName" className={labelClasses}>Nama Kegiatan <span className="text-danger">*</span></label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className={inputClasses}
          placeholder=""
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> {}
        <div>
          <label htmlFor="date" className={labelClasses}>Tanggal <span className="text-danger">*</span></label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClasses}
            required
          />
        </div>
        <div>
          <label htmlFor="time" className={labelClasses}>Waktu</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mb-4"> {}
        <label htmlFor="location" className={labelClasses}>Lokasi</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={inputClasses}
          placeholder=""
        />
      </div>

      <div className="mb-6"> {}
        <label htmlFor="description" className={labelClasses}>Deskripsi</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="2" 
          className={`${inputClasses} resize-none`}
          placeholder=""
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-primary to-secondary text-glassTextLight font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75 transition duration-300 ease-in-out w-full text-base shadow-glass-md hover:shadow-glass-lg active:shadow-glass-sm" 
      >
        {initialData ? 'Simpan Perubahan' : 'Tambah Kegiatan'}
      </button>
    </form>
  );
}

export default EventForm;