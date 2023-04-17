import React from "react";
import { AboutIntroContainer } from "./AboutIntro.styles";
import HomeTextImageBanner1 from "../../../assets/HomeTextImageBanner (1).png";
import HomeTextImageBanner2 from "../../../assets/HomeTextImageBanner (2).png";
import HomeTextImageBanner3 from "../../../assets/HomeTextImageBanner (3).png";

const AboutIntro = () => {
  return (
    <AboutIntroContainer>
      <img alt="" src={HomeTextImageBanner1} className="image1" />
      <img alt="" src={HomeTextImageBanner2} className="image2" />
      <img alt="" src={HomeTextImageBanner3} className="image3" />
    </AboutIntroContainer>
  );
};

export default AboutIntro;
