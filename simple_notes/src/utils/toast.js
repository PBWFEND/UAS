// src/utils/toast.js
let toastTimeout;

export const showToast = (message, type = 'info', duration = 3000) => {
  console.log('showToast called:', message, type); // LOG 1: Pastikan fungsi dipanggil

  const toastDiv = document.getElementById('app-toast');

  // Pastikan elemen toast ada di DOM
  if (!toastDiv) {
    console.error("Toast element with ID 'app-toast' not found in the DOM. Please ensure <div id='app-toast'></div> is in App.jsx.");
    return; // Hentikan eksekusi jika elemen tidak ditemukan
  }

  console.log('Toast element found:', toastDiv); // LOG 2: Pastikan elemen ditemukan

  // Clear any existing timeout to prevent multiple toasts conflicting
  clearTimeout(toastTimeout);

  // Reset classes and content
  toastDiv.className = `toast-message toast-${type}`; // Tambahkan class untuk styling
  toastDiv.textContent = message;

  // Set initial state for transition (hidden)
  toastDiv.style.opacity = '0';
  toastDiv.style.transform = 'translate(-50%, 20px)'; // Mulai dari bawah dan sedikit di luar layar

  // Trigger reflow to ensure transition works from initial state
  // This line forces the browser to apply the '0' opacity and '20px' transform before applying '1' opacity and '0' transform
  void toastDiv.offsetWidth;

  // Animate in
  toastDiv.style.opacity = '1';
  toastDiv.style.transform = 'translate(-50%, 0)'; // Bergerak ke posisi akhir (tengah bawah)
  console.log('Toast styles applied (should be visible):', toastDiv.style.opacity, toastDiv.style.transform); // LOG 3: Cek style setelah diterapkan

  // Set timeout to hide the toast
  toastTimeout = setTimeout(() => {
    console.log('Toast timeout triggered, hiding toast...'); // LOG 4: Pastikan timeout jalan
    // Animate out
    toastDiv.style.opacity = '0';
    toastDiv.style.transform = 'translate(-50%, -20px)'; // Bergerak ke atas saat hilang

    // Remove event listener to prevent memory leaks if component unmounts
    const removeToastOnTransitionEnd = () => {
        toastDiv.removeEventListener('transitionend', removeToastOnTransitionEnd);
        console.log('Toast transition ended, toast element is hidden.'); // LOG 5: Pastikan transisi selesai
    };
    // Ensure the event listener is attached only once for this specific transition
    toastDiv.addEventListener('transitionend', removeToastOnTransitionEnd, { once: true });

  }, duration);
};