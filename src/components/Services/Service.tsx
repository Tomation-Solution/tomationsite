import React from "react";
import "./Service.css";

import Service2 from "./Service2/Service2";
import Service3 from "./Service3/Service3";
import Service4 from "./Service4/Service4";

const Service = () => {
  return (
    <div className="Services">
      <Service2 />

      <Service3 />
      <Service4 />
    </div>
  );
};

export default Service;
