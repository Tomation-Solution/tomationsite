import React from "react";
import { NavBarSliderContainer } from "./NavBarSlider.styles";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const NavBarSlider: React.FC<{ show: boolean; closefn: () => void }> = ({
  show,
  closefn,
}) => {
  return (
    <NavBarSliderContainer isOpen={show}>
      <div className="nav-items">
        <div className="nav-item">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="nav-item">
          <Link to={"/about-us"}>About Us</Link>
        </div>
        <div className="nav-item">
          <Link to={"/our-team"}></Link>
          Our Team
        </div>
        <div className="nav-item">
          <Link to={"/blog"}>Blog</Link>
        </div>
        <div className="nav-item">Services</div>
        <div className="nav-item">Portfolio</div>
        <div className="nav-item">Insight</div>
        <div className="nav-item">Contact Us</div>
        <div className="nav-btn">Get Started</div>
      </div>

      <div className="close-btn">
        <GrFormClose onClick={closefn} />
      </div>
    </NavBarSliderContainer>
  );
};

export default NavBarSlider;
