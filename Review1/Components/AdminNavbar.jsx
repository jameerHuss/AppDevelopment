import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './AdminNavbar.css';

function AdminNavbar({ user, loggedIn, setLoggedIn, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false); // Update loggedIn state
    setUser(null); // Clear user data
    navigate('/home'); // Redirect to home page
  };

  return (
    <div className="admin-navbar">
      <div className="nav-left">
        <div className="admin-navbar-section">
          <h2>User Details</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
        </div>

        <div className="admin-navbar-section">
          <h2>Stock Details</h2>
          <p>Product Count: {/* Add logic to display product count */}</p>
        </div>

        <div className="admin-navbar-section">
          <h2>Feedback</h2>
          {/* Add logic to display feedback */}
        </div>
      </div>

      <div className="nav-right">
        {loggedIn && (
          <div className="profile-link">
            <div className="profile-menu">
              <h2>Admin Profile</h2>
              {/* Add logic to display admin profile */}
              <Link to="/" onClick={handleLogout}>Logout</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminNavbar;
