import React, { useState } from 'react'; 
import styles from './FavoriteProductForm.module.css';

function FavoriteProductForm({ onAddProduct }) {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('Skincare');
  const [notes, setNotes] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName.trim()) {
      alert('Nama produk tidak boleh kosong!');
      return;
    }

    const newProduct = {
      id: String(Date.now()),
      productName: productName.trim(),
      category: category,
      notes: notes.trim(),
    };

    onAddProduct(newProduct);

    setProductName('');
    setCategory('Skincare');
    setNotes('');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h3>Tambah Produk Favorit Baru</h3>
      <div className={styles.formGroup}>
        <label htmlFor="productName">Nama Produk:</label>
        <input
          type="text"
          id="productName"
          className={styles.formControl}
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Contoh: Serum Vitamin C, Lipstik Matte"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="category">Kategori:</label>
        <select
          id="category"
          className={styles.formControl}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Skincare">Skincare</option>
          <option value="Makeup">Makeup</option>
          <option value="Haircare">Haircare</option>
          <option value="Bodycare">Bodycare</option>
          <option value="Wellness">Wellness</option>
          <option value="Lainnya">Lainnya</option>
        </select> 
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="notes">Catatan Tambahan (Opsional):</label>
        <textarea
          id="notes"
          className={styles.formControl}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Contoh: Cocok untuk kulit sensitif, Wangi enak"
          rows="3"
        ></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>
        Tambah Produk
      </button>
    </form>
  );
}

export default FavoriteProductForm;