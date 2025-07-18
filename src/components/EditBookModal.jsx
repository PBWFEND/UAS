// EditBookModal.jsx
import { useState, useEffect } from 'react';

const BOOK_TYPES = [
  { value: 'fiction', label: 'Fiksi' },
  { value: 'non-fiction', label: 'Non-Fiksi' },
  { value: 'biography', label: 'Biografi' },
  { value: 'science', label: 'Sains' },
  { value: 'history', label: 'Sejarah' },
  { value: 'self-help', label: 'Pengembangan Diri' },
];

function EditBookModal({ book, onClose, onSave }) {
  const [editedBook, setEditedBook] = useState({ ...book });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setEditedBook({ ...book });
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi
    const newErrors = {};
    if (!editedBook.title.trim()) newErrors.title = 'Judul wajib diisi';
    if (!editedBook.author.trim()) newErrors.author = 'Penulis wajib diisi';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave(editedBook);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Edit Buku</h3>
          <button onClick={onClose} className="modal-close">
            &times;
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Judul Buku</label>
            <input
              type="text"
              name="title"
              value={editedBook.title}
              onChange={handleChange}
              className={errors.title ? 'error' : ''}
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>
          
          <div className="form-group">
            <label>Penulis</label>
            <input
              type="text"
              name="author"
              value={editedBook.author}
              onChange={handleChange}
              className={errors.author ? 'error' : ''}
            />
            {errors.author && <span className="error-message">{errors.author}</span>}
          </div>
          
          <div className="form-group">
            <label>Jenis Buku</label>
            <select 
              name="type"
              value={editedBook.type || ''}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Pilih Jenis Buku</option>
              {BOOK_TYPES.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="isRead"
              name="isRead"
              checked={editedBook.isRead}
              onChange={(e) => setEditedBook(prev => ({
                ...prev,
                isRead: e.target.checked
              }))}
            />
            <label htmlFor="isRead">Sudah dibaca</label>
          </div>
          
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Batal
            </button>
            <button type="submit" className="btn btn-primary">
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBookModal;