import React from "react";
import "./Footer.css";
import logo from "./Tomation logo.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import linkdin from "./linkdin.svg";
import copyright from "./copyright.svg";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="top">
          <div className="logoform">
            <img src={logo} />
            <div className="socials">
              <img src={facebook} />
              <img src={twitter} />
              <img src={linkdin} />
            </div>

            <input placeholder="Placeholder" />
          </div>

          <div placeholder="Company">
            <h1>Company</h1>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Insight</p>
            <p>Contact</p>
          </div>

          <div placeholder="Products">
            <h1>Products</h1>
            <p>Bescope Tech solution</p>
            <p>Web Solution development </p>
            <p>Mobile Solution development</p>
            <p>Electronic Document Management System</p>
            <p>Backfile Conversion</p>
            <p>Process Automation</p>
          </div>
        </div>
        <div className="under">
          <div className="line"></div>
          <img src={copyright} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
