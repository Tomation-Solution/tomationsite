import styled from "styled-components";
import { globalPadding } from "../../global/glob-styles";
import { mobile, tablet } from "../../responsive";

export const TextImageBannerContainer = styled.div<{
  isReversed: boolean;
  isNoMargin?: boolean;
}>`
  ${globalPadding}
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.isReversed ? "row-reverse" : "row")};
  margin: ${(props) => (props.isNoMargin ? "" : "80px 0px")};
  justify-content: space-between;
  gap: 30px;

  ${tablet({
    flexDirection: "column-reverse",
    gap: "80px",
  })}

  .text-section {
    flex: 1;

    h1 {
      color: #024d60;
    }

    p {
      color: #141010;
      font-weight: 500;
      margin: 20px 0px;
    }
  }
`;
