const STORAGE_KEY = 'kampusku_activities';

export const getLocalData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Gagal memuat data dari localStorage', error);
    return [];
  }
};

export const setLocalData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Gagal menyimpan ke localStorage', error);
  }
};
