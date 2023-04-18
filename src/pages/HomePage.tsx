import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Intro from "../components/Intro/Intro";
import HomeIntro from "../components/Intro/HomeIntro/HomeIntro";
import TextImageBanner from "../components/TextImageBanner/TextImageBanner";
import WhoAreWe from "../components/TextImageBanner/WhoAreWe/WhoAreWe";
import WhatWeOffer from "../components/TextImageBanner/WhatWeOffer/WhatWeOffer";
import Portfolio from "../components/Portfolio/Portfolio";
import Reviews from "../components/Reviews/Reviews";
import Client from "../components/Client/Client";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <Intro>
        <HomeIntro />
      </Intro>
      <TextImageBanner
        header="Who We Are"
        description="Tomation Solutions is a tech solution provider set up with the sole aim of the development of tech solutions that meets the needs of businesses as well as individuals creating ease around human existence."
        where="/about-us"
        btnText="More About Us"
        reversed={true}
      >
        <WhoAreWe />
      </TextImageBanner>
      <TextImageBanner
        header="What We Offer"
        description="We provide bespoke technology solutions for upwardly mobile businesses and non-profit making organisations."
        btnText="More Services"
        reversed={false}
      >
        <WhatWeOffer />
      </TextImageBanner>
      <Portfolio />
      <Reviews />
      <Client />
      <Footer />
    </>
  );
};

export default HomePage;
