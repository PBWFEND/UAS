Kelompok 4 
Kelas A semester 4
Anggota: 
Wendi Feriyanda (230660221026)
Sesi Pramesti (230660221017)
Lala Jalaliah (230660221019)
Amelia Oktaviani (230660221127)
Yulia Rizky Afifah (230660221090)
Clara Desmiati (230660221005)

Tema Proyek: 🎬 Manajemen Film Pribadi

📌 Penjelasan Tema:
Sebuah aplikasi berbasis web untuk membantu pengguna mencatat, mengelola, dan melacak daftar film yang ingin atau telah ditonton, dengan tampilan modern, ringan, dan dukungan mode gelap.

🎯 Tujuan Proyek:
- Membantu pengguna menyimpan daftar film favorit
- Memberi informasi apakah film sudah ditonton atau belum
- Bisa melakukan tambah, edit, hapus, cari, dan filter
- Menyediakan pengalaman interaktif dengan notifikasi toast dan UI elegan

💡 Fitur-Fitur yang Mendukung Tema:
<<<<<<< HEAD
=======

>>>>>>> dc9ed1671449c0f74ba55c2eaf623b9a4b0841a5
Fitur	Deskripsi
➕ Tambah Film	Masukkan judul, sutradara, dan status
✅❌ Status Tontonan	Tandai apakah sudah/ belum ditonton
✏️ Edit & 🗑 Hapus	Modifikasi atau hapus film dengan mudah
🔍 Pencarian	Cari film berdasarkan judul
🎛 Filter	Tampilkan hanya film yang sudah / belum ditonton
🌗 Mode Gelap	Tema terang & gelap modern
🔔 Toast Notification	Pemberitahuan visual untuk aksi pengguna
💾 localStorage	Data tersimpan di browser, tidak hilang saat refresh

🛠 Stack Teknologi:
- React.js → Library UI
- Tailwind CSS → Styling responsif dan dark mode
- Vite → Build tool modern
- localStorage → Penyimpanan data di browser

<<<<<<< HEAD
=======
🧱 STRUKTUR OBJEK UTAMA: film

Setiap film yang ditambahkan ke daftar akan disimpan dalam bentuk objek
📦 DI MANA OBJEK INI DIGUNAKAN?
1. Di dalam state utama React (App.jsx)
const [films, setFilms] = useState([]);
films adalah array dari objek film
2. Saat menambahkan film baru:
const filmData = {
  id: Date.now(),
  title,
  director,
  watched
};
addFilm(filmData);
3. Saat mengedit:

<<<<<<< HEAD
Disamakan dengan ID:
=======
```javascript
// HANYA CONTOH
{
  id: string,         // ID unik (timestamp string)
  title: string,      // Judul buku
  author: string,     // Nama penulis
  isRead: boolean,    // Status sudah dibaca/belum
  addedDate: string   // Tanggal penambahan (format lokal)
}
```
Persistensi Data (Wajib)
>>>>>>> upstream/main

film.id === updatedFilm.id ? updatedFilm : film
4. Saat disimpan ke localStorage:

<<<<<<< HEAD
localStorage.setItem("films", JSON.stringify(films));
=======
C. Persyaratan Teknis & Fungsionalitas Wajib
>>>>>>> upstream/main

    Disimpan dalam bentuk JSON array yang berisi objek-objek film

<<<<<<< HEAD
    
link aplikasi live : https://film-manager-wens.netlify.app/
>>>>>>> dc9ed1671449c0f74ba55c2eaf623b9a4b0841a5
=======
1. Struktur & State Management (Bobot: 25%)

- Gunakan Vite untuk inisialisasi proyek.
- Terapkan konsep _"lifting state up"_: `State` utama (array data) harus berada di komponen level atas (`App.jsx`) dan fungsi `handler` (untuk CRUD) dioper ke komponen anak melalui props.
- Buat komponen yang logis dan dapat digunakan kembali (misal: `FormInput`, `ItemList`, `Item`).

2. Fungsionalitas `CRUD (Create, Read, Update, Delete)` (Bobot: 40%)

- **CREATE**: Sediakan form untuk menambah data baru. Form harus menyertakan validasi dasar (misal: input utama tidak boleh kosong).

- **READ**: Tampilkan semua data yang ada dengan jelas.

  - (Nilai Plus): Jika data dapat dikelompokkan berdasarkan kategori atau status (misal: "Tugas Belum Selesai" dan "Tugas Selesai").

- **UPDATE**: Sediakan cara untuk mengubah data yang sudah ada.

  - **Minimal**: Pengguna harus bisa mengubah satu properti (misal: mengubah status dari "belum selesai" menjadi "selesai").
  - (Nilai Plus): Adanya fungsionalitas edit penuh melalui sebuah form.

- **DELETE**: Sediakan tombol untuk menghapus data. Wajib menampilkan dialog konfirmasi (`gunakan window.confirm()`) sebelum data dihapus permanen.

3. UI/UX & Interaktivitas (Bobot: 20%)

- Desain Antarmuka: Tampilan harus bersih, rapi, dan mudah dipahami oleh pengguna.

- **Umpan Balik (Feedback)**: Berikan umpan balik yang jelas kepada pengguna (misal: `form` dikosongkan setelah `submit` berhasil, notifikasi sederhana, dll).

- **Fitur Pencarian/Filter**: Wajib ada fitur untuk mencari atau memfilter data berdasarkan salah satu propertinya secara `real-time.`

4. Deployment & Kualitas Kode (Bobot: 15%)

- Kode harus bersih, terstruktur, dan mudah dibaca.

- Unggah proyek ke repositori `GitHub`.

- Deploy aplikasi Anda ke `Vercel` atau `Netlify` dan pastikan berfungsi dengan baik.

D. Kriteria Penilaian Rinci

| Kriteria | Bobot |
|----------|-------|
| Fungsionalitas CRUD Lengkap & Benar | 40% |
| Manajemen State, Props, & Alur Data | 25% |
| Desain UI/UX dan Interaktivitas Pengguna | 20% |
| Kualitas Kode, Deployment, & Dokumentasi | 15% |
| Total | 100% |

E. Prosedur Pengumpulan

1. Buat file `README.md` yang informatif di dalam repositori GitHub Anda.
2. File README.md wajib berisi:

   - **Nama Kelompok & NIM** Anda.
   - **Tema & Deskripsi Aplikasi:** Jelaskan aplikasi apa yang Anda buat dan fitur-fiturnya.
   - **Struktur Data**: Jelaskan struktur objek yang Anda gunakan untuk aplikasi Anda.
   - **Link Aplikasi Live**: URL Vercel/Netlify Anda yang sudah berfungsi.

3. Push ke repositori https://github.com/PBWFEND/UAS
>>>>>>> upstream/main
