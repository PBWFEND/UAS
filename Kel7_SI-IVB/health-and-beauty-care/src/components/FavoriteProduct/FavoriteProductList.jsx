import React, { useState } from 'react';
import FavoriteProductItem from './FavoriteProductItem'; 
import SearchBar from '../Shared/SearchBar'; 
import styles from './FavoriteProductList.module.css';

function FavoriteProductList({ products, deleteProduct }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // Logika filtering
  const filteredProducts = products
    .filter(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.notes.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product =>
      filterCategory === 'All' ? true : product.category === filterCategory
    );

  const categories = ['All', 'Skincare', 'Makeup', 'Haircare', 'Bodycare', 'Wellness', 'Lainnya'];

  return (
    <div className={styles.listContainer}>
      <h3>Daftar Produk Favorit</h3>
      <div className={styles.filters}>
        <SearchBar onSearchChange={setSearchTerm} placeholder="Cari berdasarkan nama, kategori, atau catatan..." />

        <div className={styles.filterGroup}>
          <label htmlFor="filterCategory">Kategori:</label>
          <select
            id="filterCategory"
            className={styles.filterSelect}
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat === 'All' ? 'Semua Kategori' : cat}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <ul className={styles.productList}>
          {filteredProducts.map((product) => (
            <FavoriteProductItem
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.noProduct}>Tidak ada produk favorit yang ditemukan.</p>
      )}
    </div>
  );
}

export default FavoriteProductList;