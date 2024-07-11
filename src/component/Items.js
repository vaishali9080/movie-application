import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ imdbID, Title,  price, Poster }) => {
  const { removeItem} = useContext(CartContext);
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={Poster} alt="poster" />
        </div>

        <div className="title">
          <h2>{Title}</h2>
        </div>
        {/* <div className="add-minus-quantity">
        <input type="text" placeholder={quantity} disabled />
        </div> */}
        <div className="price">
          <h3>₹ {price}</h3>
        </div>
        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(imdbID)}></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;