import React from "react";
import { Link } from "react-router-dom";

function Home() {
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
    </>
  );
}

export default Home;
