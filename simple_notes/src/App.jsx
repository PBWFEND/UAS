// src/App.jsx
import React, { useState, useEffect } from 'react';
import BookCover from './components/BookCover';
import BookPageContainer from './components/BookPageContainer';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import FilterButtons from './components/FilterButtons';
import { showToast } from './utils/toast'; // Import toast utility

function App() {
  const initialData = [
    {
      id: '1',
      title: 'Catatan Pertama',
      body: 'Ini adalah catatan pertama Anda di aplikasi. Selamat datang!',
      archived: false,
      favorite: false,
      createdAt: new Date().toISOString(),
      type: 'note',
      deadline: null,
      isCompleted: false,
      notifiedOverdue: false,
    },
    {
      id: '2',
      title: 'Rencana Belajar ReactJS',
      body: 'Review ReactJS, CSS Modules, dan State Management.',
      archived: false,
      favorite: true,
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      type: 'note',
      deadline: null,
      isCompleted: false,
      notifiedOverdue: false,
    },
    {
      id: '3',
      title: 'Selesaikan Laporan Proyek UAS',
      body: 'Pastikan semua bagian laporan sudah lengkap dan revisi akhir.',
      archived: false,
      favorite: false,
      createdAt: new Date(Date.now() - (2 * 86400000)).toISOString(),
      type: 'task',
      deadline: new Date(Date.now() + (3 * 86400000)).toISOString(),
      isCompleted: false,
      notifiedOverdue: false,
    },
    {
      id: '4',
      title: 'Resep Kue Musim Gugur',
      body: 'Coba resep kue labu dan bumbu spekuk untuk suasana yang hangat.',
      archived: false,
      favorite: false,
      createdAt: new Date(Date.now() - (3 * 86400000)).toISOString(),
      type: 'note',
      deadline: null,
      isCompleted: false,
      notifiedOverdue: false,
    },
    {
      id: '5',
      title: 'Beli Bahan Makanan untuk Minggu Ini',
      body: 'Daftar: telur, susu, roti gandum, buah-buahan.',
      archived: false,
      favorite: false,
      createdAt: new Date(Date.now() - (4 * 86400000)).toISOString(),
      type: 'task',
      deadline: new Date(Date.now() + (1 * 86400000)).toISOString(),
      isCompleted: true,
      notifiedOverdue: false,
    },
    {
        id: '6',
        title: 'Kirim Email Balasan ke Dosen',
        body: 'Balas email dari dosen terkait revisi skripsi sebelum jam 5 sore.',
        archived: false,
        favorite: false,
        createdAt: new Date(Date.now() - (1 * 86400000)).toISOString(),
        type: 'task',
        deadline: new Date(Date.now() - (0.5 * 86400000)).toISOString(),
        isCompleted: false,
        notifiedOverdue: false,
    },
  ];

  const [notes, setNotes] = useState(initialData);
  const [showBook, setShowBook] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode-active');
    } else {
      document.body.classList.add('light-mode-active');
    }
  }, [isDarkMode]);

  const handleOpenBook = () => {
    setShowBook(true);
  };

  const addNote = ({ title, body, type, deadline }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
      favorite: false,
      type: type || 'note',
      deadline: deadline || null,
      isCompleted: false,
      notifiedOverdue: false,
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    showToast('Catatan berhasil ditambahkan!', 'success');
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    showToast('Catatan berhasil dihapus!', 'error');
  };

  const toggleArchiveNote = (id) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      );
      const noteToToggle = updatedNotes.find(note => note.id === id);
      if (noteToToggle.archived) {
        showToast('Catatan berhasil diarsipkan!', 'info');
      } else {
        showToast('Catatan dikembalikan dari arsip!', 'info');
      }
      return updatedNotes;
    });
  };

  const toggleFavoriteNote = (id) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note) =>
        note.id === id ? { ...note, favorite: !note.favorite } : note
      );
      const noteToToggle = updatedNotes.find(note => note.id === id);
      if (noteToToggle.favorite) {
        showToast('Catatan ditambahkan ke favorit!', 'success');
      } else {
        showToast('Catatan dihapus dari favorit!', 'info');
      }
      return updatedNotes;
    });
  };

  const handleEditRequest = (note) => {
    setEditingNote(note);
    showToast('Mode edit diaktifkan.', 'info');
  };

  const toggleCompleteTask = (id) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note) =>
        note.id === id ? { ...note, isCompleted: !note.isCompleted } : note
      );
      const taskToToggle = updatedNotes.find(note => note.id === id);
      if (taskToToggle && taskToToggle.type === 'task') {
        if (taskToToggle.isCompleted) {
          showToast('Tugas berhasil diselesaikan!', 'success');
        } else {
          showToast('Tugas dikembalikan ke status belum selesai.', 'info');
        }
      }
      return updatedNotes;
    });
  };

  const handleUpdateNote = ({ id, title, body, type, deadline }) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? {
          ...note,
          title,
          body,
          type: type || note.type,
          deadline: deadline || note.deadline,
        } : note
      )
    );
    setEditingNote(null);
    showToast('Catatan berhasil diperbarui!', 'success');
  };

  useEffect(() => {
    const now = new Date();
    notes.forEach(note => {
      if (note.type === 'task' && !note.isCompleted && note.deadline && !note.notifiedOverdue) {
        const deadlineDate = new Date(note.deadline);
        if (deadlineDate < now) {
          showToast(`Tugas Telat: "${note.title}" sudah melewati deadline!`, 'error');
          setNotes(prevNotes => prevNotes.map(n =>
            n.id === note.id ? { ...n, notifiedOverdue: true } : n
          ));
        }
      }
    });
  }, [notes]);


  const filteredAndSearchedNotes = notes.filter((note) => {
    let matchesFilter = true;
    if (filter === 'active') {
      matchesFilter = !note.archived;
    } else if (filter === 'archived') {
      matchesFilter = note.archived;
    } else if (filter === 'favorite') {
      matchesFilter = note.favorite;
    }

    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          note.body.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <div id="app-toast"></div>

      {!showBook && <BookCover onOpenBook={handleOpenBook} />}

      <button
        className="theme-toggle-button glassmorphism"
        onClick={() => setIsDarkMode(!isDarkMode)}
        title={isDarkMode ? 'Nyalakan Lampu (Light Mode)' : 'Matikan Lampu (Dark Mode)'}
      >
        {isDarkMode ? 'Nyalakan Lampu ☀️' : 'Matikan Lampu 🌙'}
      </button>

      <BookPageContainer isVisible={showBook}>
        <div className="app-content-wrapper">
          <div className="header-controls">
            <h1>My Notes</h1>
          </div>

          <input
            type="text"
            placeholder="🔍 Cari catatan..."
            className="search-input glassmorphism"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <NoteForm
            addNote={addNote}
            editingNote={editingNote}
            onUpdateNote={handleUpdateNote}
            onCancelEdit={() => {
              setEditingNote(null);
              showToast('Edit catatan dibatalkan.', 'info');
            }}
          />

          <h2 className="section-heading">Daftar Catatan</h2>

          <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

          {filteredAndSearchedNotes.length > 0 ? (
            <NoteList
              notes={filteredAndSearchedNotes}
              onDelete={deleteNote}
              onToggleArchive={toggleArchiveNote}
              onEditRequest={handleEditRequest}
              onToggleFavorite={toggleFavoriteNote}
              onToggleComplete={toggleCompleteTask}
            />
          ) : (
            <p className="empty-message">Tidak ada catatan yang cocok dengan filter atau pencarian Anda. Silakan tambahkan atau ubah!</p>
          )}

        </div>
      </BookPageContainer>
    </>
  );
}

export default App;