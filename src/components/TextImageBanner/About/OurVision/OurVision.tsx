import React from "react";
import { OurVisionContainer } from "./OurVision.styles";
import OurVisionImg1 from "../../../../assets/OurVisionImg (1).png";
import OurVisionImg2 from "../../../../assets/OurVisionImg (2).png";
import OurVisionImg3 from "../../../../assets/OurVisionImg (3).png";

const OurVision = () => {
  return (
    <OurVisionContainer>
      <div className="image-section">
        <div className="left">
          <img alt="" src={OurVisionImg1} className="image1" />
        </div>
        <div className="right">
          <img alt="" src={OurVisionImg2} className="image2" />
          <img alt="" src={OurVisionImg3} className="image3" />
        </div>
      </div>
    </OurVisionContainer>
  );
};

export default OurVision;
