import React, { useContext } from "react";
import Items from "./Items";
import Navbar from "./Navbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";

const ContextCart = () => {
  // cosumer
  const { item, totalAmount, totalItems, clearCart } = useContext(CartContext);
  {
    if (!Array.isArray(item) ||item.length === 0) {
      return (
        <>
          <Navbar />
          <section className="main-cart-section">
            <h1>Movie Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              movies  in  your movie cart.
            </p>
            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  <h1>Empty Cart</h1>
                </Scrollbars>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <section className="main-cart-section">
            <h1>Movie Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              movies in movie cart.
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  {item.map((curItem) => {
                    return <Items key={curItem.id} {...curItem} />;
                  })}
                </Scrollbars>
              </div>
            </div>
            <div className="card-total ">
              <h3>
                cart total: <span>₹  {totalAmount} </span>
              </h3>
             <button>CheckOut</button> 
               <button onClick={clearCart}>Clear Cart</button> 
            </div>
          </section>
        </>
      );
    }
  }
};

export default ContextCart;