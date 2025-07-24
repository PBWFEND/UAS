// src/utils/data.js

const showFormattedDate = (dateString) => {
  // Pastikan dateString adalah string yang valid atau bisa dikonversi ke Date
  if (!dateString) {
    return 'Invalid Date';
  }

  const options = {
    weekday: 'long', // Contoh: "Senin"
    year: 'numeric', // Contoh: "2023"
    month: 'long',   // Contoh: "Desember"
    day: 'numeric',  // Contoh: "1"
    hour: '2-digit', // Contoh: "09"
    minute: '2-digit',// Contoh: "30"
    second: undefined, // Tidak menampilkan detik
  };
  
  // Menggunakan 'id-ID' untuk format tanggal Bahasa Indonesia
  try {
    return new Date(dateString).toLocaleDateString('id-ID', options);
  } catch (error) {
    console.error("Error formatting date:", error);
    return 'Invalid Date';
  }
};

export { showFormattedDate };