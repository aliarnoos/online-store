import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img src="/images/logo.png" alt="store logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Shop">Shop</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
