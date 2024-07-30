import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import './Boys.css';
import img4 from './Assets/img4.jpg';
import img24 from './Assets/img24.jpg';
import img222 from './Assets/boys/img222.jpg';
import img279 from './Assets/boys/img279.jpg';
import img280 from './Assets/boys/img280.jpg';
import img282 from './Assets/boys/img282.jpg';
import img283 from './Assets/boys/img283.jpg';
import img284 from './Assets/boys/img284.jpg';
import img285 from './Assets/boys/img285.webp';
import img286 from './Assets/boys/img286.jpg';

function Boys({ handleCartItemCountChange, isLoggedIn }) {
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

  const handleRating = (id, rating) => {
    setRatings({ ...ratings, [id]: rating });
  };

  return (
    <div className="boys">
      <h2 style={{color:'red'}}>Boy's Toys</h2>
      {message && <div className="popup-message">{message}</div>}
      <section className="featured-toys">
        <div className="toy-list">
          {[
            { id: 1, name: 'Iron Man', image: img24, price: 40 },
            { id: 2, name: 'Chess Game', image: img285, price: 25 },
            { id: 3, name: 'Truck Toys', image: img4, price: 35 },
            { id: 39, name: 'Foot Ball', image: img283, price: 20 },
            { id: 40, name: 'Transformers', image: img279, price: 50 },
            { id: 41, name: 'Bat Man', image: img280, price: 18 },
            { id: 42, name: 'Remote Car', image: img282, price: 38 },
            { id: 43, name: 'Spider Man', image: img222, price: 40 },
            { id: 44, name: 'Ben 10 Watch', image: img284, price: 48 },
            { id: 45, name: 'Fishing Game', image: img286, price: 30 }
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
      </section>
    </div>
  );
}

export default Boys;
