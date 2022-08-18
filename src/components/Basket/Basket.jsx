import React, { useEffect, useState } from "react";

function Basket(props) {
  const [basket, setBasket] = useState(props.basketItems);
  useEffect(() => {
    setBasket(props.basketItems);
  }, [props.basketItems]);

  return (
    <div className="cart">
      <div className="basket-items">
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
        <h2>Total:{}</h2>
        <h2>Shipping ${}</h2>
        <h1>Cart Totoal:{}</h1>
      </div>
    </div>
  );
}

export default Basket;
