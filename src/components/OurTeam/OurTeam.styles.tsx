import styled from "styled-components";
import { globalPadding } from "../../global/glob-styles";
import Inquiries from "../../assets/Inquiries.png";

export const TeamContainer = styled.div`
  ${globalPadding}

  .professional-team {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 30px;
    padding: 30px 0px;
  }
`;

export const TeamMembersContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    border-radius: 50%;
  }

  h3 {
    font-weight: 600;
    text-align: center;
    font-size: 18px;
  }

  .social-link {
    display: flex;
    gap: 20px;

    svg {
      font-size: 20px;
      cursor: pointer;
      color: #024d60;
    }
  }
`;

export const TeamInquiries = styled.div`
  ${globalPadding}

  min-height: 50vh;
  margin: 40px 0px;

  background-image: url(${Inquiries});
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .inquiries-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #fff;
      text-align: center;
      margin-bottom: 30px;
    }
  }
`;
