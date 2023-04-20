import React from "react";
import "./Navbar.css";
import arrow from "./Arrow.svg";
import tomlogo from "./Tomation logo.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={tomlogo} />
      <p>Home</p>
      <p>
        About Us
        <img src={arrow} />
      </p>
      <p>Services</p>
      <p>Portfolio </p>
      <p>Insight</p>
      <p>Contact Us</p>
      <button>Get Started</button>
    </div>
  );
};

export default Navbar;
