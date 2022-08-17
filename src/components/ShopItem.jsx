import React from "react";
import { Link } from "react-router-dom";

function ShopItem(props) {
  return (
    <Link to={`/ItemInfo/${props.id}`}>
      <div>
        <div className="item-card">
          <img src={props.img} alt="laptop" />
          <h3>{props.name}</h3>
          <p>{props.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ShopItem;
