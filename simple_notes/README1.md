# MyNotes App: Simple Notes with Glassmorphism Theme

**Kelompok/Kelas:** Kelompok 5/SI-IVB
**Anggota Kelompok & NIM:**
* Aisyah Triwulandari - [230660221084]
* Intan Nurdewi Sekrnasih - [230660221089]
* Marsya Anastasya - [230660221100]
* Talitha Ardelia Ivana - [230660221114]


## Tema & Deskripsi Aplikasi

**MyNotes App** adalah aplikasi pencatat digital yang mengusung tema **Simple Notes** dengan estetika modern **Glassmorphism**. Aplikasi ini dirancang untuk menyediakan cara yang bersih, minimalis, dan intuitif bagi pengguna untuk mengelola catatan dan tugas sehari-hari mereka. Dengan fokus pada kesederhanaan dan keindahan visual, MyNotes App memastikan pengalaman mencatat yang menyenangkan dan efisien.

**Fitur Utama:**

* **Pencatatan Fleksibel:** Pengguna dapat membuat dua jenis catatan:
    * **Catatan Umum:** Untuk ide, informasi penting, atau coretan singkat.
    * **Tugas:** Dengan kemampuan untuk menambahkan tanggal deadline dan menandainya sebagai selesai.
* **Antarmuka Minimalis dengan Glassmorphism:** Desain UI yang memukau dengan efek transparan dan blur pada elemen, menciptakan kedalaman visual dan tampilan yang canggih yang selaras dengan tema "Simple Notes".
* **Dua Mode Tema:** Dukungan penuh untuk mode gelap (Dark Mode) dan mode terang (Light Mode) yang dapat diubah secara instan, menyesuaikan preferensi visual pengguna dan mengurangi kelelahan mata. Tema ini juga mengubah gambar latar belakang untuk pengalaman yang imersif.
* **Pencarian Instan:** Fitur pencarian yang responsif memungkinkan pengguna menemukan catatan dengan cepat berdasarkan judul atau isi.
* **Filter Catatan:** Saring catatan berdasarkan status (Aktif, Diarsipkan) dan jenis (Semua, Catatan, Tugas) untuk navigasi yang lebih terorganisir.
* **Manajemen Catatan Lengkap:**
    * **Edit Catatan:** Modifikasi judul, isi, atau deadline tugas yang sudah ada.
    * **Arsipkan/Batal Arsipkan:** Simpan catatan yang tidak aktif tanpa menghapusnya, menjaga kebersihan daftar catatan utama.
    * **Hapus Catatan:** Hapus catatan yang tidak lagi diperlukan secara permanen.
    * **Tandai Favorit:** Tandai catatan penting agar mudah ditemukan.
* **Responsif:** Aplikasi dirancang agar berfungsi dengan baik dan terlihat indah di berbagai ukuran layar, mulai dari desktop hingga perangkat seluler.
* **Notifikasi Toast:** Memberikan *feedback* visual yang ringkas dan informatif untuk setiap aksi pengguna (misalnya, "Catatan berhasil ditambahkan!").


## Struktur Data

Aplikasi ini mengelola catatan dalam bentuk objek JavaScript. Setiap objek catatan memiliki struktur yang konsisten dengan properti-properti berikut:

```javascript
{
  id: string,          // ID unik untuk setiap catatan (menggunakan `+new Date()` atau serupa)
  title: string,       // Judul catatan
  body: string,        // Isi detail catatan
  createdAt: string,   // Timestamp pembuatan catatan (misal: "2023-10-26T10:00:00.000Z")
  archived: boolean,   // Status arsip catatan (true jika diarsipkan, false jika aktif)
  favorite: boolean,   // Status favorit (true jika favorit, false jika tidak)
  type: 'note' | 'task', // Tipe catatan ('note' untuk catatan umum, 'task' untuk tugas)
  deadline: string | null, // Opsional: Tanggal deadline untuk tipe 'task' (misal: "YYYY-MM-DD")
  isCompleted: boolean,  // Opsional: Status selesai untuk tipe 'task' (true jika selesai, false jika belum)
  notifiedOverdue: boolean // Internal: Status notifikasi untuk tugas yang lewat deadline
}


## Link Aplikasi Live 
