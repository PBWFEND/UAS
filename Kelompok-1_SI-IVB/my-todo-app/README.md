# To Do App 

## Kelompok 1 (SI-IVB)

1. Yelly Ambarwaty - 230660221033
2. Nazwa Umaira Nanindia Ramdhani - 230660221008
3. Tika Anggraeni - 230660221098

## Tema: 
Aplikasi To Do List (To Do App)

## Deskripsi:
To Do App adalah sebuah perangkat lunak atau platform digital yang dirancang untuk membantu individu atau tim dalam mencatat, mengatur, melacak, dan mengelola tugas-tugas atau pekerjaan yang perlu diselesaikan. Fungsi utamanya adalah sebagai pengingat digital dan alat organisasi yang menggantikan metode tradisional seperti catatan kertas atau ingatan semata.

## Fitur Utama
1. Pencatatan Tugas (CRUD - Create): Pengguna dapat dengan mudah menambahkan tugas baru melalui form input. Setiap tugas memiliki judul/keterangan, status selesai/belum, tanggal ditambahkan, dan kategori. Implementasi dilakukan melalui komponen FormInput.

2. Daftar Tugas (CRUD - Read): Semua tugas yang telah ditambahkan akan ditampilkan dalam daftar yang terorganisir. Implementasi ditampilkan oleh komponen ItemList yang merender Item individual. Tugas dapat dikelompokkan berdasarkan tanggal (untuk tampilan "Upcoming") atau difilter berdasarkan kategori.

3. Penandaan Tugas Selesai (CRUD - Update): Pengguna dapat menandai tugas sebagai selesai atau belum selesai hanya dengan mengklik tombol checkbox di samping tugas. Implementasi dilakukan melalui fungsi toggleDone di App.jsx yang diteruskan ke Item.jsx. Tugas yang selesai akan memiliki tampilan yang berbeda (misalnya, teks dicoret dan latar belakang hijau).

4. Penghapusan Tugas (CRUD - Delete): Pengguna dapat menghapus tugas yang tidak lagi diperlukan dari daftar. Aplikasi akan menampilkan konfirmasi sebelum penghapusan permanen. Implementasi dilakukan melalui fungsi deleteTodo di App.jsx yang diteruskan ke Item.jsx, dengan konfirmasi window.confirm().

5. Persistensi Data Lokal: Semua data tugas (daftar tugas, status, dll.) disimpan secara lokal di browser pengguna menggunakan localStorage. Ini memastikan bahwa data tidak akan hilang meskipun browser ditutup atau halaman di-refresh. Implementasi menggunakan hook useEffect di App.jsx untuk sinkronisasi dengan localStorage.

6. Mode Terang & Gelap (Theme Toggle): Aplikasi mendukung dua tema visual: terang dan gelap. Pengguna dapat beralih antara kedua tema ini untuk kenyamanan visual, terutama dalam kondisi pencahayaan yang berbeda. Preferensi tema juga disimpan secara lokal. Implementasi menggunakan state theme di App.jsx dan variabel CSS yang diatur berdasarkan kelas light-theme atau dark-theme pada body. Tombol toggle tema ada di Sidebar.

7. Pencarian & Filter Real-time: Pengguna dapat mencari tugas berdasarkan keterangan (judul) dan memfilter daftar tugas berdasarkan kategori atau status (misalnya, hanya menampilkan tugas yang belum selesai, atau tugas dari kategori tertentu). Implementasi menggunakan komponen SearchFilter dan logika filter di App.jsx dan MainContent.jsx.

8. Navigasi Tanggal (Upcoming View): Pada tampilan "Upcoming", aplikasi menampilkan strip kalender yang memungkinkan pengguna melihat tugas berdasarkan tanggal. Pengguna dapat mengklik tanggal tertentu di strip kalender untuk melihat tugas hanya pada tanggal tersebut, atau menggunakan tombol panah untuk maju/mundur seminggu. Implementasi dilakukan di MainHeader.jsx dan MainContent.jsx dengan bantuan dateUtils.js.

9. Antarmuka Pengguna Responsif: Desain aplikasi adaptif dan berfungsi dengan baik di berbagai ukuran layar, mulai dari desktop hingga perangkat seluler. Di perangkat seluler, sidebar disembunyikan dan navigasi utama beralih ke bottom navbar. Implementasi menggunakan flexbox dan media queries di CSS global dan CSS komponen.

10. Struktur Komponen Modular: Kode dipecah menjadi komponen-komponen yang lebih kecil dan dapat digunakan kembali (misalnya, Header, Sidebar, MainContent, TransactionForm, TransactionList, TransactionItem, FilterSearch, ThemeToggle, GroupInfo). Ini membuat kode lebih mudah dikelola dan dikembangkan. Implementasi mengikuti prinsip "lifting state up" di mana state utama (daftar tugas) dikelola di App.jsx dan fungsi-fungsi penangan diteruskan sebagai props ke komponen anak.

## Link Aplikasi
https://todoapp-kelompok1.netlify.app/
