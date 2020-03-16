//react imports
import React from "react";
import { Link } from "react-router-dom";

//style imports
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link className="navLink" to="/">
        Main Menu
      </Link>
      <Link className="navLink" to="/series">
        Series Menu
      </Link>
      <Link className="navLink" to="/theatre">
        Theatre
      </Link>
    </nav>
  );
};

export default NavBar;
