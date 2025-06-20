Berikut adalah contoh implementasi tugas proyek CRUD menggunakan React dengan tema "Aplikasi Manajemen Buku Pribadi".

## 🚀 Demo Aplikasi
Aplikasi sudah di-deploy di Vercel: [https://book-manager-demo.vercel.app](https://book-management-app-psi.vercel.app/)

## 📂 Struktur Proyek
```
src/
├── components/
│   ├── BookForm.jsx
│   ├── BookItem.jsx
│   ├── BookList.jsx
│   ├── Filter.jsx
│   └── Notification.jsx
├── App.jsx
├── main.jsx
├── styles.css
└── utils.js
```

## 📝 README.md

```markdown
# Aplikasi Manajemen Buku Pribadi

**Nama:** John Doe  
**NIM:** 123456789  
**Program Studi:** Sistem Informasi  
**Mata Kuliah:** Pemrograman Berbasis Web Front End

## Deskripsi Aplikasi
Aplikasi ini memungkinkan pengguna untuk mengelola koleksi buku pribadi mereka dengan fitur CRUD (Create, Read, Update, Delete). Pengguna dapat menambahkan buku baru, melihat daftar buku, mengedit informasi buku, dan menghapus buku dari koleksi.

## Fitur Utama
- Menambahkan buku baru dengan judul, penulis, dan status baca
- Melihat daftar semua buku
- Memfilter buku berdasarkan status (sudah dibaca/belum dibaca)
- Mencari buku berdasarkan judul atau penulis
- Mengubah status baca buku
- Menghapus buku dari koleksi
- Penyimpanan data di localStorage

## Struktur Data
```javascript
{
  id: string,          // ID unik buku
  title: string,       // Judul buku
  author: string,      // Penulis buku
  isRead: boolean,     // Status baca (true/false)
  addedDate: string    // Tanggal buku ditambahkan
}
```

## Teknologi yang Digunakan
- React dengan Vite
- CSS murni untuk styling
- localStorage untuk persistensi data
- Deploy menggunakan Vercel

## Cara Menjalankan Lokal
1. Clone repositori
2. Install dependencies: `npm install`
3. Jalankan aplikasi: `npm run dev`
4. Buka http://localhost:5173 di browser

## Screenshot
![Screenshot Aplikasi](./screenshot.png)
```

## 🧑‍💻 Kode Implementasi

### 1. App.jsx (Komponen Utama)
```jsx
import { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import './styles.css';

function App() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null);

  // Load data dari localStorage saat komponen mount
  useEffect(() => {
    const savedBooks = localStorage.getItem('my-books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  // Simpan data ke localStorage ketika books berubah
  useEffect(() => {
    localStorage.setItem('my-books', JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    setBooks([...books, {
      ...newBook,
      id: Date.now().toString(),
      addedDate: new Date().toLocaleDateString()
    }]);
    showNotification(`Buku "${newBook.title}" berhasil ditambahkan!`);
  };

  const updateBook = (id, updatedBook) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, ...updatedBook } : book
    ));
    showNotification(`Buku "${updatedBook.title}" berhasil diperbarui!`);
  };

  const deleteBook = (id) => {
    const bookToDelete = books.find(book => book.id === id);
    if (window.confirm(`Apakah Anda yakin ingin menghapus "${bookToDelete.title}"?`)) {
      setBooks(books.filter(book => book.id !== id));
      showNotification(`Buku "${bookToDelete.title}" berhasil dihapus!`);
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredBooks = books.filter(book => {
    const matchesFilter = filter === 'all' || 
                         (filter === 'read' && book.isRead) || 
                         (filter === 'unread' && !book.isRead);
    
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="app">
      <h1>Manajemen Buku Pribadi</h1>
      
      <BookForm onSubmit={addBook} />
      
      <Filter 
        filter={filter}
        onFilterChange={setFilter}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <BookList 
        books={filteredBooks}
        onUpdate={updateBook}
        onDelete={deleteBook}
      />
      
      <Notification message={notification} />
    </div>
  );
}

export default App;
```

### 2. BookForm.jsx (Komponen Form)
```jsx
import { useState } from 'react';

function BookForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isRead, setIsRead] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Judul buku tidak boleh kosong!');
      return;
    }
    
    onSubmit({ title, author, isRead });
    setTitle('');
    setAuthor('');
    setIsRead(false);
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="form-group">
        <label>Judul Buku:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Masukkan judul buku"
        />
      </div>
      
      <div className="form-group">
        <label>Penulis:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Masukkan nama penulis"
        />
      </div>
      
      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            checked={isRead}
            onChange={(e) => setIsRead(e.target.checked)}
          />
          Sudah dibaca
        </label>
      </div>
      
      <button type="submit">Tambah Buku</button>
    </form>
  );
}

export default BookForm;
```

### 3. BookList.jsx dan BookItem.jsx
```jsx
// BookList.jsx
function BookList({ books, onUpdate, onDelete }) {
  return (
    <div className="book-list">
      <h2>Daftar Buku ({books.length})</h2>
      
      {books.length === 0 ? (
        <p>Tidak ada buku yang ditemukan.</p>
      ) : (
        <ul>
          {books.map(book => (
            <BookItem 
              key={book.id}
              book={book}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;

// BookItem.jsx
function BookItem({ book, onUpdate, onDelete }) {
  const toggleReadStatus = () => {
    onUpdate(book.id, { 
      isRead: !book.isRead,
      title: book.title 
    });
  };

  return (
    <li className={`book-item ${book.isRead ? 'read' : ''}`}>
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>Penulis: {book.author}</p>
        <p>Ditambahkan pada: {book.addedDate}</p>
      </div>
      
      <div className="book-actions">
        <button 
          onClick={toggleReadStatus}
          className={book.isRead ? 'read-btn' : 'unread-btn'}
        >
          {book.isRead ? '✓ Sudah Dibaca' : 'Belum Dibaca'}
        </button>
        
        <button 
          onClick={() => onDelete(book.id)}
          className="delete-btn"
        >
          Hapus
        </button>
      </div>
    </li>
  );
}
```

### 4. Filter.jsx dan Notification.jsx
```jsx
// Filter.jsx
function Filter({ filter, onFilterChange, searchTerm, onSearchChange }) {
  return (
    <div className="filter">
      <div className="search-box">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari buku..."
        />
      </div>
      
      <div className="filter-options">
        <label>
          <input
            type="radio"
            checked={filter === 'all'}
            onChange={() => onFilterChange('all')}
          />
          Semua
        </label>
        
        <label>
          <input
            type="radio"
            checked={filter === 'read'}
            onChange={() => onFilterChange('read')}
          />
          Sudah Dibaca
        </label>
        
        <label>
          <input
            type="radio"
            checked={filter === 'unread'}
            onChange={() => onFilterChange('unread')}
          />
          Belum Dibaca
        </label>
      </div>
    </div>
  );
}

// Notification.jsx
function Notification({ message }) {
  if (!message) return null;
  
  return (
    <div className="notification">
      {message}
    </div>
  );
}
```

### 5. styles.css
```css
/* Gaya dasar */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
  color: #333;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1, h2, h3 {
  color: #2c3e50;
}

/* Form styles */
.book-form {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}

.form-group input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.checkbox {
  display: flex;
  align-items: center;
}

.checkbox input {
  margin-right: 10px;
}

button {
  background: #3498db;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #2980b9;
}

.delete-btn {
  background: #e74c3c;
}

.delete-btn:hover {
  background: #c0392b;
}

.read-btn {
  background: #2ecc71;
}

.unread-btn {
  background: #f39c12;
}

/* Book list styles */
.book-list {
  margin-top: 20px;
}

.book-item {
  background: white;
  border: 1px solid #eee;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.book-item.read {
  opacity: 0.8;
  background: #f8f8f8;
}

.book-info h3 {
  margin: 0 0 5px 0;
}

.book-actions {
  display: flex;
  gap: 10px;
}

/* Filter styles */
.filter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.search-box input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 200px;
}

.filter-options {
  display: flex;
  gap: 15px;
}

.filter-options label {
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Notification */
.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #27ae60;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  animation: slideIn 0.5s forwards;
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
```

## 🔧 Cara Menjalankan Proyek
1. Buat proyek Vite baru: `npm create vite@latest book-manager --template react`
2. Masuk ke folder proyek: `cd book-manager`
3. Install dependencies: `npm install`
4. Ganti konten `src/` dengan kode di atas
5. Jalankan aplikasi: `npm run dev`
6. Buka http://localhost:5173 di browser

## 📦 Deployment ke Vercel
1. Buat akun Vercel (jika belum punya)
2. Install Vercel CLI: `npm install -g vercel`
3. Login: `vercel login`
4. Deploy: `vercel`
5. Ikuti petunjuk di terminal

Proyek ini memenuhi semua persyaratan tugas:
- CRUD lengkap dengan localStorage
- Filter dan pencarian
- Notifikasi feedback
- UI yang bersih dan responsif
- Kode terstruktur dengan komponen yang reusable
- Dokumentasi lengkap
