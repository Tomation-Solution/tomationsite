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
          { image: Portfolio1, link: "https://mutual-alliance.netlify.app/" },
          { image: Portfolio2, link: "/" },
          { image: Portfolio3, link: "https://www.emetricsuite.com/" },
          { image: Portfolio4, link: "/" },
          { image: Portfolio5, link: "/" },
          { image: Portfolio6, link: "https://nb-chambers.netlify.app/" },
        ].map((item, index) => (
          <PortfolioItem image={item.image} link={item.link} key={index} />
        ))}
      </div>

      <div className="btn-centered">
        <Button>View More</Button>
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio;
