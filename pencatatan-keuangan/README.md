# Catatan Keuangan

Aplikasi web sederhana untuk mencatat pemasukan dan pengeluaran, membantu Anda mengelola keuangan pribadi dengan mudah.

## Nama Kelompok/KLS & NIM

*   **Kelompok 1**
    *   Muhammad Aulia Ramadhani - 230660221013
    *   Astia Sundari Putri - 230660221020
    *   Tira Azzahra - 230660221021
    *   Abdul Azis Arrizqi - 230660221091
    *   Komarudin Rahendra - 230660221111
    *   Ainnunnissa Soraya - 230660221116


## Tema & Deskripsi Aplikasi

**Tema:** Aplikasi Pencatat Keuangan Pribadi

**Deskripsi Aplikasi:**
`Catatan Keuangan` adalah aplikasi web intuitif yang dirancang untuk membantu pengguna melacak dan mengelola transaksi keuangan mereka, baik pemasukan maupun pengeluaran. Aplikasi ini menyediakan antarmuka yang bersih dan mudah digunakan untuk menambah, melihat, mengedit, dan menghapus transaksi. Fitur ringkasan keuangan memberikan gambaran cepat tentang saldo, total pemasukan, dan total pengeluaran. Aplikasi ini juga dilengkapi dengan fitur pencarian dan filter untuk memudahkan navigasi data transaksi, serta dukungan tema terang dan gelap untuk kenyamanan pengguna.

**Fitur Utama:**
*   **Pencatatan Transaksi:** Tambah transaksi baru dengan keterangan, nominal, dan jenis (pemasukan/pengeluaran).
*   **Daftar Transaksi:** Tampilkan semua transaksi dalam daftar yang terorganisir.
*   **Ringkasan Keuangan:** Lihat saldo terkini, total pemasukan, dan total pengeluaran secara real-time.
*   **Pencarian & Filter:** Cari transaksi berdasarkan keterangan dan filter berdasarkan jenis (semua, pemasukan, pengeluaran).
*   **Edit & Hapus Transaksi:** Ubah detail transaksi yang sudah ada atau hapus transaksi yang tidak diperlukan.
*   **Penyimpanan Lokal:** Data transaksi disimpan secara lokal di browser menggunakan `localStorage`, memastikan data tetap ada meskipun browser ditutup.
*   **Mode Terang/Gelap:** Dukungan tema yang dapat diubah untuk kenyamanan visual.
*   **Responsif:** Antarmuka yang adaptif untuk berbagai ukuran layar (desktop dan mobile).

## Struktur Data

Aplikasi ini menggunakan array objek untuk menyimpan daftar transaksi. Setiap objek transaksi memiliki struktur sebagai berikut:

```javascript
{
  id: String,          // ID unik untuk setiap transaksi (menggunakan crypto.randomUUID() atau timestamp)
  keterangan: String,  // Deskripsi singkat transaksi (misal: "Gaji Bulanan", "Beli Kopi")
  nominal: Number,     // Jumlah nominal transaksi (misal: 5000000, 25000)
  jenis: String,       // Jenis transaksi: "pemasukan" atau "pengeluaran"
  createdAt: String,   // Timestamp ISO string saat transaksi dibuat (misal: "2023-10-27T10:30:00.000Z")
  updatedAt?: String,  // Opsional: Timestamp ISO string saat transaksi terakhir diubah
  tanggal?: String     // Opsional: Tanggal transaksi dalam format lokal (misal: "27/10/2023") - digunakan untuk tampilan
}

Link Aplikasi Live :
https://kelompok1-pencatatan-keuangan.netlify.app/