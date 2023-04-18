import styled from "styled-components";
import { globalPadding } from "../../global/glob-styles";
import { tablet } from "../../responsive";

export const ReviewsContainer = styled.div`
  ${globalPadding}
  background-color: #e6edef;
`;

export const ReviewItemContainer = styled.div`
  color: #3a3a3a;
  display: flex;
  gap: 60px;
  align-items: center;
  position: relative;
  padding-bottom: 60px;

  ${tablet({
    flexDirection: "column",
  })}

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }

    h1 {
      font-weight: 600;
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }

    div {
      svg {
        color: #ffb800;
      }
    }
  }

  .right {
    border-left: 1px solid #3a3a3a;
    padding-left: 60px;

    ${tablet({
      border: "none",
      paddingLeft: "0",
    })}

    p {
      line-height: 25px;

      ${tablet({
        textAlign: "center",
        border: "none",
      })}
    }
  }

  .quote {
    display: block;
    padding: 10px;
    background-color: #e6edef;
    position: absolute;
    left: 240px;

    svg {
      font-size: 20px;
    }

    ${tablet({
      display: "none",
    })}
  }
`;
