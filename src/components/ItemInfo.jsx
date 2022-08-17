import React from "react";
import NavBar from "./NavBar";

function ItemINfo(props) {
  return (
    <>
      <NavBar />
      <div className="item-info">
        <img src={props.img} alt="laptop pic" />
        <div className="spec-info">
          <h1>{props.name}</h1>
          <h3>{props.price}</h3>
          <ul>
            <li>
              <img src="/images/cpu-icon.svg" alt="icon" />
              <span></span>
            </li>
            <li>
              <img src="/images/gc-icon.svg" alt="icon" />
              <span></span>
            </li>
            <li>
              <img src="/images/storage-icon.svg" alt="icon" />
              <span></span>
            </li>
            <li>
              <img src="/images/screen-icon.svg" alt="icon" />
              <span></span>
            </li>
          </ul>
          <input type="number" />
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default ItemINfo;
