import React from "react";
import "./Service.css";

import Service2 from "./Service2/Service2";
import Service3 from "./Service3/Service3";
import Faqs from "./Faqs/Faqs";
import TextImageBanner from "../TextImageBanner/TextImageBanner";

const Service = () => {
  return (
    <div className="Services">
      <Service2 />
      <Service3 />
      <TextImageBanner
        reversed={false}
        header={"FAQ from Our Customers and Clients"}
        description={""}
        btnText={"Ask a Question"}
      >
        <Faqs />
      </TextImageBanner>
    </div>
  );
};

export default Service;
