import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WishlistPage.css';

function WishlistPage({ wishlist, removeFromWishlist, moveToCart }) {
  const navigate = useNavigate();

  const handleRemove = (index) => {
    if (window.confirm('Are you sure you want to remove this item from your wishlist?')) {
      removeFromWishlist(index);
    }
  };

  const handleMoveToCart = (index) => {
    if (window.confirm('Are you sure you want to move this item to your cart?')) {
      moveToCart(index);
    }
  };

  const proceedToCheckout = () => {
    // Assuming you want to route to the checkout page
    navigate('/payment');
  };

  return (
    <div className="wishlist-page">
      <h3>Your Wishlist ({wishlist.length} items)</h3>
      {wishlist.length > 0 ? (
        <div className="wishlist-list">
          {wishlist.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img src={`/images/${item.img}`} alt={item.name} className="wishlist-item-image" />
              <div className="wishlist-item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <div className="wishlist-item-actions">
                  <button 
                    onClick={() => handleRemove(index)} 
                    aria-label={`Remove ${item.name} from wishlist`}
                  >
                    Remove
                  </button>
                  <button 
                    onClick={() => handleMoveToCart(index)} 
                    aria-label={`Move ${item.name} to cart`}
                  >
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
      {wishlist.length > 0 && (
        <div className="wishlist-summary">
          <h4>Summary</h4>
          <div className="summary-row">
            <span>Total Items</span>
            <span>{wishlist.length}</span>
          </div>
          <div className="summary-row">
            <span>Total Price</span>
            <span>${wishlist.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
          </div>
          <button className="checkout-button" onClick={proceedToCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
