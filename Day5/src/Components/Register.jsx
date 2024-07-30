import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import './Register.css';

function Register({ setLoggedIn, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = { email, username, password };

    try {
      if (role === 'admin') {
        navigate('/admin-register', { state: { email, username, password } });
      } else {
        const response = await axios.post('http://localhost:8080/posts', userData);
        console.log('User registered:', response.data);

        setLoggedIn(true);
        setUser({ email, username }); // Set user data without the password
        navigate('/');  // Redirect to home page
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register user');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input-item">
            <label>Username:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUserName(e.target.value)} 
              required 
            />
          </div>
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
            <label>Confirm Password:</label>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="input-item">
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>If You Already have an user Account  
      <a onClick={()=>{navigate('/login')}} style={{cursor:'pointer',color:'blue'}}>  Login</a></p>
       <div className="social-icons">
        <Link to='https://www.google.com/'><FontAwesomeIcon icon={faGoogle} size="2x" className="icon" /></Link> 
        <Link to='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook} size="2x" className="icon" /></Link>
        <Link to='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} size="2x" className="icon" /></Link>
      </div>
    </div>
  );
}

export default Register;
