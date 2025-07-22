# Health and Beauty Care - Sistem Manajamen Perawatan Kesehatan dan Kecantikkan 💅🌿

**Kelas: SI-IV B**
**Kelompok 7**
**Anggota:** 
1. Deyna Angeliawaty Zahara : 230660221032
2. Nabila Apriliani         : 230660221126
3. Fitri Cahyani            : 230660221028

---

## ✏️ Tema dan Deskripsi Aplikasi
**Tema:** Kesehatan dan Kecantikkan 

**Deskripsi Aplikasi:**
Health and Beauty Care adalah aplikasi berbasis web yang membantu pengguna dalam mengelola aktivitas perawatan diri sehari-hari, baik yang berkaitan dengan kesehatan maupun kecantikan. Pengguna dapat mencatat rutinitas perawatan, menyimpan informasi produk favorit, serta memantau rutinitas aktivitas perawaratan mereka dari hari ke hari.

---

## ⚙️ Menu dan Fitur Utama:
1. Manajemen Perawatan
   - Tambah Jadwal atau Aktivitas Perawatan Harian
   - Lihat dan Cari Jadwal atau Aktivitas Perawatan Harian
   - Ubah Jadwal atau Aktivitas Perawatan Harian
   - Hapus Jadawal atau Aktivitas Perawatan Harian
2. Produk Favorit (Berfungsi sebagai rujukan saat mencari produk)
   - Tambah Jenis Produk Favorit
   - Lihat dan Cari Produk Favorit
   - Hapus Jenis Produk Favorit
3. Rutinitas Harian (Berfungsi memantau pelaksanaan jadwal aktivitas perawatan harian, terlaksana/tidak terlaksana)

---

## 🛠️ Struktur Data:
```js
1. Manajamen Perawatan
{
  id: String,           // ID unik (contoh: "1721538000000")
  dayOfWeek: String,    // Hari (contoh: "Monday", "Tuesday")
  time: String,         // Waktu (contoh: "09:00", "14:30")
  activityName: String, // Nama Kegiatan (contoh: "Yoga Pagi", "Masker Wajah")
  activityType: String, // Jenis Kegiatan ("Healthy", "Beauty")
}

2. Produk favorit
{
  id: "String",                  // ID unik
  name: "String",                // Nama Produk
  brand: "String",               // Nama Brand
  category: "String",            // Skincare / Bodycare / Suplemen / dll
  price: "Number",               // Harga produk
}

{
  id: String,                   // ID unik (contoh: "prod1721538000001")
  productName: String,          // Nama Produk (contoh: "Serum Vitamin C")
  category: String,             // Kategori (contoh: "Skincare", "Makeup")
  notes: String                 // Catatan tambahan 
}

## 📁 Struktur Direktori
Kel8_SI-IVB/
└── health-and-beauty-care-app/
    ├── public/
    │   └── vite.svg
    ├── src/
    │   ├── assets/
    │   │   ├── dashboard.png
    │   │   ├── logo.png
    │   │   └── react.svg
    │   ├── components/
    │   │   ├── DailySchedule/
    │   │   │   ├── DailyScheduleForm.jsx
    │   │   │   ├── DailyScheduleForm.module.css
    │   │   │   ├── DailyScheduleItem.jsx
    │   │   │   ├── DailyScheduleItem.module.css
    │   │   │   ├── DailyScheduleList.jsx
    │   │   │   └── DailyScheduleList.module.css
    │   │   ├── Dashboard/
    │   │   │   ├── Dashboard.jsx
    │   │   │   └── Dashboard.module.css
    │   │   ├── FavoriteProduct/
    │   │   │   ├── FavoriteProductForm.jsx
    │   │   │   ├── FavoriteProductForm.module.css
    │   │   │   ├── FavoriteProductItem.jsx
    │   │   │   ├── FavoriteProductItem.module.css
    │   │   │   ├── FavoriteProductList.jsx
    │   │   │   └── FavoriteProductList.module.css
    │   │   ├── Layout/
    │   │   │   ├── Header.jsx
    │   │   │   ├── Header.module.css
    │   │   │   ├── Sidebar.jsx
    │   │   │   └── Sidebar.module.css
    │   │   └── SearchBar/
    │   │       ├── SearchBar.jsx
    │   │       └── SearchBar.module.css
    │   ├── hooks/
    │   │   └── useLocalStorage.js
    │   ├── pages/
    │   │   ├── DailySchedulePage.jsx
    │   │   ├── FavoriteProductPage.jsx
    │   │   ├── RoutineTrackerPage.jsx
    │   │   └── RoutineTrackerPage.module.css
    │   ├── App.jsx
    │   ├── App.module.css
    │   ├── index.css
    │   └── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
          

## 🚀 Link Aplikasi Live
https://health-and-beauty-care7.netlify.app