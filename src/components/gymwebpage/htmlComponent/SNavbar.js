import React, { useRef } from "react";
import { cart } from "./ImdData";
import "../cssComponent/SNavbar.css";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
const SNavbar = () => {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const navbarhandler = () => {
    navbarRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    searchRef.current.classList.remove("active");
  };
  return (
    <>
      <header className="header">
        <a href="" className="logo">
          <h3>
            M<span>Fitness</span> <span>P</span>roducts
          </h3>
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </nav>
        <div className="icons">
          <div className="asd" onClick={searchHandler}>
            <FaSearch />
          </div>
          <div className="asd" onClick={cartHandler}>
            <FaCartPlus />
          </div>
          <div className="asd" id="menu-btn" onClick={navbarhandler}>
            <IoMenu />
          </div>
        </div>
        <div className="search-form " ref={searchRef}>
          <input
            type="search"
            placeholder="search heare ....."
            id="search-box"
          />
          <label htmlFor="search-box" className="fas fa-search">
            <FaSearch />
          </label>
        </div>

        <div className="cart-items-container" ref={cartRef}>
          {/* {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99</div>
              </div>
            </div>
          ))} */}
          {/* <a className="btn" href="">
            Checkout Now
          </a> */}
        </div>
      </header>
    </>
  );
};

export default SNavbar;
