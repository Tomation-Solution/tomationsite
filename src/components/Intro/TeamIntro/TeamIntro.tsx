import React from "react";
import { TeamIntroContainer } from "./TeamIntro.styles";
import { TeamCheck } from "../../../assets/svgs";
import TeamIntroImg from "../../../assets/TeamIntroImg.png";

const TeamIntro = () => {
  return (
    <TeamIntroContainer>
      <div className="image-section">
        <img alt="" src={TeamIntroImg} />
      </div>
      <div className="text-section ">
        <h1>Our team provides you with the best solutions...</h1>
        <p>
          Our team of experts provides for all the required skill sets for an
          upwardly mobile tech development business. Apt attentions are paid to
          our development via the application of the agile methodology from
          ideation to product launch.
        </p>
        <div className="text-items">
          <div className="text-item">
            <TeamCheck />
            <p>Excellence in Service Delivery</p>
          </div>

          <div className="text-item">
            <TeamCheck />
            <p>Passion</p>
          </div>

          <div className="text-item">
            <TeamCheck />
            <p>Integrity</p>
          </div>

          <div className="text-item">
            <TeamCheck />
            <p>Constant Innovation</p>
          </div>
        </div>
      </div>
    </TeamIntroContainer>
  );
};

export default TeamIntro;
