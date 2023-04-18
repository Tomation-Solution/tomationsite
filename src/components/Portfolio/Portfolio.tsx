import React from "react";
import { PortfolioContainer } from "./Portfolio.styles";
import { GlobalHeader } from "../../global/glob-styles";
import PortfolioItem from "./PortfolioItem";
import Button from "../../global/Button/Button";
import Portfolio1 from "../../assets/PorfolioImg (1).png";
import Portfolio2 from "../../assets/PorfolioImg (2).png";
import Portfolio3 from "../../assets/PorfolioImg (3).png";
import Portfolio4 from "../../assets/PorfolioImg (4).png";
import Portfolio5 from "../../assets/PorfolioImg (5).png";
import Portfolio6 from "../../assets/PorfolioImg (6).png";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <GlobalHeader style={{ textAlign: "center" }}>Portfolio</GlobalHeader>
      <div className="portfolio-items">
        {[
          Portfolio1,
          Portfolio2,
          Portfolio3,
          Portfolio4,
          Portfolio5,
          Portfolio6,
        ].map((item, index) => (
          <PortfolioItem image={item} key={index} />
        ))}
      </div>

      <div className="btn-centered">
        <Button>View More</Button>
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio;
