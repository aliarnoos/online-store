import React from "react";

function Shop(props) {
  return (
    <div>
      <div className="items-grid">{props.shopItems}</div>
    </div>
  );
}

export default Shop;
