import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Import NavLink and useNavigate
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext'; // Import the Cart context
import toystore from './Assets/toystore.jpeg'
// import logo from './path/to/your/logo.png'; // Update the path to your logo

function Navbar({ loggedIn, setLoggedIn, setUser }) {
  const { cart, clearCart } = useCart(); // Get cart and clearCart from context
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0); // Calculate total items in the cart
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false); // Update loggedIn state
    setUser(null); // Clear user data
    clearCart(); // Clear cart
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={toystore} alt="Toy Store Logo" className="logo-img" />
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
          <li><NavLink to="/boys" activeClassName="active">Boys</NavLink></li>
          <li><NavLink to="/girls" activeClassName="active">Girls</NavLink></li>
          {/* <li><NavLink to="/category" activeClassName="active">Categories</NavLink></li> Added link to Category page */}
        </ul>
      </div>
      <div className="nav-right">
        <div className="nav-buttons">
          <Link to="/cart" className="cart-button">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <span className="cart-text">Cart ({cartItemCount})</span>
          </Link>
        </div>
        {!loggedIn ? (
          <ul>
            <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
            <li><NavLink to="/register" activeClassName="active">Register</NavLink></li>
          </ul>
        ) : (
          <div className="profile-link">
            <div className="profile-menu">
              <NavLink to="/profile" activeClassName="active">Profile</NavLink>
              <Link to="/" onClick={handleLogout}>Logout</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
