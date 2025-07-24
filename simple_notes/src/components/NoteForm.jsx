// src/components/NoteForm.jsx
import React, { useState, useEffect } from 'react';
import { showToast } from '../utils/toast';

function NoteForm({ addNote, editingNote, onUpdateNote, onCancelEdit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxChars = 50;

  const [type, setType] = useState('note');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setBody(editingNote.body);
      setCharCount(editingNote.title.length);
      setType(editingNote.type || 'note');
      setDeadline(editingNote.deadline ? editingNote.deadline.substring(0, 10) : '');
    } else {
      setTitle('');
      setBody('');
      setCharCount(0);
      setType('note');
      setDeadline('');
    }
  }, [editingNote]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !body.trim()) {
      showToast('Judul dan isi catatan tidak boleh kosong!', 'error');
      return;
    }

    const finalDeadline = type === 'task' && deadline ? deadline : null;

    if (editingNote) {
      onUpdateNote({
        id: editingNote.id,
        title,
        body,
        type,
        deadline: finalDeadline,
      });
    } else {
      addNote({
        title,
        body,
        type,
        deadline: finalDeadline,
      });
    }
    setTitle('');
    setBody('');
    setCharCount(0);
    setType('note');
    setDeadline('');
  };

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= maxChars) {
      setTitle(newTitle);
      setCharCount(newTitle.length);
    }
  };

  return (
    <div className="note-form-container glassmorphism">
      <h3>{editingNote ? 'Edit Catatan / Tugas' : 'Buat Catatan Baru'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Judul Catatan/Tugas"
          maxLength={maxChars}
          required
          className="glassmorphism" 
        />
        <p className="char-count">{maxChars - charCount} karakter tersisa</p>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Isi catatan atau deskripsi tugas..."
          required
          className="glassmorphism"
        ></textarea>

        <div className="form-group type-selector">
          <label>
            <input
              type="radio"
              value="note"
              checked={type === 'note'}
              onChange={() => setType('note')}
            />
            Catatan
          </label>
          <label>
            <input
              type="radio"
              value="task"
              checked={type === 'task'}
              onChange={() => setType('task')}
            />
            Tugas
          </label>
        </div>

        {type === 'task' && (
          <div className="form-group deadline-input">
            <label htmlFor="deadline">Deadline:</label>
            <input
              type="date"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="glassmorphism"
            />
          </div>
        )}

        <div className="form-actions">
          <button type="submit" className="glassmorphism">
            {editingNote ? 'Perbarui' : 'Tambahkan'}
          </button>
          {editingNote && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="cancel-button glassmorphism"
            >
              Batal Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default NoteForm;