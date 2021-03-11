// material UI
import MenuIcon from "@material-ui/icons/Menu";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { Link } from "react-router-dom";

import React, { useState } from "react";
import "./Navbar.css";

import MyButton from "./../Button/MyButton";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log({ click });
  };
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Travel
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <IconButton>
            {click ? (
              <CloseIcon style={{ color: "white" }} fontSize="large" />
            ) : (
              <MenuIcon style={{ color: "white" }} fontSize="large" />
            )}
          </IconButton>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Product" className="nav-links" onClick={closeMobileMenu}>
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Sign" className="nav-links" onClick={closeMobileMenu}>
              <MyButton name="Sign In" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
