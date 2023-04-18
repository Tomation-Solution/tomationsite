import React from "react";
import { ReviewItemContainer } from "./Reviews.styles";
import { AiFillStar } from "react-icons/ai";
import { IoMdQuote } from "react-icons/io";

type Props = {
  image?: string;
  text: string;
  name: string;
  title: string;
  starNo: number;
};

const ReviewItem = ({
  image,
  text,
  name,
  title,
  starNo,
}: React.PropsWithChildren<Props>) => {
  return (
    <ReviewItemContainer>
      <div className="left">
        <img alt="" src={image} />
        <h1>{name}</h1>
        <p>{title}</p>
        <div>
          {[...new Array(starNo)].map((item, index) => (
            <AiFillStar key={index} />
          ))}
        </div>
      </div>
      <div className="right">
        <p>{text}</p>
      </div>
      <div className="quote">
        <IoMdQuote />
      </div>
    </ReviewItemContainer>
  );
};

export default ReviewItem;
