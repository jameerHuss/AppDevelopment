import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import img3 from './Assets/img3.jpg';
import img2 from './Assets/img2.jpg';
import img222 from './Assets/boys/img222.jpg';
import img279 from './Assets/boys/img279.jpg';
import img24 from './Assets/img24.jpg';
import img25 from './Assets/img25.jpg';
import img26 from './Assets/img26.jpg';
import img27 from './Assets/img27.jpg';
import img29 from './Assets/img29.jpg';
import kid1 from './Assets/kid1.jpg';
import kid2 from './Assets/kid2.jpg';
import kid3 from './Assets/kid3.jpg';
import img11 from './Assets/img11.jpg';
import img12 from './Assets/img12.jpg';
import img13jpg from './Assets/img13jpg.jpg';
import t010viii from './Assets/4to10/t010viii.avif';
import './Home.css';

function Home({ handleCartItemCountChange, isLoggedIn, user }) {
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [ratings, setRatings] = useState({});

  // Update cart item count on load
  useEffect(() => {
    handleCartItemCountChange(cart.length);
  }, [cart, handleCartItemCountChange]);

  // Handle add to cart
  const handleAddToCart = (item) => {
    if (user?.role === 'admin') {
      setMessage("Admin can't access the add to cart");
      setTimeout(() => {
        setMessage('');
      }, 2000); // Clear message after 2 seconds
    } else if (isLoggedIn) {
      addToCart({ ...item, quantity: 1 });
      handleCartItemCountChange(cart.length + 1);
      setMessage(`Added ${item.name} to cart!`);
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

  // Handle star rating click
  const handleRating = (id, rating) => {
    setRatings({ ...ratings, [id]: rating });
  };

  // Navigate function for age-based categories
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home">
      <h1>Welcome to the Toy Store</h1>
      <p>Find the best toys for your kids!</p>
      {message && <div className="popup-message">{message}</div>}
      <section className="featured-toys">
        <h2>Featured Toys</h2>
        <div className="toy-list">
          {[
            { id: 1, name: 'Spider Man', image: img222, price: 30 },
            { id: 2, name: 'Building Blocks', image: img2, price: 30 },
            { id: 3, name: 'Iron Man', image: img24, price: 30 },
            { id: 4, name: 'Truck Toys', image: img3, price: 25 },
            { id: 5, name: 'Transformer', image: img279, price: 35 },
            { id: 6, name: 'Remote Toys', image: t010viii, price: 50 },
            { id: 7, name: 'Tom and Jerry', image: img25, price: 20 },
            { id: 8, name: 'Barbie Set', image: img26, price: 80 },
            { id: 9, name: 'Mario', image: img27, price: 100 },
            { id: 10, name: 'Cube', image: img29, price: 65 }
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

      <div>
        <h1>Age Based Toys</h1>
      </div>
      <div className="toy-list">
        <div className="toy-item" onClick={() => handleNavigate('/category/0-4-years')}>
          <img src={kid1} alt="0-4 Years" />
          <h3>Babies Section</h3>
        </div>
        <div className="toy-item" onClick={() => handleNavigate('/category/4-10-years')}>
          <img src={kid2} alt="4-10 Years" />
          <h3>Preteen Section</h3>
        </div>
        <div className="toy-item" onClick={() => handleNavigate('/category/10-years')}>
          <img src={kid3} alt="10+ Years" />
          <h3>Youngsters Section</h3>
        </div>
      </div>

      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-images">
          <img src={img11} alt="Gallery Image 4" />
          <img src={img12} alt="Gallery Image 5" />
          <img src={img13jpg} alt="Gallery Image 6" />
        </div>
      </section>
    </div>
  );
}

export default Home;
