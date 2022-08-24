import React, { useEffect } from "react";

function ItemINfo(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [props.item]);
  return (
    <>
      <div className="item-info">
        <img src={props.item.img} alt="laptop pic" className="laptop-img" />
        <div className="spec-info">
          <h1>{props.item.name}</h1>
          <h3>{props.item.price}</h3>
          <ul>
            <li>
              <img src="/images/cpu-icon.svg" alt="icon" />
              <span>{props.item.cpu}</span>
            </li>
            <li>
              <img src="/images/gc-icon.svg" alt="icon" />
              <span>{props.item.gpu}</span>
            </li>
            <li>
              <img src="/images/storage-icon.svg" alt="icon" />
              <span>{props.item.storage}</span>
            </li>
            <li>
              <img src="/images/screen-icon.svg" alt="icon" />
              <span>{props.item.display}</span>
            </li>
          </ul>
          <button onClick={props.item.addItem}>Add to cart</button>
        </div>
      </div>
      <div className="f-products">
        <h1>Featured Products</h1>
        <div className="featured-itmes">{props.featuredItems}</div>
      </div>
    </>
  );
}

export default ItemINfo;
