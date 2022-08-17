import React from "react";
import NavBar from "./NavBar";
import ShopItem from "./ShopItem";
import { data } from "../data";

function Shop() {
  const shopItems = data.map((item) => (
    <ShopItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      img={item.img}
    />
  ));
  return (
    <div>
      <NavBar />
      <div className="items-grid">{shopItems}</div>
    </div>
  );
}

export default Shop;
