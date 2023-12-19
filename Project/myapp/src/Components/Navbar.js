import React from "react";
import '../Assets/Css/nav.css';

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="header-area">
      <ul className="nav-links">
        <li className="center">
          <Link to="/">
            <b>Beverage</b>
          </Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
