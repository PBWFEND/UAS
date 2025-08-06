import React, { useState } from 'react';

function ContactItem({ contact, removeContact, toggleFavorite, editContact }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || phone.trim() === '') {
      alert('Nama dan Nomor Telepon tidak boleh kosong!');
      return;
    }
    
    // Panggil fungsi editContact dari parent
    editContact({
      id: contact.id,
      name,
      phone,
      email,
      isFavorite: contact.isFavorite,
      addedDate: contact.addedDate,
    });
    
    setIsEditing(false); // Keluar dari mode edit
  };

  return (
    <div className={`contact-item ${contact.isFavorite ? 'favorite' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="btn-save">Simpan</button>
          <button type="button" onClick={() => setIsEditing(false)} className="btn-cancel">Batal</button>
        </form>
      ) : (
        <>
          <div className="contact-info">
            <h4 className="contact-name">{contact.name}</h4>
            <p className="contact-phone">Telp: {contact.phone}</p>
            {contact.email && <p className="contact-email">Email: {contact.email}</p>}
          </div>
          <div className="contact-actions">
            <button onClick={() => toggleFavorite(contact.id)} className="btn-favorite">
              {contact.isFavorite ? '★ Favorit' : '☆ Favorit'}
            </button>
            <button onClick={() => setIsEditing(true)} className="btn-edit">Edit</button>
            <button onClick={() => removeContact(contact.id)} className="btn-delete">Hapus</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ContactItem;