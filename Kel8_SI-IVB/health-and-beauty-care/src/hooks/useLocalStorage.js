import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Dapatkan nilai awal dari localStorage, atau gunakan initialValue
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  // Gunakan useEffect untuk menyimpan nilai ke localStorage setiap kali 'value' berubah
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing localStorage key “${key}”:`, error);
    }
  }, [key, value]); // Dependencies: jalankan efek ini saat key atau value berubah

  return [value, setValue];
}

export default useLocalStorage;