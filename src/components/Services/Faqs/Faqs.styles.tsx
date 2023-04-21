import styled from "styled-components";

export const FaqsContaier = styled.div`
  flex: 1;
`;

export const FaqItemContainer = styled.div`
  padding: 10px 20px;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    border-bottom: 1px solid #d3d3d3;
    cursor: pointer;

    h2 {
      font-weight: 600;
      font-size: 20px;
    }

    span {
      font-size: 30px;
    }
  }
  .content {
    overflow: hidden;
    max-height: 0;
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
    p {
      font-size: 15px;
      margin: 10px 0px;
      line-height: 25px;
    }

    &.show {
      height: auto;
      max-height: 900px;
      transition: all 0.5s cubic-bezier(1, 0, 1, 0);
      padding: 10px 0px;
    }
  }
`;
