import React from "react";
import HomeTextImageBanner1 from "../../../assets/HomeTextImageBanner (1).png";
import HomeTextImageBanner2 from "../../../assets/HomeTextImageBanner (2).png";
import HomeTextImageBanner3 from "../../../assets/HomeTextImageBanner (3).png";
import Ellipses from "../../../assets/Ellipses.png";
import { ImageSection } from "./WhoAreWe.styles";

const WhoAreWe = () => {
  return (
    <ImageSection>
      <img alt="" src={Ellipses} className="ellipses" />
      <img alt="" src={HomeTextImageBanner1} className="image1" />
      <img alt="" src={HomeTextImageBanner2} className="image2" />
      <img alt="" src={HomeTextImageBanner3} className="image3" />
    </ImageSection>
  );
};

export default WhoAreWe;
