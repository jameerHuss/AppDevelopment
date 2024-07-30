import React from 'react';

function ProductItem({ product, currentUser }) {
  const handleAddToCart = () => {
    // Add to cart logic here
  };

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Stock: {product.stock}</p>
      {currentUser.role !== 'admin' && (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
}

export default ProductItem;
