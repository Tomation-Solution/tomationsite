import React from "react";
import { IntroContainer } from "./Intro.styles";

const Intro = ({ children }: React.PropsWithChildren) => {
  return (
    <IntroContainer>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,64L80,90.7C160,117,320,171,480,176C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </IntroContainer>
  );
};

export default Intro;
