import React from 'react';
import styles from './FavoriteProductItem.module.css';

function FavoriteProductItem({ product, deleteProduct }) {
  const { id, productName, category, notes } = product;

  const handleDelete = () => {
    deleteProduct(id);
  };

  return (
    <li className={styles.productCard}>
      <h4 className={styles.productName}>{productName}</h4>
      <p className={styles.productId}>ID: {product.id}</p>
      <span className={styles.productCategory}>{category}</span>
      {notes && <p className={styles.productNotes}>{notes}</p>}
      <div className={styles.productActions}>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Hapus
        </button>
      </div>
    </li>
  );
}

export default FavoriteProductItem;