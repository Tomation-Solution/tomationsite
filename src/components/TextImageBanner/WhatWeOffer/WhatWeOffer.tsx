import React from "react";
import { OfferImageSection } from "./WhatWeOffer.styles";
import Ellipses from "../../../assets/Ellipses.png";
import HomeTextImageBanner1 from "../../../assets/HomeTextImageBanner (1).png";
import HomeTextImageBanner2 from "../../../assets/OfferTextImage (1).png";
import HomeTextImageBanner3 from "../../../assets/OfferTextImage (2).png";

const WhatWeOffer = () => {
  return (
    <OfferImageSection>
      <img alt="" src={Ellipses} className="ellipses" />
      <img alt="" src={HomeTextImageBanner1} className="image1" />
      <img alt="" src={HomeTextImageBanner3} className="image2" />
      <img alt="" src={HomeTextImageBanner2} className="image3" />
    </OfferImageSection>
  );
};

export default WhatWeOffer;
