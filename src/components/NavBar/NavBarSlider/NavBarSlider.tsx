import React, { useState } from "react";
import { NavBarSliderContainer } from "./NavBarSlider.styles";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import GetStarted from "../../GetStarted/GetStarted";

const NavBarSlider: React.FC<{ show: boolean; closefn: () => void }> = ({
  show,
  closefn,
}) => {
  const [letsStart, setLetsStart] = useState(false);
  return (
    <>
      <GetStarted closefn={() => setLetsStart(!letsStart)} show={letsStart} />
      <NavBarSliderContainer isOpen={show}>
        <div className="nav-items">
          <div className="nav-item">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="nav-item">
            <Link to={"/about-us"}>About Us</Link>
          </div>
          <div className="nav-item">
            <Link to={"/our-team"}>Our Team</Link>
          </div>
          <div className="nav-item">Services</div>
          <div className="nav-item">Portfolio</div>
          <div className="nav-item">
            <Link to={"/blog"}>Insight</Link>
          </div>
          <div className="nav-item">Contact Us</div>
          <div className="nav-btn" onClick={() => setLetsStart(!letsStart)}>
            Get Started
          </div>
        </div>

        <div className="close-btn">
          <GrFormClose onClick={closefn} />
        </div>
      </NavBarSliderContainer>
    </>
  );
};

export default NavBarSlider;
