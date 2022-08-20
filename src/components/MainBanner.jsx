import React from "react";
import { Link } from "react-router-dom";

function MainBanner(props) {
  return (
    <div className="main-banner">
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>/ {props.page}</span>
    </div>
  );
}

export default MainBanner;
