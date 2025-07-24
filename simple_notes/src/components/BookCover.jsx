// src/components/BookCover.jsx
import React, { useState, useEffect } from 'react';
import styles from './BookCover.module.css';

function BookCover({ onOpenBook }) { // Prop diubah menjadi onOpenBook agar konsisten dengan App.jsx
  const [isOpening, setIsOpening] = useState(false); // State untuk mengontrol animasi pembuka

  const handleClick = () => {
    setIsOpening(true); // Mulai animasi
    // Tunggu durasi animasi (1.5s untuk putar + 1s untuk fadeOut)
    setTimeout(() => {
      onOpenBook(); // Panggil prop setelah animasi selesai
    }, 2500); // Total durasi animasi: 1500ms (rotateY) + 1000ms (opacity)
  };

  return (
    // Tambahkan class isOpening ke elemen utama untuk mengontrol semua animasi
    <div className={`${styles.bookCover} ${isOpening ? styles.openAnimation : ''}`}>
      <div className={styles.coverFront}>
        <h1 className={styles.coverTitle}>My Notes</h1>
        <p className={styles.coverSubtitle}>Catat Setiap Momen Mu</p>
        {!isOpening && ( // Sembunyikan tombol setelah mulai membuka
          <button className={styles.openButton} onClick={handleClick}>
            Buka Buku 📖
          </button>
        )}
      </div>
      <div className={styles.coverSpine}></div>
      <div className={styles.coverBack}></div>
    </div>
  );
}

export default BookCover;