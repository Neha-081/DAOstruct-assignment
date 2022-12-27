import React from "react";
import "./navbar.css";

const Navbar = () => {

  return (
    <nav className="static-nav nav-inner">
      <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
        width="160" height="55" alt="Sensibull logo" />
        <p className="my-name">Neha Prajapati</p>
      <ul className="top-nav-links">
        Astronomy Picture of the Day
      </ul>
    </nav>
  )
};

export default Navbar;