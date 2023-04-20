import styled from "styled-components";
import { globalPadding } from "../../../global/glob-styles";
import { mobileSm, tablet } from "../../../responsive";

export const TeamIntroContainer = styled.div`
  display: flex;
  ${globalPadding}
  padding-top: 20px;
  color: #141010;
  gap: 30px;
  align-items: center;

  ${tablet({
    flexDirection: "column",
  })}

  .image-section {
    img {
      width: 400px;
      height: 400px;
      object-fit: contain;
      border-radius: 50%;
    }

    .service-img {
      ${mobileSm({
        width: "100%",
      })}
    }
  }
  .text-section {
    h1 {
      font-size: 40px;
    }
    p {
      line-height: 25px;
    }

    .text-items {
      margin: 30px 0px;
      width: 70%;
      display: grid;
      gap: 30px;
      grid-template-columns: auto auto;

      ${tablet({
        gridTemplateColumns: "auto",
        width: "100%",
      })}

      .text-item {
        display: flex;
        align-items: center;
        font-size: 14px;

        svg {
          margin-right: 20px;
        }

        p {
          flex: 1;
        }
      }
    }
  }
`;
