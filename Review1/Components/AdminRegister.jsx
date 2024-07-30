import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

function AdminRegister({ setLoggedIn, setUser }) {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setEmail(location.state.email);
      setUserName(location.state.username);
      setPassword(location.state.password);
      setConfirmPassword(location.state.password);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const adminData = { email, username, password };

    try {
      const response = await axios.post('http://localhost:8080/admin', adminData);
      console.log('Admin registered:', response.data);

      setLoggedIn(true);
      setUser({ email, username }); // Set admin data without the password
      navigate('/admin');  // Redirect to admin page
    } catch (error) {
      console.error('Error registering admin:', error);
      alert('Failed to register admin');
    }
  };

  return (
    <div className="form-container">
      <h2>Register as Admin</h2>
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
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AdminRegister;
