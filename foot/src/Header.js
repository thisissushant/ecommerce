import "./Header.css";
import React from "react";
import Cart from "./icons/Cart";

function Header() {
  return (
    <>
      <nav>
        <a className="home" href="#home">
          Foot
        </a>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <Cart />

        <a className="login" href="#cart">
          Cart
        </a>
        <a className="login" href="#login">
          Login
        </a>
      </nav>
    </>
  );
}
export default Header;
