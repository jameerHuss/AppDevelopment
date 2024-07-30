import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import './AdminPage.css';

function AdminPage({ loggedIn, setLoggedIn, setUser }) {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    // Fetch all users
    axios.get('http://localhost:8080/posts')
      .then(response => {
        setUsers(response.data);
        setCurrentUser(response.data[0]); // Set the first user as the current user for demonstration
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });

    // Fetch all products
    axios.get('http://localhost:8080/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleEdit = (id) => {
    setEditing(id);
  };

  const handleSave = (id) => {
    const updatedProduct = products.find(product => product.id === id);
    axios.put(`http://localhost:8080/products/${id}`, updatedProduct)
      .then(response => {
        setEditing(null);
        console.log('Product updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setProducts(products.map(product => 
      product.id === id ? { ...product, [name]: value } : product
    ));
  };

  return (
    <div className="admin-container">
      <AdminNavbar user={currentUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} />
      <div className="admin-main">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard. Here you can manage the toy store.</p>

        <div className="admin-section">
          <h2>Users</h2>
          <ul className="admin-list">
            {users.map(user => (
              <li key={user.id} className="user-item">
                <span>{user.username}</span> - 
                <span> {user.email}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="admin-section">
          <h2>Products</h2>
          <ul className="admin-list">
            {products.map(product => (
              <li key={product.id} className="product-item">
                {editing === product.id ? (
                  <div className="product-edit">
                    <input 
                      type="text" 
                      name="name" 
                      value={product.name} 
                      onChange={(e) => handleChange(e, product.id)} 
                    />
                    <input 
                      type="number" 
                      name="stock" 
                      value={product.stock} 
                      onChange={(e) => handleChange(e, product.id)} 
                    />
                    <button onClick={() => handleSave(product.id)}>Save</button>
                  </div>
                ) : (
                  <div className="product-details">
                    {product.name} - {product.stock}
                    <button onClick={() => handleEdit(product.id)}>Edit</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
