import styled from "styled-components";
import { Laptop, mobile, mobileSm, tablet } from "../../../responsive";
import { globalPadding } from "../../../global/glob-styles";

export const HomePageContainer = styled.div<{ isNotPadded: boolean }>`
  display: flex;
  gap: 30px;
  ${globalPadding}
  align-items: center;

  ${tablet({
    flexDirection: "column",
    paddingTop: "80px",
  })}

  .text-section {
    flex: 1;

    h1 {
      color: #141010;
      font-size: 50px;

      ${mobile({
        fontSize: "30px",
      })}
    }

    h4 {
      color: #141010;
      font-weight: 500;
      font-size: 25px;
      margin: 20px 0px;
    }
  }

  .image-section {
    flex: 1;
    position: relative;
    display: flex;
    padding: ${(props) => (props.isNotPadded ? "20px 0px" : "80px 0px")};

    ${Laptop({
      padding: "30px 0px",
    })}

    img {
      width: 300px;
      object-fit: contain;
      transition: all 0.3s ease-in-out;
      z-index: 1;
      position: relative;

      ${Laptop({
        width: "150px",
      })}
      ${tablet({
        width: "200px",
      })}
      ${mobile({
        width: "200px",
      })}
      ${mobileSm({
        width: "100%",
      })}
    }

    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .right {
      display: flex;
      gap: 20px;
      flex-direction: column;
    }

    .arc1 {
      position: absolute;
      top: 40px;
      right: 20%;

      svg {
        width: 300px;
        ${Laptop({
          width: "150px",
        })}
        ${tablet({
          width: "200px",
        })}
      ${mobile({
          width: "200px",
        })}
      ${mobileSm({
          width: "100px",
        })}
      }
    }

    .arc2 {
      position: absolute;
      bottom: 100px;
      right: 40%;
      transform: rotateZ(190deg);

      ${Laptop({
        bottom: "50px",
      })}

      svg {
        width: 300px;
        ${Laptop({
          width: "150px",
        })}
        ${tablet({
          width: "200px",
        })}
      ${mobile({
          width: "200px",
        })}
      ${mobileSm({
          width: "100px",
        })}
      }
    }
  }
`;
