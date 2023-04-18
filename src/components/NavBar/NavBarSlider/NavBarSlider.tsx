import React from "react";
import { NavBarSliderContainer } from "./NavBarSlider.styles";
import { GrFormClose } from "react-icons/gr";

const NavBarSlider: React.FC<{ show: boolean; closefn: () => void }> = ({
  show,
  closefn,
}) => {
  return (
    <NavBarSliderContainer isOpen={show}>
      <div className="nav-items">
        <div className="nav-item">Home</div>
        <div className="nav-item">About Us</div>
        <div className="nav-item">Our Team</div>
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
