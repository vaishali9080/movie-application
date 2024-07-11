import React, { createContext, useContext, useReducer ,useEffect} from "react";
import "./Cart.css";
import { useCart } from './Products'; 
import ContextCart from "./ContextCart";
import {reducer} from "./reducer";

// create a context
export const CartContext = createContext();

const initialState = {
  item:[],
  totalAmount: 0,
  totalItems: 0,
};

const Cart = () => {
  // inPlace of useState we will use the useReducer Hook
  // const [item, setItem] = useState(products);
  const { cart } = useCart();
  const [state, dispatch] = useReducer(reducer,{...initialState,item:cart});

  const clearCart = () => {
    localStorage.removeItem("cart"); 
    return dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (imdbID) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: imdbID,
    });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);
  useEffect(() => {
    dispatch({ type: "SET_CART", payload: cart });
  }, [cart]);
  
 
  return (
    <>
      <CartContext.Provider
        value={{ ...state, clearCart, removeItem }}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

// custom Hook
export const useGlobalContext = () => {
  return useContext(CartContext);
};

export default Cart;