📅 Task Calendar - Manajemen Tugas Interaktif  
Kelompok 3 - SI IVA  
**Anggota Kelompok:**

1. **Galih Permana Sidik** – 230660221002
2. **Dina Salwa Mannatu** – 230660221011
3. **Nisa Rahmawati** – 230660221023
4. **Fajar** – 230660221093
5. **Amelia Putri Latifah** – 230660221101
6. **Sharel Faturahman** – 230660221108

## 🎯 Tema & Deskripsi Aplikasi

**Task Calendar – Aplikasi Manajemen Tugas Interaktif**

**Deskripsi Singkat:**  
Task Calendar merupakan aplikasi manajemen tugas berbasis web yang dirancang untuk meningkatkan produktivitas dan efisiensi pengguna dalam mengatur aktivitas harian. Aplikasi ini terinspirasi dari antarmuka Google Calendar serta mengadopsi gaya desain minimalis modern seperti platform Gumroad. Dengan tampilan yang bersih dan responsif, Task Calendar mendukung pengelolaan tugas secara interaktif melalui fitur-fitur cerdas yang mudah digunakan.

**Fitur utama:**

- 🗓️ Menambahkan tugas dengan judul, deskripsi, dan tanggal deadline.
- 🔥 Menentukan prioritas tugas: **Penting**, **Normal**, atau **Santai**.
- ✅ Menandai tugas sebagai selesai atau belum.
- 🔍 Mencari tugas secara real-time melalui fitur pencarian.
- 🎵 Memutar musik dari YouTube atau Spotify sebagai teman saat bekerja.
- 🔔 Fitur pengingat tugas berbasis waktu (reminder).
- 📝 Edit tugas melalui form dinamis dan pop-up konfirmasi.
- 🧹 Hapus tugas dengan konfirmasi dialog.
- 📱 Desain responsif untuk desktop & mobile.
- 💾 Penyimpanan data menggunakan `localStorage` agar data tidak hilang saat browser ditutup.

### 🗃 Struktur Data

Setiap tugas disimpan dalam format objek JavaScript berikut:

```js
{
  id: Number,           // ID unik berbasis timestamp
  title: String,        // Judul tugas
  date: String,         // Deadline (format: YYYY-MM-DD)
  description: String,  // Deskripsi tugas
  reminderTime: String, // Waktu notifikasi (opsional, format: HH:MM)
  done: Boolean,        // Status selesai atau belum
  priority: String      // Kategori tugas: 'penting', 'normal', atau 'santai'
}
```

## 📁 Struktur Direktori

```

task-manager/
├── public/             # File statis yang disalin langsung saat build
│ └── vite.svg

├── src/                # Folder kode utama aplikasi (source code)
│ ├── assets/           # (Opsional) Gambar, ikon, font
│ ├── components/       # Komponen UI modular
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── SearchBar.jsx
│ │ └── ...
│ ├── App.jsx           # Komponen utama aplikasi
│ └── App.css           # Gaya khusus untuk App.jsx
│ ├── main.jsx          # Entry point utama ReactDOM.render()
│ └── index.css         # File CSS/Tailwind utama

├── index.html          # Template HTML utama untuk Vite
├── package.json        # Konfigurasi proyek dan dependencies
├── package-lock.json   # Lock file untuk versi dependency (otomatis)
├── vite.config.js      # Konfigurasi build Vite
├── tailwind.config.cjs # Konfigurasi Tailwind CSS
├── postcss.config.cjs  # Konfigurasi PostCSS
├── eslint.config.js    # Aturan linting JavaScript
└── README.md           # Dokumentasi proyek

```

🚀 Link Aplikasi Live

```
🌐 https://task-manager-kelompok3.netlify.app/
```
