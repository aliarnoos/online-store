import React, { useState, useRef } from "react";

function BasketItem(props) {
  const [subTotal, setSubTotal] = useState(props.price);
  const inputRef = useRef(null);

  const subTotalSum = () => {
    // const quant = document.querySelector(`.${props.id}`).value;
    let itemPrice = parseInt(props.price.replace(/\W+/g, ""));
    let total = (inputRef.current.value * itemPrice)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setSubTotal("$" + total);
    return total;
  };
  return (
    <div className="cart-item">
      <div className="item-header">
        <img src={props.img} alt="lap" />
        <h2>{props.name}</h2>
      </div>
      <h2>{props.price}</h2>
      <input
        type="number"
        defaultValue={1}
        className={props.id}
        onChange={subTotalSum}
        ref={inputRef}
        onClick={() => props.sumTotal(inputRef.current.value)}
        min={1}
        max={10}
      />
      <h2>{subTotal}</h2>
      <button onClick={props.handleDel}>
        <img src="/images/del-icon.svg" alt="delete" />
      </button>
    </div>
  );
}

export default BasketItem;
