import React from "react";
import { PortfolioItemContainer } from "./Portfolio.styles";

type Props = {
  image?: string;
};

const PortfolioItem: React.FC<Props> = ({ image }) => {
  return (
    <PortfolioItemContainer>
      <img alt="" src="" />
    </PortfolioItemContainer>
  );
};

export default PortfolioItem;
