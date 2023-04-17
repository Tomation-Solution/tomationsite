import React from "react";
import { OurTeamsContainer } from "./OurTeam.styles";
import HomeTextImageBanner1 from "../../../../assets/OurTeam (1).png";
import HomeTextImageBanner2 from "../../../../assets/OurTeam (2).png";
import HomeTextImageBanner3 from "../../../../assets/OurTeam (3).png";

const OurTeam = () => {
  return (
    <OurTeamsContainer>
      <img alt="" src={HomeTextImageBanner3} className="image1" />
      <img alt="" src={HomeTextImageBanner1} className="image2" />
      <img alt="" src={HomeTextImageBanner2} className="image3" />
    </OurTeamsContainer>
  );
};

export default OurTeam;
