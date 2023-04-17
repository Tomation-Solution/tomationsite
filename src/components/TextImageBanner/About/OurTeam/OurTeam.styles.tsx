import styled from "styled-components";
import { mobile } from "../../../../responsive";

export const OurTeamsContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;

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
    left: -10px;

    ${mobile({
      width: "30%",
      right: "70%",
    })}
  }

  .image3 {
    width: 200px;
    position: absolute;
    bottom: -20px;
    left: -10px;

    ${mobile({
      width: "30%",
      right: "70%",
    })}
  }
`;
