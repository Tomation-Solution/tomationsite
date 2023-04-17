import styled, { css } from "styled-components";
import { K4, mobile } from "../responsive";

export const globalPadding = css`
  padding: 10px 50px;
  ${mobile({
    padding: "10px 20px",
  })}
  ${K4({
    padding: "10px 20%",
  })}
`;

export const GlobalHeader = styled.h1`
  color: #024d60;
  margin: 20px 0px 50px 0px;
`;
