import React from "react";
import { TeamIntroContainer } from "../TeamIntro/TeamIntro.styles";
import TeamIntroImg from "../../../assets/TeamIntroImg.png";

const ServiceIntro = () => {
  return (
    <TeamIntroContainer>
      <div className="image-section">
        <img className="service-img" alt="" src={TeamIntroImg} />
      </div>
      <div className="text-section ">
        <h1>
          Top notch technological solutions to business and personal needs
        </h1>
      </div>
    </TeamIntroContainer>
  );
};

export default ServiceIntro;
