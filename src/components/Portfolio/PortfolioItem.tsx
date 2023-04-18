import React from "react";
import { PortfolioItemContainer } from "./Portfolio.styles";

type Props = {
  image?: string;
};

const PortfolioItem: React.FC<Props> = ({ image }) => {
  return (
    <PortfolioItemContainer>
      <a href="" rel="noreferer">
        <img alt="" src={image} />
      </a>
    </PortfolioItemContainer>
  );
};

export default PortfolioItem;
