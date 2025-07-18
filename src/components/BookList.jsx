// BookList.jsx
import BookItem from './BookItem';

function BookList({ books, onUpdate, onDelete }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <h3>Belum ada buku</h3>
          <p>Tambahkan buku pertama Anda untuk memulai koleksi</p>
        </div>
      ) : (
        books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default BookList;