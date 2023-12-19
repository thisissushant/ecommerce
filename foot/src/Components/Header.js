import "./Header.css";
import React from "react";
import Cart from "../icons/Cart";

function Header() {
  return (
    <>
      <nav>
        <a className="home-logo" href="#home">
          Trendy
        </a>
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">Replacement</a>
        <a href="#services">About</a>
        <a href="#contact">Contact</a>

        <Cart />

        <a className="login" href="#cart">
          Cart
        </a>
        <a className="login" href="#login">
          Login
        </a>
      </nav>
      <div className="video">
        <i class=" fa-solid fa-video fa-fade">
          <a href="#videoCall"> Video Call Request</a>
        </i>
      </div>
    </>
  );
}
export default Header;
