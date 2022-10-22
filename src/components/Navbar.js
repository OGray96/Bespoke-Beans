import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.PNG";

const Navbar = () => {
  const toggleNavbar = () => {
    document.getElementById("navbar-menu").classList.toggle("show");
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <button
          className="navbar-responsive btn"
          onClick={() => {
            toggleNavbar();
          }}
        >
          ☰
        </button>

        <div className="navbar-menu">
          <ul className="navbar-menu-items" id="navbar-menu">
            <li className="navbar-menu-item">
              <Link to="/Order">Order Now</Link>
            </li>

            <li className="navbar-menu-item">
              <Link to="/Products">Products</Link>
            </li>

            <li className="navbar-menu-item">
              <Link to="/FAQS">FAQS</Link>
            </li>

            <li className="navbar-menu-item">
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
