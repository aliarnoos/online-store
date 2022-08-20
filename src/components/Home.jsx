import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <div className="home-banner">
        <div className="banner-text">
          <h1>Welcome To Our Store</h1>
          <p>Find your next laptop here</p>
        </div>
        <Link to="/Shop">
          <button>Shop Now</button>
        </Link>
      </div>
      <div className="f-products">
        <h1>Featured Products</h1>
        <div className="featured-itmes">{props.featuredItems}</div>
      </div>
    </>
  );
}

export default Home;
