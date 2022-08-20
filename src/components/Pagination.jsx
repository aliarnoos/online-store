import React from "react";

function Pagination({ totalItems, itemsPerPage, setCurrentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }
  const pagesBtns = pages.map((page, index) => {
    return (
      <button key={index} onClick={() => setCurrentPage(page)}>
        {page}
      </button>
    );
  });
  return <div className="pagination">{pagesBtns}</div>;
}

export default Pagination;
