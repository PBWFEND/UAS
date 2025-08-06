import React, { useState } from 'react';

function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || phone.trim() === '') {
      alert('Nama dan Nomor Telepon wajib diisi!');
      return;
    }

    addContact({
      name,
      phone,
      email,
      isFavorite: false,
    });

    // Umpan balik: Mengosongkan form setelah submit
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Tambah Kontak Baru</h3>
      <div className="form-group">
        <label htmlFor="name">Nama:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama Lengkap"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Telepon:</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Nomor Telepon"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Alamat Email (opsional)"
        />
      </div>
      <button type="submit" className="btn-submit">Simpan Kontak</button>
    </form>
  );
}

export default ContactForm;