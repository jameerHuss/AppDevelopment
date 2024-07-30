import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import './Login.css';

function Login({ setLoggedIn, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch users for login validation
      const response = await axios.get('http://localhost:8080/posts');
      const users = response.data;

      // Find user based on email, password, and role
      const user = users.find(
        (user) => user.email === email && user.password === password && user.role === role
      );

      if (user) {
        setLoggedIn(true);
        setUser({ email: user.email, username: user.username }); // Set user data

        // Navigate based on role
        if (role === 'admin') {
          navigate('/admin-register-login'); // Redirect to admin login
        } else {
          localStorage.setItem('user', JSON.stringify({ email: user.email, username: user.username }));
          navigate('/');  // Redirect to home page
        }
      } else {
        alert('Invalid email, password, or role');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Failed to login');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
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
          <div className="input-item">
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>If you don't have an account, 
      <a onClick={() => { navigate('/register'); }} style={{ cursor: 'pointer', color: 'blue' }}> Register here</a></p>
      <div className="social-icons">
        <Link to='https://www.google.com/'><FontAwesomeIcon icon={faGoogle} size="2x" className="icon" /></Link> 
        <Link to='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook} size="2x" className="icon" /></Link>
        <Link to='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} size="2x" className="icon" /></Link>
      </div>
    </div>
  );
}

export default Login;
