// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>We are a toy store dedicated to providing the best toys for kids of all ages. Explore our range of products and find the perfect toy for your little one!</p>
        </div>
        <div className="footer-section">
  <h2>Contact Us</h2>
  <ul>
    <li><strong>Name:</strong> Hussain Jameer</li>
    <li><strong>Email:</strong> <a href="mailto:hussainjameer0@gmail.com">hussainjameer0@gmail.com</a></li>
    <li><strong>Phone:</strong> <a href="tel:+918428361897">+91 8428361897</a></li>
    <li><strong>Address:</strong> Relaiance Mart, Kamaraj Nager, Ariyamangalam, Trichy-620010</li>
  </ul>
</div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">F</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">I</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">T</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Toy Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
