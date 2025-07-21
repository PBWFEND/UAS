
---  

## 👨‍👩‍👧‍👦 Kelompok 2 – Kelas SI-IVB

| NIM           | Nama               |
|---------------|--------------------|
| 230660221018  | Intan Kartika      |
| 230660221030  | Syifa Nur Insani   |
| 230660221094  | Kikania Zahra      |
| 230660221113  | Muhammad Andre     |

---  

# 🎓 Tema & Deskripsi Aplikasi (Edu-Time – Smart Activity & Time Manager for Students)

Edu-Time adalah aplikasi manajemen aktivitas dan waktu yang dirancang khusus untuk mahasiswa. Aplikasi ini membantu pengguna mencatat, mengelola, dan memantau aktivitas harian seperti tugas, ujian, dan kegiatan kuliah lainnya dengan cara yang modern, interaktif, dan mudah digunakan.  

---  

## ✨ Fitur Aplikasi

- 🌙 Dark/Light Mode: Tampilan mode gelap dan terang yang bisa diubah kapan saja.
- 🎯 Tambah Aktivitas: Masukkan judul, kategori (Tugas/Ujian), tanggal, dan deskripsi aktivitas.
- 📋 Daftar Aktivitas: Menampilkan semua aktivitas yang telah ditambahkan.
- ✅ Tandai Selesai / Belum: Tandai aktivitas sebagai selesai atau belum selesai.
- 🗑️ Edit & Hapus: Edit informasi aktivitas atau hapus jika tidak diperlukan.
- 🔍 Pencarian: Cari aktivitas berdasarkan judul.
- 🗂️ Filter Kategori: Tampilkan aktivitas berdasarkan kategori.
- 📊 Statistik Aktivitas: Lihat jumlah total, yang selesai, dan belum selesai.
- 💾 Terdapat feedback kepada pengguna berupa notifikasi ketika menambah data, mengedit dan menghapus.
- 📱 Responsive & user friendly  

---  


## 📸 Tampilan Aplikasi

### 💻 Dark Mode (Desktop) 
![dark-mode](./src/assets/tampilan-dark.png)

### ☀️ Light Mode (Desktop) 
![light-mode](./src/assets/tampilan-light.png)  

### 💻 Dark Mode (Mobile) 
![dark-mode](./src/assets/tampilan-dark-mobile.jpg)  

### ☀️ Light Mode (Mobile) 
![light-mode](./src/assets/tampilan-light-mobile.jpg)  

---

## 📚 Struktur Data Aktivitas 

{
  id: string,           // ID unik berbasis timestamp
  title: string,        // Judul aktivitas
  category: string,     // Kategori (Tugas, Ujian, dll)
  date: string,         // Tanggal aktivitas (format: YYYY-MM-DD)
  description: string,  // Deskripsi aktivitas
  isDone: boolean       // Status selesai (true/false)
}  

---  

## 🗂️ Struktur Direktori 

uas-kelompok2-4b/
├── public/
├── src/
│   ├── assets/           # Gambar
│   ├── components/       # Semua komponen UI
│   │   ├── ActivityForm.jsx
│   │   ├── ActivityItem.jsx
│   │   ├── ActivityList.jsx
│   │   ├── FilterBar.jsx
│   │   ├── SearchBar.jsx
│   │   └── StatsBox.jsx
│   ├── pages/
│   │   └── Home.jsx      # Tampilan Utama
│   ├── App.css           
│   ├── App.jsx           # State utama & handler CRUD
│   ├── index.css           
│   └── main.jsx          # Root render React
├── README.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

---  
🔗 **Link:** [Lihat Aplikasinya di Netlify](https://uas-kelompok2-4b.netlify.app)