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

Disamakan dengan ID:

film.id === updatedFilm.id ? updatedFilm : film
4. Saat disimpan ke localStorage:

localStorage.setItem("films", JSON.stringify(films));

    Disimpan dalam bentuk JSON array yang berisi objek-objek film

    
link aplikasi live : https://film-manager-wens.netlify.app/