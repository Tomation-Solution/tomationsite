import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import OurTeam from "../components/OurTeam/OurTeam";
import Intro from "../components/Intro/Intro";
import TeamIntro from "../components/Intro/TeamIntro/TeamIntro";

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <Intro>
        <TeamIntro />
      </Intro>
      <OurTeam />
      <Footer />
    </>
  );
};

export default TeamPage;
