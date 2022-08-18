import React, { useState } from "react";

function BasketItem(props) {
  const [subTotal, setSubTotal] = useState(props.price);

  const subTotalSum = () => {
    const quant = document.querySelector(`.${props.id}`);
    let price = parseInt(props.price.replace(/\W+/g, ""));
    let total = (quant.value * price)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setSubTotal("$" + total);
  };
  return (
    <tr>
      <td>
        <img src={props.img} alt="lap" />
        <h2>{props.name}</h2>
      </td>
      <td>
        <h2>{props.price}</h2>
      </td>
      <td>
        <input
          type="number"
          defaultValue={1}
          className={props.id}
          onChange={props.subTotalSum}
          min={1}
          max={10}
        />
      </td>
      <td>
        <h2>{subTotal}</h2>
      </td>
      <td>
        <button onClick={props.handleDel}>
          <img src="/images/del-icon.svg" alt="delete" />
        </button>
      </td>
    </tr>
  );
}

export default BasketItem;
