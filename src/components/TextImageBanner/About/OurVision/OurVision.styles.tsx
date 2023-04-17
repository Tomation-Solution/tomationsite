import styled from "styled-components";
import { mobileSm } from "../../../../responsive";

export const OurVisionContainer = styled.div`
  flex: 1;
  position: relative;

  .image-section {
    display: flex;
    gap: 20px;
    img {
      object-fit: contain;
    }
    .left {
      display: flex;
      align-items: center;
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .image2 {
        width: 200px;

        ${mobileSm({
          width: "100%",
        })}
      }
      .image3 {
        width: 200px;
        ${mobileSm({
          width: "100%",
        })}
      }
    }
    .image1 {
      width: 200px;
      top: 0;
      right: 0;
      ${mobileSm({
        width: "100%",
      })}
    }
  }
`;
