## Event Planner App 
Aplikasi Event Planner adalah alat intuitif dan efisien untuk membantu, mengatur dan mengelola kegiatan sehari-hari dengan mudah. Dibangun dengan React dan Tailwind CSS, dengan efek *glassmorphism.*
### Kelompok 3 SI-IVB
**Anggota Kelompok:**
1. Jajang Komara - 230660221102
2. Yudi Aditiya Rahman - 230660221014
3. Dian Erwin - 230660221022
4. Adrian Nugraha - 230660221022


#### Fitur Utama

* **Manajemen Kegiatan Komprehensif**: Tambah, edit, tandai selesai, dan hapus kegiatan Anda dengan mudah.
* **Filter & Pencarian Instan**:
    * Saring kegiatan berdasarkan status (Mendatang, Selesai, Terlewat).
    * Cari kegiatan berdasarkan nama, deskripsi, atau lokasi dengan fitur pencarian yang responsif.
* **Dashboard Ringkasan**: Dapatkan gambaran cepat mengenai total kegiatan, yang selesai, yang akan datang, dan yang terlewat.
* **Antarmuka Pengguna Modern (Glassmorphism)**: Desain yang bersih dan elegan dengan efek kaca transparan yang menenangkan.
* **Responsif**: Tampilan yang optimal di berbagai ukuran layar.
* **Persistensi Data**: Kegiatan Anda disimpan secara lokal di browser menggunakan `localStorage`, sehingga tidak hilang saat Anda menutup aplikasi.

#### Struktur Data Kegiatan

Setiap kegiatan (event) diwakili oleh sebuah objek JavaScript dengan struktur sebagai berikut:

```javascript
{
  id: string,             // ID unik untuk setiap kegiatan (misalnya, timestamp)
  eventName: string,      // Nama atau judul kegiatan
  date: string,           // Tanggal kegiatan (format 'YYYY-MM-DD')
  time: string,           // Waktu kegiatan (opsional, format 'HH:MM')
  location: string,       // Lokasi kegiatan (opsional)
  description: string,    // Deskripsi detail kegiatan (opsional)
  isCompleted: boolean    // Status kegiatan, true jika sudah selesai
}

```

Data ini disimpan dalam array objek di localStorage menggunakan custom hook useLocalStorage.


## 📁 Struktur Direktori

```

event-planner/
├── public/             
│ └── vite.svg
├── assets/            
├── src/                # Folder kode utama aplikasi (source code)
│ ├── components/       
│ │ ├── Dashboard.jsx   # Menampilkan statistik kegiatan.
│ │ ├── EventForm.jsx   # Formulir untuk menambah/mengedit kegiatan.
│ │ ├── EventItem.jsx   # Representasi satu kegiatan dalam daftar.
│ │ └── EventList.jsx   # Mengelola dan menampilkan daftar kegiatan.
│ ├── App.jsx           # Komponen utama aplikasi
│ ├── main.jsx          # Entry point utama ReactDOM.render()
│ └── index.css         # File CSS/Tailwind utama
├── index.html          # Template HTML utama untuk Vite
├── package.json        # Konfigurasi proyek dan dependencies
├── package-lock.json   
├── vite.config.js      
├── tailwind.config.cjs # Konfigurasi Tailwind CSS
├── postcss.config.cjs  # Konfigurasi PostCSS
└── README.md           # Dokumentasi proyek

```

 Link Aplikasi Live

```

```
