**Anggota Kelompok 2:**

1. **Dede Dian Permana** – 230660221010
2. **Elangga Yudistira** – 230660221109
3. **Yoga Triadi Apriawan Putra** – 230660221111
4. **Febry Nursyahbriyana** – 230660221015
5. **Billy Apandi Sastra** – 230660221112
6. **Ade Yusup Maulana** – 230660221009

📋 Habit Tracker - Aplikasi Pelacak Kebiasaan
Habit Tracker adalah aplikasi sederhana berbasis React yang memungkinkan pengguna untuk mencatat, memperbarui, dan menghapus kebiasaan mereka sehari-hari. Aplikasi ini dirancang dengan antarmuka yang bersih, fitur mode gelap, dan disimpan sepenuhnya di sisi klien menggunakan localStorage.

✨ Fitur Utama
✅ CRUD Lengkap

Tambah, tampilkan, edit, dan hapus data habit.

🔍 Pencarian Real-Time

Cari habit berdasarkan judul dengan input pencarian langsung.

🌗 Mode Gelap & Terang

Ubah tampilan aplikasi sesuai preferensi.

🔁 Edit dan Tandai Selesai

Bisa mengedit habit atau menandai jika sudah dilakukan.

💾 Penyimpanan Otomatis

Data tetap tersimpan walau browser ditutup, karena disimpan di localStorage.

🔔 Notifikasi / Feedback

Terdapat feedback saat mleakukan tambah, edit atau saat habit dihapus.

🚀 🔗 Link Aplikasi Live (VERCEL)
https://habit-tracker-lilac-delta.vercel.app/

📁 Struktur Data
js
Copy
Edit
{
  id: string,         // ID unik (timestamp)
  title: string,      // Judul kebiasaan
  description: string // Deskripsi opsional
  done: boolean       // Status sudah/sedang dikerjakan
}

📁 Struktur Direktori

task-manager/
├── public/             # File statis yang disalin langsung saat build
│ └── vite.svg
├── src/                # Folder kode utama aplikasi (source code)
│ ├── assets/           # (Opsional) Gambar, ikon, font
│ ├── components/       # Komponen UI modular
│ │ ├── HabitForm.jsx
│ │ ├── HabitItem.css
│ │ ├── HabitList.jsx
│ │ └── Searchbar.jsx
│ ├── App.css           # Gaya khusus untuk App.jsx
│ └── App.jsx           # Komponen utama aplikasi
│ ├── index.css         # File CSS/Tailwind utama
│ └── main.jsx          # Entry point utama ReactDOM.render()
│
│
├── index.html          # Template HTML utama untuk Vite
├── package-lock.json   # Lock file untuk versi dependency (otomatis)
├── package.json        # Konfigurasi proyek dan dependencies
├── README.md           # Dokumentasi proyek
├── tailwind.config.cjs # Konfigurasi Tailwind CSS
└── vite.config.js      # Konfigurasi build Vite 



