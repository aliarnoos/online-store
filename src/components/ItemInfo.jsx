import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

function ItemINfo(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [props.item]);

  const params = useParams();
  const itemID = params.id;
  let laptop = data.filter((el) => el.id === itemID);
  const item = laptop[0];
  const [info, setInfo] = useState();
  useEffect(() => {
    setInfo(
      <div>
        <div className="item-info">
          <img src={item.img} alt="laptop pic" className="laptop-img" />
          <div className="spec-info">
            <h1>{item.name}</h1>
            <h3>{item.price}</h3>
            <ul>
              <li>
                <img src="/images/cpu-icon.svg" alt="icon" />
                <span>{item.cpu}</span>
              </li>
              <li>
                <img src="/images/gc-icon.svg" alt="icon" />
                <span>{item.gpu}</span>
              </li>
              <li>
                <img src="/images/storage-icon.svg" alt="icon" />
                <span>{item.storage}</span>
              </li>
              <li>
                <img src="/images/screen-icon.svg" alt="icon" />
                <span>{item.display}</span>
              </li>
            </ul>
            <button onClick={props.item.addItem}>Add to cart</button>
          </div>
        </div>
        <div className="f-products">
          <h1>Featured Products</h1>
          <div className="featured-itmes">{props.featuredItems}</div>
        </div>
      </div>
    );
  }, [item]);
  return <>{info}</>;
}

export default ItemINfo;
