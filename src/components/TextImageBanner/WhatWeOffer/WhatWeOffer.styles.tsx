import styled from "styled-components";
import { mobile } from "../../../responsive";

export const OfferImageSection = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: flex-end;

  img {
    object-fit: contain;
  }

  .image1 {
    width: 400px;

    ${mobile({
      width: "100%",
    })}
  }

  .image2 {
    width: 200px;
    position: absolute;
    top: -20px;
    right: 200px;

    ${mobile({
      width: "30%",
      right: "70%",
    })}
  }

  .image3 {
    width: 200px;
    position: absolute;
    bottom: -20px;
    right: 200px;

    ${mobile({
      width: "30%",
      right: "70%",
    })}
  }

  .ellipses {
    object-fit: contain;
    position: absolute;
    z-index: -1;
    width: 300px;
    top: -50px;
    right: 0;

    ${mobile({
      width: "70%",
      transform: "rotate(90deg)",
      top: "-50px",
      left: "0",
    })}
  }
`;
