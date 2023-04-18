import styled from "styled-components";

export const GlobalButton = styled.button<{ styleTypex: string }>`
  padding: 10px;
  border-radius: 50px;
  font-weight: 500;
  color: #fff;
  transition: all 0.3s ease-in-out;
  background-color: #024d60;
  border: 1px solid #024d60;
  cursor: pointer;
  width: 150px;
  text-align: center;

  &:hover {
    color: #024d60;
    border: 1px solid #024d60;
    background-color: ${(props) =>
      props.styleTypex === "bright" ? "#fff" : "transparent"};
    transform: scale(1.05);
  }
`;
