import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import MainBanner from "./MainBanner";

function Shop(props) {
  const [items] = useState(props.shopItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemtIndex = lastItemIndex - itemsPerPage;
  const currentItems = items.slice(firstItemtIndex, lastItemIndex);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentItems]);
  return (
    <div>
      <MainBanner page={"Shop"} />
      <div className="items-grid">{currentItems}</div>
      <Pagination
        totalItems={items.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Shop;
