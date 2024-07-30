import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import './Girls.css';
import img7 from './Assets/img7.jpg';
import img8 from './Assets/img8.jpg';
import img9 from './Assets/img9.jpg';
import girl1 from './Assets/girl/girl1.jpg';
import girl2 from './Assets/girl/girl2.webp';
import girl3 from './Assets/girl/girl3.webp';
import girl4 from './Assets/girl/girl4.webp';
import girl5 from './Assets/girl/girl5.jpg';
import girl6 from './Assets/girl/girl6.jpg';
import girl7 from './Assets/girl/girl7.jpg';

function Girls({ handleCartItemCountChange, isLoggedIn }) {
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
    <div className="girls">
      <h2 style={{color:'#FF007F'}}>Girl's Toys</h2>
      {message && <div className="popup-message">{message}</div>}
      <section className="featured-toys">
        <div className="toy-list">
          {[
            { id: 4, name: 'Barbie Dolls', image: img9, price: 50 },
            { id: 5, name: 'Barbie Doll Sets', image: img8, price: 60 },
            { id: 6, name: 'Makeup Kit', image: img7, price: 48 },
            { id: 46, name: 'Soft Stuffed Toys', image: girl1, price: 55 },
            { id: 47, name: 'Soft Baby Toys', image: girl2, price: 60 },
            { id: 48, name: 'Ice Cream Toys', image: girl3, price: 30 },
            { id: 49, name: 'Diamond Rings', image: girl4, price: 25 },
            { id: 50, name: 'Real Makeup Kit', image: girl5, price: 35 },
            { id: 51, name: 'Chocolate Maker', image: girl6, price: 120 },
            { id: 52, name: 'Fashion Toys', image: girl7, price: 65 }
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

export default Girls;
