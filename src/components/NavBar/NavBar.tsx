import React, { useState } from "react";
import { NavBarContainer } from "./NavBar.styles";
import { RxCaretDown, RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/Logo.png";
import NavBarSlider from "./NavBarSlider/NavBarSlider";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import GetStarted from "../GetStarted/GetStarted";

const NavBar = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [aboutDrop, setAboutDrop] = useState(false);
  const [letsStart, setLetsStart] = useState(false);
  return (
    <>
      <GetStarted closefn={() => setLetsStart(!letsStart)} show={letsStart} />
      <NavBarSlider
        show={showSlider}
        closefn={() => setShowSlider(!showSlider)}
      />
      <DropDown show={aboutDrop} />

      <NavBarContainer>
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="nav-items">
          <div className="nav-item">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="nav-item" onClick={() => setAboutDrop(!aboutDrop)}>
            About Us <RxCaretDown />
          </div>
          <div className="nav-item">
            <Link to={"/services"}>Services</Link>
          </div>
          <div className="nav-item">Portfolio</div>
          <div className="nav-item">
            <Link to={"/blog"}>Insight</Link>
          </div>
          <div className="nav-item">Contact Us</div>
          <div className="nav-btn" onClick={() => setLetsStart(!letsStart)}>
            Get Started
          </div>
        </div>

        <div className="hamburger">
          <RxHamburgerMenu onClick={() => setShowSlider(!showSlider)} />
        </div>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
