import React from "react";
import { PortfolioContainer } from "./Portfolio.styles";
import { GlobalHeader } from "../../global/glob-styles";
import PortfolioItem from "./PortfolioItem";
import Button from "../../global/Button/Button";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <GlobalHeader style={{ textAlign: "center" }}>Portfolio</GlobalHeader>
      <div className="portfolio-items">
        {[...new Array(5)].map((item, index) => (
          <PortfolioItem key={index} />
        ))}
      </div>

      <div className="btn-centered">
        <Button>View More</Button>
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio;
