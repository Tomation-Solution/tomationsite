import React from "react";
import { IntroContainer } from "./Intro.styles";

const Intro = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <IntroContainer>{children}</IntroContainer>
      <div style={{ height: "150px", overflow: "hidden", marginTop: "-5px" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#e6edef" }}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Intro;
