import React from "react";
//import Nav from './Nav';
import '../Assets/Css/nav.css'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
    
     <nav className="header-area"> 
      <ul className="nav-links">
        <li className="center">
          <Link to="/">
            <b>Cosmetics</b>
          </Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
     <li> 
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Product">Product</Link>
        </li>
        

      </ul>
     </nav> 
   
  </>
  );
}

export default Nav;
