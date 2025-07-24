// src/components/BookPageContainer.jsx
import React from 'react';
// import styles from './BookPageContainer.module.css'; // <-- HAPUS BARIS INI!

function BookPageContainer({ children, isVisible }) {
  const containerClasses = [
    "book-page-container", // Nama kelas global
    isVisible ? "book-page-visible" : "" // Kelas global untuk visibilitas
  ].join(' ').trim();

  return (
    <div className={`${containerClasses} glassmorphism`}> {/* <-- Tambahkan glassmorphism di sini */}
      {children} {/* Konten aplikasi akan dirender di sini */}
    </div>
  );
}

export default BookPageContainer;