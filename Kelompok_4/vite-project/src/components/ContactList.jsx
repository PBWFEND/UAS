import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, removeContact, toggleFavorite, editContact }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          removeContact={removeContact}
          toggleFavorite={toggleFavorite}
          editContact={editContact}
        />
      ))}
    </div>
  );
}

export default ContactList;