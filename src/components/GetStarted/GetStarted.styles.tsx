import styled from "styled-components";
import { tablet } from "../../responsive";

export const GetStartedContainer = styled.div<{ isOpen: boolean }>`
  width: 600px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
  position: fixed;
  z-index: 40;
  transition: all 0.5s;
  transform: ${(props) =>
    props.isOpen ? "translateY(0%)" : "translateY(-500%)"};
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 120px;
  box-shadow: 0px 5px 10px #d3d3d3;

  .close-btn {
    position: absolute;
    top: 10px;
    right: 20px;

    svg {
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
    }
  }

  ${tablet({
    width: "90vw",
  })}

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
    height: 300px;
  }

  .btn-centered {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
  }
`;
