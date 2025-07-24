// BookItem.jsx
import { useState } from 'react';
import EditBookModal from './EditBookModal';

const BOOK_TYPE_LABELS = {
  'fiction': 'Fiksi',
  'non-fiction': 'Non-Fiksi',
  'biography': 'Biografi',
  'science': 'Sains',
  'history': 'Sejarah',
  'self-help': 'Pengembangan Diri'
};

function BookItem({ book, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleRead = () => {
    const updatedBook = { ...book, isRead: !book.isRead };
    onUpdate(book.id, updatedBook);
  };

  const handleSave = (updatedBook) => {
    onUpdate(book.id, updatedBook);
  };

  return (
    <>
      <div className="book-item">
        <div className="book-item-header">
          <div>
            <h3 className="book-title">{book.title}</h3>
            {book.type && (
              <span className={`book-type ${book.type}`}>
                {BOOK_TYPE_LABELS[book.type] || book.type}
              </span>
            )}
          </div>
          <span className={`book-status ${book.isRead ? 'read' : 'unread'}`}>
            {book.isRead ? 'Sudah Dibaca' : 'Belum Dibaca'}
          </span>
        </div>
        
        <p className="book-author">Oleh: {book.author}</p>
        
        <div className="book-meta">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Ditambahkan: {book.addedDate}
          </span>
        </div>
        
        <div className="book-actions">
          <button 
            onClick={toggleRead} 
            className={`btn ${book.isRead ? 'btn-warning' : 'btn-success'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {book.isRead ? (
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              ) : (
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              )}
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            {book.isRead ? 'Tandai Belum Dibaca' : 'Tandai Sudah Dibaca'}
          </button>
          
          <button 
            onClick={() => setIsEditing(true)}
            className="btn btn-secondary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            Edit
          </button>
          
          <button 
            onClick={() => onDelete(book.id)} 
            className="btn btn-danger"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Hapus
          </button>
        </div>
      </div>
      
      {isEditing && (
        <EditBookModal
          book={book}
          onClose={() => setIsEditing(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
}

export default BookItem;