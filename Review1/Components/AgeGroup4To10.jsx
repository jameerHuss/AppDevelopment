import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import t010i from './Assets/4to10/t010i.jpg';
import t010ii from './Assets/4to10/t010ii.jpg';
import t010iv from './Assets/4to10/t010iv.jpg';
import t010v from './Assets/4to10/t010v.jpg';
import t010iii from './Assets/4to10/t010iii.jpeg';
import t010vi from './Assets/4to10/t010vi.webp';
import t010vii from './Assets/4to10/t010vii.jpg';
import t010viii from './Assets/4to10/t010viii.avif';
import t010ix from './Assets/4to10/t010ix.jpg';
import t010x from './Assets/4to10/t010x.webp';
import './AgeGroup4To10.css'; // Import CSS file

function AgeGroup4To10({ handleCartItemCountChange, isLoggedIn }) {
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
      <h1 style={{ color: '#FF007F' }}>Preteen Boys Section</h1>
      <p>Playing with toys allows preteens to explore their creativity and imagination, making every moment an adventure.</p>
      {message && <div className="popup-message">{message}</div>}
      <div className="toy-list">
        {[
          { id: 19, name: 'Robot Toys', image: t010i, price: 90 },
          { id: 20, name: 'Race Car Toy', image: t010ii, price: 20 },
          { id: 21, name: 'IQ Puzzle', image: t010iii, price: 30 },
          { id: 22, name: 'Moon Toys', image: t010iv, price: 40 },
          { id: 23, name: 'Wooden Chess', image: t010v, price: 50 },
          { id: 24, name: 'Plastic Toys', image: t010vi, price: 38 },
          { id: 25, name: 'Rocket Toys', image: t010vii, price: 65 },
          { id: 26, name: 'Remote Toys', image: t010viii, price: 70 },
          { id: 27, name: 'JCB Toys', image: t010ix, price: 60 },
          { id: 28, name: 'Transformers', image: t010x, price: 90 }
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

export default AgeGroup4To10;
