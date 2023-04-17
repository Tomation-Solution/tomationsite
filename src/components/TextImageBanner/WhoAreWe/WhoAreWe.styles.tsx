import styled from "styled-components";
import { mobile } from "../../../responsive";

export const ImageSection = styled.div`
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
  .ellipses {
    object-fit: contain;
    position: absolute;
    z-index: -1;
    width: 300px;
    top: -50px;
    left: 0;

    ${mobile({
      width: "70%",
      transform: "rotate(90deg)",
      top: "-50px",
    })}
  }
`;
