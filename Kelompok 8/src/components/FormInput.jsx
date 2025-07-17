import React, { useState } from 'react';

function FormInput({ onAdd }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) return alert('Semua field harus diisi');
    onAdd(title, date);
    setTitle('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-input">
      <input
        type="text"
        placeholder="Nama tugas..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default FormInput;