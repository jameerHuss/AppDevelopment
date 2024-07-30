  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faUser } from '@fortawesome/free-solid-svg-icons';
  import './Profile.css';

  function Profile({ user, setUser }) {
    const navigate = useNavigate();

    if (!user) {
      return (
        <div className="profile-container">
          <p>No user data available. Please log in.</p>
        </div>
      );
    }

    const handleEdit = () => {
      navigate('/edit-profile', { state: { user } });
    };

    return (
      <div className="profile-container">
        <FontAwesomeIcon icon={faUser} size="3x" className="profile-icon" />
        <div className="profile-content">
          <div className="profile-info">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Member Since:</strong> June 2024</p>
          </div>
          <button className="edit-button" onClick={handleEdit}>Edit Profile</button>
        </div>
      </div>
    );
  }

  export default Profile;
