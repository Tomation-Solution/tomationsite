import styled from "styled-components";
import { globalPadding } from "../../global/glob-styles";
import { tablet } from "../../responsive";

export const CoreValuesContainer = styled.div`
  ${globalPadding}
  background-color: #e6edef;

  .core-value-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;
  }
`;

export const CoreValueItemContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: relative;

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    position: relative;
    z-index: 1;
  }

  .back-image {
    width: 50px;
    height: 50px;
    object-fit: contain;
    position: absolute;
    right: 40px;
  }

  .description {
    background-color: transparent;
    border-radius: 10px;
    padding: 20px;
    font-size: 16px;
    color: #000;
    text-align: center;
    font-weight: 700;
  }
`;
