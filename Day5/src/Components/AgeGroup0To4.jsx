import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import below3i from './Assets/below/below3i.avif';
import below3ii from './Assets/below/below3ii.webp';
import below3iii from './Assets/below/below3iii.webp';
import below3iv from './Assets/below/below3iv.jpg';
import below3v from './Assets/below/below3v.jpg';
import below3vi from './Assets/below/below3vi.jpg';
import belowix from './Assets/below/belowix.jpg';
import belowx from './Assets/below/belowx.jpg';
import below3vii from './Assets/below/below3vii.webp';
import belowviii from './Assets/below/belowviii.webp';
import './AgeGroup0To4.css';

function AgeGroup0To4({ handleCartItemCountChange, isLoggedIn, user }) {
  const { addToCart, cart } = useCart();
  const [message, setMessage] = useState('');
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    handleCartItemCountChange(cart.length);
  }, [cart, handleCartItemCountChange]);

  const handleAddToCart = (item) => {
    if (user && user.role === 'admin') {
      setMessage('Admins cannot add items to the cart.');
      setTimeout(() => {
        setMessage('');
      }, 2000); // Clear message after 2 seconds
    } else if (isLoggedIn) {
      addToCart({ ...item, quantity: 1 });
      handleCartItemCountChange(cart.length + 1);
      setMessage(`Item "${item.name}" added to cart successfully!`);
      setTimeout(() => {
        setMessage('');
      }, 2000); // Clear message after 2 seconds
    } else {
      setMessage('Please log in to add items to the cart!');
      setTimeout(() => {
        setMessage('');
      }, 2000); // Clear message after 2 seconds
    }
  };

  const handleRating = (id, rating) => {
    setRatings({ ...ratings, [id]: rating });
  };

  return (
    <div className="age-group-page">
      <h1>Babies Section</h1>
      <p>Find the perfect toys for the little ones!</p>
      {message && <div className="popup-message">{message}</div>}
      <div className="toy-list">
        {[
          { id: 11, name: 'Baby Rattle', image: below3i, price: 100 },
          { id: 12, name: 'Trucks', image: below3ii, price: 35 },
          { id: 13, name: 'Building Blocks', image: below3iii, price: 40 },
          { id: 14, name: 'House Building', image: below3iv, price: 65 },
          { id: 15, name: 'Toddler Toys', image: below3v, price: 85 },
          { id: 16, name: 'Little Mind ABC', image: below3vi, price: 45 },
          { id: 17, name: 'ABC Dee', image: below3vii, price: 28 },
          { id: 18, name: 'Wooden Toys', image: belowviii, price: 25 },
          { id: 19, name: 'Musical Ocean', image: belowix, price: 85 },
          { id: 20, name: 'Kidding Toys', image: belowx, price: 20 }
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

export default AgeGroup0To4;
