import React from "react";
import { Link } from "react-router-dom";

function BasketBtn(props) {
  return (
    <Link to="/Basket">
      <div className="basket-btn">
        <img src="/images/cart-icon.png" alt="basket" />
        <span>{props.basketCount}</span>
      </div>
    </Link>
  );
}

export default BasketBtn;
