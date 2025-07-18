// BookForm.jsx
import { useState } from 'react';

const BOOK_TYPES = [
  { value: 'fiction', label: 'Fiksi' },
  { value: 'non-fiction', label: 'Non-Fiksi' },
  { value: 'biography', label: 'Biografi' },
  { value: 'science', label: 'Sains' },
  { value: 'history', label: 'Sejarah' },
  { value: 'self-help', label: 'Pengembangan Diri' },
];

function BookForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      setError('Judul dan penulis wajib diisi!');
      return;
    }

    const newBook = {
      id: String(+new Date()),
      title: title.trim(),
      author: author.trim(),
      type: type || undefined,
      isRead: false,
      addedDate: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
    };
    
    onAdd(newBook);
    setTitle('');
    setAuthor('');
    setType('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && (
        <div className="alert alert-error">{error}</div>
      )}
      
      <div className="form-group">
        <label htmlFor="title" className="form-label">Judul Buku</label>
        <input
          id="title"
          type="text"
          placeholder="Masukkan judul buku"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="author" className="form-label">Nama Penulis</label>
        <input
          id="author"
          type="text"
          placeholder="Masukkan nama penulis"
          className="form-input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="type" className="form-label">Jenis Buku (Opsional)</label>
        <select
          id="type"
          className="form-select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Pilih Jenis Buku</option>
          {BOOK_TYPES.map(bookType => (
            <option key={bookType.value} value={bookType.value}>
              {bookType.label}
            </option>
          ))}
        </select>
      </div>
      
      <button type="submit" className="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Tambah Buku
      </button>
    </form>
  );
}

export default BookForm;