import React from "react";
//@ts-ignore
import Service from "../components/Services/Service";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro/Intro";
import ServiceIntro from "../components/Intro/ServiceIntro/ServiceIntro";

const ServicesPage = () => {
  return (
    <>
      <NavBar />
      <Intro>
        <ServiceIntro />
      </Intro>
      <Service />
      <Footer />
    </>
  );
};

export default ServicesPage;
