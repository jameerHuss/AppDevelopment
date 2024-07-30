import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, decreaseQuantity, addToCart } = useCart();
  const navigate = useNavigate();

  const getTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncreaseQuantity = (item) => {
    addToCart({ ...item, quantity: 1 }); // Increment the quantity by 1
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId); // Decrement the quantity by 1
  };

  const handleContinueShopping = () => {
    navigate('/'); // Navigate to the Home page
  };

  const handleProceedToPayment = () => {
    navigate('/payment'); // Navigate to the Payment page
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <>
          <p>Your Cart is currently empty.</p>
          <button className="continue-shopping" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <span>{item.name} </span>
                  <span>${item.price} </span>
                  <span>Quantity : {item.quantity}</span>
                </div>
                <div className="cart-item-actions">
                  <button className="increase-quantity" onClick={() => handleIncreaseQuantity(item)}>
                    Add More
                  </button>
                  <button className="decrease-quantity" onClick={() => handleDecreaseQuantity(item.id)}>
                    Remove One
                  </button>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${getTotal().toFixed(2)}</h2>
          <button className="continue-shopping" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button className="proceed-to-payment" onClick={handleProceedToPayment}>
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
