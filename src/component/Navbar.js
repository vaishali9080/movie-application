import React, { useContext } from "react";
import { CartContext } from "./Cart";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <>
      <header>
        <div className="continue-shopping">
        <NavLink to="/"><i class="fa-solid fa-arrow-left" ></i></NavLink>
          {/* <img src="./images/arrow.png" alt="arrow" className="arrow-icon" /> */}
         <h3>continue exploring</h3>
        </div>

        <div className="cart-icon">
          {/* <img src="./images/cart.png" alt="cart-logo" /> */}
          <i class="fa-solid fa-cart-shopping"></i>
          <p>{totalItems}</p>
        </div>
      </header>
    </>
  );
};

export default Navbar;