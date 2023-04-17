import React from "react";
import { ReviewsContainer } from "./Reviews.styles";
import { GlobalHeader } from "../../global/glob-styles";
import { AiFillStar } from "react-icons/ai";
import { IoMdQuote } from "react-icons/io";

const Reviews = () => {
  return (
    <ReviewsContainer>
      <GlobalHeader style={{ textAlign: "center" }}>Reviews</GlobalHeader>
      <div className="review-card">
        <div className="left">
          <img alt="" src="" />
          <h1>John Andy</h1>
          <p>College student</p>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <div className="right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut
            pariatur, quas deserunt in velit rerum eveniet expedita labore sed
            quos excepturi quibusdam cupiditate similique quae suscipit rem
            maiores eius! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tempora aut pariatur, quas deserunt in velit rerum eveniet
            expedita labore sed quos excepturi quibusdam cupiditate similique
            quae suscipit rem maiores eius!
          </p>
        </div>
        <div className="quote">
          <IoMdQuote />
        </div>
      </div>
    </ReviewsContainer>
  );
};

export default Reviews;
