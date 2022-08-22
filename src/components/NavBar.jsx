import React, { useState } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const [isActive, setIsActive] = useState(false);

  function toggleMenu() {
    setIsActive((current) => !current);
  }
  return (
    <nav>
      <Link to="/">
        <img src="/images/logo.png" alt="store logo" />
      </Link>
      <button className="mobile-menu-btn">
        <img
          src="/images/menu-icon.svg"
          alt="menu button"
          onClick={toggleMenu}
        />
      </button>
      <div className={"nav-links"}>
        <ul className={isActive ? "active" : ""}>
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
      </div>
    </nav>
  );
}

export default NavBar;
