// src/components/NoteItem.jsx
import React from 'react';
// import styles from './NoteItem.module.css'; // <-- PASTIKAN BARIS INI TIDAK ADA (SUDAH DIHAPUS)
import { showFormattedDate } from '../utils/data';

function NoteItem({ note, onDelete, onToggleArchive, onEditRequest, onToggleFavorite, onToggleComplete }) {
  const isOverdue = note.type === 'task' && !note.isCompleted && note.deadline && new Date(note.deadline) < new Date();

  return (
    <div className={`note-item glassmorphism ${note.archived ? 'archived-item' : ''} ${isOverdue ? 'overdue-task' : ''} ${note.isCompleted ? 'completed-task' : ''}`}>
      <div className="note-content">
        <h3 className="note-title">{note.title}</h3>
        
        {note.type === 'task' && note.deadline && (
          <p className="note-deadline">
            **Deadline:** {showFormattedDate(note.deadline)}
          </p>
        )}

        <p className="note-body">{note.body}</p>
        <p className="note-date">Dibuat pada: {showFormattedDate(note.createdAt)}</p>
      </div>

      <div className="note-actions">
        {note.type === 'task' && (
          <button
            className={`action-button complete-button ${note.isCompleted ? 'completed' : ''}`}
            onClick={() => onToggleComplete(note.id)}
            title={note.isCompleted ? 'Batalkan Selesai' : 'Tandai Selesai'}
          >
            {note.isCompleted ? '✅' : '⏳'}
          </button>
        )}

        <button
          onClick={() => onToggleFavorite(note.id)}
          className={`action-button favorite-button ${note.favorite ? 'favorited' : ''}`}
          title={note.favorite ? 'Hapus dari favorit' : 'Tambahkan ke favorit'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={note.favorite ? 'var(--color-autumn-orange)' : 'none'}
            stroke={note.favorite ? 'var(--color-autumn-orange)' : 'currentColor'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </button>

        <button className="action-button edit-button" onClick={() => onEditRequest(note)} title="Edit Catatan">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          Edit
        </button>

        <button
          onClick={() => onDelete(note.id)}
          className="action-button delete-button"
          title="Hapus Catatan"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          Hapus
        </button>

        <button
          onClick={() => onToggleArchive(note.id)}
          className={`action-button archive-button ${note.archived ? 'unarchive' : ''}`}
          title={note.archived ? 'Kembalikan dari Arsip' : 'Arsipkan Catatan'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
          {note.archived ? 'Aktifkan' : 'Arsipkan'}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;