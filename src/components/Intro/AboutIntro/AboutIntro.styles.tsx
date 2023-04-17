import styled from "styled-components";
import { mobile } from "../../../responsive";

export const AboutIntroContainer = styled.div`
  flex: 1;
  position: relative;

  img {
    object-fit: contain;
  }
  .image1 {
    width: 500px;

    ${mobile({
      width: "100%",
    })}
  }
  .image3 {
    position: absolute;
    width: 200px;
    bottom: -20px;
    left: -5%;

    ${mobile({
      width: "30%",
      left: "5%",
    })}
  }
  .image2 {
    position: absolute;
    width: 100px;
    bottom: 0;
    left: 400px;

    ${mobile({
      width: "30%",
      left: "70%",
    })}
  }
`;
