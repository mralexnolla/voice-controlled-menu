/* eslint-disable react/prop-types */
//import { useState } from "react";


const Cart = ({ cart }) => {
  

  const totalSum = cart.reduce((acc, cartItem) => {
    return acc + cartItem.price;
  }, 0);

  

  return (
    <div>
      <div>
        <h1>Cart</h1>
        <div className="cartcount">
          {" "}
          <span className="cartcountnumber">{cart.length}</span>
        </div>
      </div>

      <div>
        <div className="cartdetails">
          {cart.map((cartItem) => (
            <div className="cartItems" key={cartItem.id}>
              {cartItem.name} -{" "}
              <span className="itemamount"> {cartItem.price} </span> Ghs
            </div>
          ))}

          <div className="total">
            <p>
              Total:{" "}
              <span className="totalamount"> {totalSum.toFixed(2)} </span>{" "}
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Cart;
