// src/Contexts/CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export function useCart() {
  return useContext(CartContext);
}

// CartProvider component to provide cart state and actions
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // Initialize as an empty array

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Function to update item quantity in the cart
  const updateQuantity = (index, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
