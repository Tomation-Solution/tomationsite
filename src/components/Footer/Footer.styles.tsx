import styled from "styled-components";
import { globalPadding } from "../../global/glob-styles";
import { mobile, mobileSm, tablet } from "../../responsive";

export const FooterContainer = styled.div`
  ${globalPadding}
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #e6edef;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  ${tablet({
    flexDirection: "column",
  })}

  img {
    width: 200px;
    object-fit: contain;
  }

  .social-link {
    display: flex;
    gap: 20px;
    margin: 20px 0px;

    svg {
      font-size: 25px;
      cursor: pointer;
      color: #024d60;
    }
  }

  .input-con {
    position: relative;
    input {
      border: none;
      border-radius: 50px;
      background-color: #fff;
      color: #c2c2c2;
      padding: 10px 10px 10px 40px;
      width: 300px;
      margin: 10px 0px;

      ${mobileSm({
        width: "100%",
      })}
    }

    svg {
      position: absolute;
      left: 10px;
      top: 20px;
      color: #c2c2c2;
    }
  }
  .links-container {
    display: flex;
    gap: 40px;

    ${mobile({
      flexDirection: "column",
    })}

    .link-section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      color: #3a3a3a;

      span {
        a {
          text-decoration: none;
          color: #3a3a3a;
        }
      }
    }
  }
`;

export const FooterLower = styled.div`
  border-top: 2px solid #024d60;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6edef;

  p {
    font-size: 14px;
    color: #3a3a3a;
  }
`;
