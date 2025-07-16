# 📚 Aplikasi Manajemen Buku Ku

## 👥 Nama & NIM Kelompok 5
- Aqsal Susandi Putra 230660221107
- Nazwa Aulia Rachma 230660221104
- Agil Putra Perdiana 230660221095
- Nisrina Salsabila 230660221016

---

## 🎯 Deskripsi Aplikasi

Bookshelfku adalah aplikasi CRUD berbasis React yang memungkinkan pengguna untuk:

- Menambahkan buku baru (dengan judul, penulis, dan kategori)
- Melihat daftar semua buku yang telah ditambahkan
- Mengedit informasi buku
- Menandai status baca: Sudah / Belum Dibaca
- Menghapus buku (dengan konfirmasi)
- Mencari buku berdasarkan judul atau penulis secara real-time

Aplikasi ini disimpan di sisi klien menggunakan `localStorage`, sehingga data tetap tersimpan meskipun browser ditutup atau direfresh.

---

## 🧱 Struktur Data

Setiap data buku disimpan dalam format berikut:

```js
{
  id: string,         // ID unik (timestamp)
  title: string,      // Judul buku
  author: string,     // Nama penulis
  type: string,       // Jenis buku (opsional)
  isRead: boolean,    // Status baca
  addedDate: string   // Tanggal penambahan
}

LINK APLIKASI
manajement-bukuku-kelompok5.netlify.app

    