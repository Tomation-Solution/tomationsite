import styled from "styled-components";
import { Laptop } from "../../responsive";
import { globalPadding } from "../../global/glob-styles";

export const NavBarContainer = styled.div`
  ${globalPadding}
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  box-shadow: 0px 5px 10px #d3d3d3;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;

  .logo {
    width: 150px;
    height: 100%;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }

  .nav-items {
    display: flex;
    align-items: center;
    gap: 30px;

    .nav-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-weight: 500;
      color: #141010;

      a {
        text-decoration: none;
        color: #141010;
      }

      svg {
        margin-left: 5px;
      }
    }

    .nav-btn {
      padding: 10px;
      border-radius: 50px;
      font-weight: 500;
      color: #fff;
      transition: all 0.3s ease-in-out;
      background-color: #024d60;
      border: 1px solid #024d60;
      cursor: pointer;

      &:hover {
        color: #024d60;
        border: 1px solid #024d60;
        background-color: transparent;
      }
    }
    ${Laptop({
      display: "none",
    })}
  }

  .hamburger {
    display: none;
    svg {
      cursor: pointer;
      font-size: 25px;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #7d5179;
        transform: scale(1.5);
      }
    }

    ${Laptop({
      display: "block",
    })}
  }
`;

export const DropDownContainer = styled.div<{ isOpen: boolean }>`
  .dropdown-items {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    position: absolute;
    transition: all 0.5s;
    background-color: #fff;
    border-radius: 10px;
    width: 200px;
    transform: ${(props) =>
      props.isOpen ? "translateY(0%)" : "translateY(-500%)"};
    left: 50%;
    top: 20%;
    z-index: 30;

    ${Laptop({
      display: "none",
    })}

    .dropdown-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-weight: 500;
      color: #6f6c90;

      a {
        text-decoration: none;
        color: #6f6c90;
      }

      svg {
        margin-left: 5px;
      }
    }
  }
`;
