import React from 'react';
import FavoriteProductForm from '../components/FavoriteProduct/FavoriteProductForm';
import FavoriteProductList from '../components/FavoriteProduct/FavoriteProductList';

function FavoriteProductPage({ products, addProduct, deleteProduct }) {
  return (
    <div>
      <h2>Produk Favorit</h2>
      <FavoriteProductForm onAddProduct={addProduct} />
      <FavoriteProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
}

export default FavoriteProductPage;