import React, { useState } from "react";
import { NavBarContainer } from "./NavBar.styles";
import { RxCaretDown, RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/Logo.png";
import NavBarSlider from "./NavBarSlider/NavBarSlider";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showSlider, setShowSlider] = useState(false);
  return (
    <>
      <NavBarSlider
        show={showSlider}
        closefn={() => setShowSlider(!showSlider)}
      />
      <NavBarContainer>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className="nav-items">
          <div className="nav-item">Home</div>
          <div className="nav-item">
            <Link to={"/about-us"}>
              About Us <RxCaretDown />
            </Link>
          </div>
          <div className="nav-item">Services</div>
          <div className="nav-item">Portfolio</div>
          <div className="nav-item">Insight</div>
          <div className="nav-item">Contact Us</div>
          <div className="nav-btn">Get Started</div>
        </div>

        <div className="hamburger">
          <RxHamburgerMenu onClick={() => setShowSlider(!showSlider)} />
        </div>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
