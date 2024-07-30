import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

function Category() {
  return (
    <div className="category">
      <h2>Toy Categories</h2>
      <p>Select a category to explore:</p>
      <div className="category-links">
        <Link to="/boys" className="category-link">Boys' Toys</Link>
        <Link to="/girls" className="category-link">Girls' Toys</Link>
      </div>
    </div>
  );
}

export default Category;
