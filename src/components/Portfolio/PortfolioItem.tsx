import React from "react";
import { PortfolioItemContainer } from "./Portfolio.styles";

type Props = {
  image?: string;
  link?: string;
};

const PortfolioItem: React.FC<Props> = ({ image, link }) => {
  return (
    <PortfolioItemContainer>
      <a href={link} target="_blank" rel="noreferer">
        <img alt="" src={image} />
      </a>
    </PortfolioItemContainer>
  );
};

export default PortfolioItem;
