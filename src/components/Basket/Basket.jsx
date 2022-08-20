import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Basket(props) {
  const [basket, setBasket] = useState(props.basketItems);
  useEffect(() => {
    setBasket(props.basketItems);
  }, [props.basketItems]);
  const navigate = useNavigate();
  return (
    <>
      <div className="cart">
        <div className="basket-items">
          <button onClick={() => navigate(-2)} className="back-btn">
            Continue Shopping
          </button>
          <table>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
              {basket}
            </tbody>
          </table>
        </div>
        <div className="cart-total">
          <h1>Cart Totoal: {props.finalTotal}</h1>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Basket;
