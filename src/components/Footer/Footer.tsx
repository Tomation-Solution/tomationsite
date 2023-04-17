import React from "react";
import { FooterContainer, FooterLower } from "./Footer.styles";
import { FiFacebook, FiTwitter, FiSearch } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="search-section">
          <img alt="" src={Logo} />
          <div className="social-link">
            <FiFacebook />
            <FiTwitter />
            <SlSocialLinkedin />
          </div>
          <div className="input-con">
            <FiSearch />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="links-container">
          <div className="link-section">
            <h4>Company</h4>
            <span>
              <a href="#">Home</a>
            </span>
            <span>
              <a href="#">About</a>
            </span>
            <span>
              <a href="#">Services</a>
            </span>
            <span>
              <a href="#">Portfolio</a>
            </span>
            <span>
              <a href="#">Insight</a>
            </span>
            <span>
              <a href="#">Contact</a>
            </span>
          </div>

          <div className="link-section">
            <h4>Products</h4>
            <span>
              <a href="#">Bescope Tech solution</a>
            </span>
            <span>
              <a href="#">Web Solution development </a>
            </span>
            <span>
              <a href="#">Mobile Solution development</a>
            </span>
            <span>
              <a href="#">Electronic Document Management System</a>
            </span>
            <span>
              <a href="#">Backfile Conversion</a>
            </span>
            <span>
              <a href="#">Process Automation</a>
            </span>
          </div>
        </div>
      </FooterContainer>

      <FooterLower>
        <p>
          © {new Date().getFullYear()} Tomation solutions. All rights reserved.
        </p>
      </FooterLower>
    </>
  );
};

export default Footer;
