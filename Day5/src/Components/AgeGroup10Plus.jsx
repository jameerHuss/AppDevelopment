import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import above10i from './Assets/above10/above10i.jpg';
import above10ii from './Assets/above10/above10ii.avif';
import above10iv from './Assets/above10/above10iv.avif';
import above10v from './Assets/above10/above10v.avif';
import above10viii from './Assets/above10/above10viii.avif';
import above10vi from './Assets/above10/above10vi.jpg';
import above10vii from './Assets/above10/above10vii.jpg';
import above10ix from './Assets/above10/above10ix.avif';
import above100 from './Assets/above10/above100.jpg';
import above10x from './Assets/above10/above10x.jpg';
import './AgeGroup4To10.css'; // Import CSS file for consistent styling

function AgeGroup10Plus({ handleCartItemCountChange, isLoggedIn }) {
  const { addToCart, cart } = useCart();
  const [message, setMessage] = useState('');
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    handleCartItemCountChange(cart.length);
  }, [cart, handleCartItemCountChange]);

  const handleAddToCart = (item) => {
    if (isLoggedIn) {
      addToCart({ ...item, quantity: 1 });
      handleCartItemCountChange(cart.length + 1);
      setMessage(`Item "${item.name}" added to cart successfully!`);
    } else {
      setMessage('Please log in to add items to the cart!');
    }
    setTimeout(() => {
      setMessage('');
    }, 2000); // Clear message after 2 seconds
  };

  const handleRating = (toyId, star) => {
    setRatings((prevRatings) => ({ ...prevRatings, [toyId]: star }));
  };

  return (
    <div className="age-group-page">
      <h1 style={{ color: '#FF007F' }}>Young Children's Section</h1>
      <p>Toys spark joy in children aged 10 and above by giving them the chance to experience new adventures and make cherished memories.</p>
      {message && <div className="popup-message">{message}</div>}
      <div className="toy-list">
        {[
          { id: 29, name: 'EX-Robot Toy', image: above10i, price: 30 },
          { id: 30, name: 'Speed Car', image: above10ii, price: 25 },
          { id: 31, name: 'STEM Toys', image: above100, price: 40 },
          { id: 32, name: 'LED Projection', image: above10iv, price: 50 },
          { id: 33, name: 'Jumping Shoes', image: above10v, price: 35 },
          { id: 34, name: 'Basketball Hook', image: above10vi, price: 20 },
          { id: 35, name: 'Bluebell Toys', image: above10vii, price: 60 },
          { id: 36, name: 'Money Bank', image: above10viii, price: 45 },
          { id: 37, name: 'Light Cycle', image: above10ix, price: 15 },
          { id: 38, name: 'Video Games', image: above10x, price: 70 }
        ].map((toy) => (
          <div key={toy.id} className="toy-item">
            <img src={toy.image} alt={toy.name} />
            <h3>{toy.name}</h3>
            <p>${toy.price.toFixed(2)}</p>
            <div className="toy-actions">
              <button onClick={() => handleAddToCart(toy)}>ADD TO CART</button>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${ratings[toy.id] >= star ? 'gold' : 'black'}`}
                    onClick={() => handleRating(toy.id, star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeGroup10Plus;
