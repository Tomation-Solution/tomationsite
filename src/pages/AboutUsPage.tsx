import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro/Intro";
import TextImageBanner from "../components/TextImageBanner/TextImageBanner";
import AboutIntro from "../components/Intro/AboutIntro/AboutIntro";
import OurVision from "../components/TextImageBanner/About/OurVision/OurVision";
import OurMission from "../components/TextImageBanner/About/OurMission/OurMission";
import CoreValues from "../components/CoreValues/CoreValues";
import OurTeam from "../components/TextImageBanner/About/OurTeam/OurTeam";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <Intro>
        <TextImageBanner
          reversed={true}
          header={"About Us"}
          larger={true}
          description={[
            "Tomation Solutions is a tech solution provider set up with the sole aim of the development of tech solutions that meets the needs of businesses as well as individuals creating ease around human existence.",
            "We pride ourselves to be an emerging industry leader within our operational scope. Aside from the provision of off the shelf solutions towards meeting needs and solving problems, we also undertake projects aimed at the development of bescope solutions.",
          ]}
          btnText={""}
        >
          <AboutIntro />
        </TextImageBanner>
      </Intro>

      <TextImageBanner
        reversed={true}
        header={"Our Vision"}
        description={
          "To become the global leader for industry growth and transformation technology solutions."
        }
        btnText={""}
      >
        <OurVision />
      </TextImageBanner>

      <TextImageBanner
        reversed={false}
        header={"Our Mission"}
        description={
          "To provide top notch technological solutions to business and personal needs across the board."
        }
        btnText={""}
      >
        <OurMission />
      </TextImageBanner>
      <CoreValues />
      <TextImageBanner
        reversed={true}
        header={"Our Team"}
        description={
          "Our team of experts provides for all the required skill sets for an upwardly mobile tech development business. Apt attentions are paid to our development via the application of the agile methodology from ideation to product launch."
        }
        where="/our-team"
        btnText={"Meet the Team"}
      >
        <OurTeam />
      </TextImageBanner>
      <Footer />
    </>
  );
};

export default AboutUsPage;
