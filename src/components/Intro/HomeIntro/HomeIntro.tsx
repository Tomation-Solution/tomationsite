import React, { useState } from "react";
import { HomePageContainer } from "./HomeIntro.styles";
import Button from "../../../global/Button/Button";
import HomeIntroImg1 from "../../../assets/HomeIntroImg (1).png";
import HomeIntroImg2 from "../../../assets/HomeIntroImg (2).png";
import HomeIntroImg3 from "../../../assets/HomeIntroImg (3).png";
import { HomeIntroArchs } from "../../../assets/svgs";
import GetStarted from "../../GetStarted/GetStarted";

const HomeIntro = () => {
  const [letsStart, setLetsStart] = useState(false);
  return (
    <>
      <GetStarted closefn={() => setLetsStart(!letsStart)} show={letsStart} />
      <HomePageContainer isNotPadded={true}>
        <section className="text-section">
          <h1>Best Solutions that Meets your Needs</h1>
          <h4>Get the best tech solutions to make creating ease possible.</h4>
          <Button clickfn={() => setLetsStart(!letsStart)}>
            Let’s Get Started
          </Button>
        </section>

        <section className="image-section">
          <div className="left">
            <img className="image2" alt="" src={HomeIntroImg2} />
          </div>
          <div className="right">
            <img className="image1" alt="" src={HomeIntroImg1} />
            <img className="image3" alt="" src={HomeIntroImg3} />
          </div>

          <div className="arc1">
            <HomeIntroArchs />
          </div>

          <div className="arc2">
            <HomeIntroArchs />
          </div>
        </section>
      </HomePageContainer>
    </>
  );
};

export default HomeIntro;
