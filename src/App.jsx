// App.jsx
import { useEffect, useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('bookshelf-books');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem('bookshelf-books', JSON.stringify(books));
  }, [books]);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addBook = (book) => {
    setBooks([...books, book]);
    showNotification('Buku berhasil ditambahkan!');
  };

  const updateBook = (id, updatedBook) => {
    setBooks(books.map((book) => (book.id === id ? updatedBook : book)));
    showNotification('Buku berhasil diperbarui!');
  };

  const deleteBook = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus buku ini?')) {
      setBooks(books.filter((book) => book.id !== id));
      showNotification('Buku berhasil dihapus!', 'error');
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
        Manajemen Buku Ku
      </h1>
      
      {notification && (
        <div className={`alert alert-${notification.type}`}>
          {notification.message}
        </div>
      )}

      <BookForm onAdd={addBook} />
      
      <SearchBar onSearch={handleSearch} />
      
      <BookList 
        books={filteredBooks} 
        onUpdate={updateBook} 
        onDelete={deleteBook} 
      />
    </div>
  );
}

export default App;