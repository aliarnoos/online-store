import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Basket(props) {
  const [basket, setBasket] = useState(props.basketItems);
  useEffect(() => {
    setBasket(props.basketItems);
  }, [props.basketItems]);
  return (
    <>
      <div className="cart">
        <div className="basket-items">{basket}</div>
        <div className="cart-total">
          <h1>Cart Totoal: {props.finalTotal}</h1>
          <button>Checkout</button>
          <Link to="/Shop">
            <button className="back-btn">Continue Shopping</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Basket;
