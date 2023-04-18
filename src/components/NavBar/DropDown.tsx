import React from "react";
import { DropDownContainer } from "./NavBar.styles";
import { Link } from "react-router-dom";

const DropDown: React.FC<{ show: boolean }> = ({ show }) => {
  return (
    <DropDownContainer isOpen={show}>
      <div className="dropdown-items">
        <div className="dropdown-item">
          <Link to={"/about-us"}>About Us</Link>
        </div>
        <div className="dropdown-item">
          <Link to={"/about-us"}>Our Mission</Link>
        </div>
        <div className="dropdown-item">
          <Link to={"/about-us"}>Our Vision</Link>
        </div>
        <div className="dropdown-item">
          <Link to={"/our-team"}>Our Team</Link>
        </div>
      </div>
    </DropDownContainer>
  );
};

export default DropDown;
