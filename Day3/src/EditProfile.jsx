import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditProfile.css';

function EditProfile({ setUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};

  const [email, setEmail] = useState(user?.email || '');
  const [username, setUsername] = useState(user?.username || '');
  const [password, setPassword] = useState(user?.password || '');

  useEffect(() => {
    if (!user) {
      console.error('No user data found in location state');
      navigate('/profile');
    } else {
      console.log('Editing user:', user);
    }
  }, [user, navigate]);

  const handleSave = async () => {
    const updatedUser = { ...user, email, username, password };

    try {
      const response = await axios.put(`http://localhost:8080/posts/${user.id}`, updatedUser);
      console.log('User updated:', response.data);

      // Update the user state
      setUser(response.data);

      // Navigate back to the profile page with updated user data
      navigate('/profile', { state: { user: response.data } });
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user');
    }
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <div className="input-container">
        <div className="input-item">
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
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
      </div>
      <button className="save-button" onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditProfile;
