// src/components/Producta.js
import React, { useState, createContext, useContext } from 'react';

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export const ProductaProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (movieDetails) => {
    setCart((prevCart) => {
      if (prevCart.find(item => item.imdbID === movieDetails.imdbID)) {
        return prevCart; // Movie already in the cart, return previous cart
      }
      return [...prevCart, movieDetails]; // Add new movie to the cart
    });
  };

  return (
    <cartContext.Provider value={{ cart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};
