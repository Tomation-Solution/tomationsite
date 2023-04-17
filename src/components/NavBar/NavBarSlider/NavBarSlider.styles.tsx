import styled from "styled-components";

export const NavBarSliderContainer = styled.div<{ isOpen: boolean }>`
  padding: 50px 20px;
  transform: ${(props) =>
    props.isOpen ? "translateY(0%)" : "translateY(-500%)"};
  background-color: #e6edef;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out;
  width: 100%;
  z-index: 20;
  box-shadow: 0px 5px 8px #d3d3d3;

  .nav-items {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .nav-item {
      color: #141010;
      font-weight: 500;
      cursor: pointer;
      text-transform: uppercase;
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
    width: 150px;
    text-align: center;

    &:hover {
      color: #024d60;
      border: 1px solid #024d60;
      background-color: transparent;
    }
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    svg {
      cursor: pointer;
      font-size: 40px;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #7d5179;
        transform: scale(1.5);
      }
    }
  }
`;
