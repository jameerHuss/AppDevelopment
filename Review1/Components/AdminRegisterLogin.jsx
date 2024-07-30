import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import './Login.css'; // Reusing the same CSS as Login page

function AdminRegisterLogin({ setLoggedIn, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/admin');
      const admins = response.data;

      const admin = admins.find(
        (admin) => admin.email === email && admin.password === password
      );

      if (admin) {
        setLoggedIn(true);
        setUser({ email: admin.email, username: admin.username }); // Set admin data
        localStorage.setItem('user', JSON.stringify({ email: admin.email, username: admin.username })); // Save user info in localStorage
        navigate('/admin');  // Redirect to admin page
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching admins:', error);
      alert('Failed to login');
    }
  };

  return (
    <div className="form-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input-item">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-item">
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="social-icons">
        <a href='https://www.google.com/'><FontAwesomeIcon icon={faGoogle} size="2x" className="icon" /></a> 
        <a href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook} size="2x" className="icon" /></a>
        <a href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} size="2x" className="icon" /></a>
      </div>
    </div>
  );
}

export default AdminRegisterLogin;
