import styled from "styled-components";
import { globalPadding } from "../../global/glob-styles";

export const ClientContainer = styled.div`
  ${globalPadding}

  .client-items {
    margin: 30px 0px;
  }
`;

export const ClientItemContainer = styled.div`
  width: 300px;
  height: 200px;
  box-shadow: 0px 8px 10px #d3d3d3;
  border-radius: 50px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
