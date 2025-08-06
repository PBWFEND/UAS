import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';
import './App.css'; // Pastikan Anda memiliki file CSS

const LOCAL_STORAGE_KEY = 'contactsApp.contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // 1. READ: Ambil data dari localStorage saat pertama kali aplikasi dimuat
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  // 2. Persistensi Data: Simpan data ke localStorage setiap kali state 'contacts' berubah
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // CREATE: Fungsi untuk menambahkan kontak baru
  const addContactHandler = (newContact) => {
    // Memberi ID unik (dengan timestamp) dan tanggal penambahan
    const contactWithId = {
      ...newContact,
      id: String(Date.now()),
      addedDate: new Date().toLocaleDateString(),
    };
    setContacts((prevContacts) => [...prevContacts, contactWithId]);
  };

  // DELETE: Fungsi untuk menghapus kontak
  const removeContactHandler = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus kontak ini?')) {
      const newContactList = contacts.filter((contact) => contact.id !== id);
      setContacts(newContactList);
    }
  };

  // UPDATE: Fungsi untuk mengubah status favorit (contoh update sederhana)
  const toggleFavoriteHandler = (id) => {
    const newContactList = contacts.map((contact) =>
      contact.id === id ? { ...contact, isFavorite: !contact.isFavorite } : contact
    );
    setContacts(newContactList);
  };
  
  // UPDATE: Fungsi untuk mengedit penuh sebuah kontak (contoh update lebih kompleks)
  const editContactHandler = (editedContact) => {
    const newContactList = contacts.map((contact) =>
      contact.id === editedContact.id ? editedContact : contact
    );
    setContacts(newContactList);
  };

  // Filter kontak berdasarkan query pencarian
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Memisahkan kontak menjadi favorit dan non-favorit
  const favoriteContacts = filteredContacts.filter(contact => contact.isFavorite);
  const otherContacts = filteredContacts.filter(contact => !contact.isFavorite);

  return (
    <div className="app-container">
      <h1>Aplikasi Daftar Kontak</h1>
      <ContactForm addContact={addContactHandler} />
      <hr />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Nilai Plus: Mengelompokkan kontak */}
      {favoriteContacts.length > 0 && (
        <>
          <h2>Kontak Favorit</h2>
          <ContactList
            contacts={favoriteContacts}
            removeContact={removeContactHandler}
            toggleFavorite={toggleFavoriteHandler}
            editContact={editContactHandler}
          />
        </>
      )}

      {otherContacts.length > 0 && (
        <>
          <h2>Semua Kontak</h2>
          <ContactList
            contacts={otherContacts}
            removeContact={removeContactHandler}
            toggleFavorite={toggleFavoriteHandler}
            editContact={editContactHandler}
          />
        </>
      )}
      
      {filteredContacts.length === 0 && (
        <p className="no-contacts-message">Tidak ada kontak yang ditemukan.</p>
      )}
    </div>
  );
}

export default App;