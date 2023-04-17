import styled from "styled-components";
import { globalPadding } from "../../global/glob-styles";

export const PortfolioContainer = styled.div`
  ${globalPadding}

  .portfolio-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
  }

  .btn-centered {
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PortfolioItemContainer = styled.div`
  width: 350px;
  height: 300px;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;

  box-shadow: 0px 5px 8px #d3d3d3;

  &:hover {
    border: 2px solid skyblue;
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
