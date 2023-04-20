import React from "react";
import "./Service3.css";
import one from "../../Services/images/01.svg";
import two from "../../Services/images/02.svg";
import three from "../../Services/images/03.svg";

const Service3 = () => {
  return (
    <div className="Service3">
      <div className="container">
        <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
          How we handle Projects
        </h1>
        <div className="ways">
          <div className="numeral">
            <img src={one} />
            <h3>Research Your Business</h3>
            <p>Lorem ipsum dolor sit amet, consecteur</p>
          </div>
          <div className="numeral">
            <img src={two} />
            <h3>Execute the Project</h3>
            <p>Lorem ipsum dolor sit amet, consecteur</p>
          </div>
          <div className="numeral">
            <img src={three} />
            <h3>Demonstrable Results</h3>
            <p>Lorem ipsum dolor sit amet, consecteur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service3;
