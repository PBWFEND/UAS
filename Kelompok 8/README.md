# 📝 Manajemen Tugas – UAS Pemrograman Berbasis Web

Aplikasi ini dikembangkan oleh **Kelompok 8** untuk menyelesaikan UAS mata kuliah _Pemrograman Berbasis Web_.  
Fungsi utama aplikasi adalah untuk mencatat, mengelola, dan memantau penyelesaian tugas dengan antarmuka yang interaktif dan penyimpanan lokal.

## 👨‍💻 Anggota Kelompok:

1. Ghatan Zalfaa Kautsar – 230660221001
2. Ridho Akmal Aulia – 230660221024
3. Miftar Nur Awaludyn – 230660221097
4. Wildan Raifaldhy – 230660221003

---

## ⚙️ Fitur Aplikasi (CRUD)

- **CREATE**: Tambah tugas baru melalui form input
- **READ**: Lihat daftar semua tugas yang telah dibuat
- **UPDATE**:
  - Tandai tugas sebagai selesai/belum selesai
  - Edit nama tugas langsung melalui tombol edit
- **DELETE**: Hapus tugas dengan konfirmasi `window.confirm()`
- **Search/Filter**: Cari tugas berdasarkan judul secara real-time

---

## 🧠 Struktur Data

```js
{
  id: number,
  title: string,
  date: string,
  isDone: boolean
}
```

---

## 📂 Struktur Folder Utama:

```/src
├── App.jsx
├── main.jsx
├── index.css
└── components/
├── FormInput.jsx
├── TaskItem.jsx
└── TaskList.jsx
index.html
package.json
vite.config.js
.gitignore
README.md

---

## 🔗 Link Deploy

```

**Vercel:** [https://manajementugas.vercel.app/]
**Repo GitHub:** [https://github.com/230660221001/UAS.git]

---

## 🚀 Cara Menjalankan di Lokal

Clone repo:

```bash
git clone https://github.com/230660221001/UAS.git
cd UAS
npm install
npm run dev
```

---

## 🧾 Lisensi

Hak Cipta © 2025 – Kelompok 8 – FTI UNSAP Sumedang
