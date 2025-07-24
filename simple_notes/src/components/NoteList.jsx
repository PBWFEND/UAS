// src/components/NoteList.jsx
import React from 'react';
import NoteItem from './NoteItem';

// REVISI: Tambahkan onToggleComplete ke props
function NoteList({ notes, onDelete, onToggleArchive, onEditRequest, onToggleFavorite, onToggleComplete }) {
  return (
    // REVISI: Menggunakan class global 'notes-grid'
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onToggleArchive={onToggleArchive}
          onEditRequest={onEditRequest}
          onToggleFavorite={onToggleFavorite}
          onToggleComplete={onToggleComplete} // <-- BARU: Teruskan prop ini
        />
      ))}
    </div>
  );
}

export default NoteList;