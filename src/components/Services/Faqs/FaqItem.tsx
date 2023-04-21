import React from "react";
import { FaqItemContainer } from "./Faqs.styles";

type Props = {
  selected?: number | null;
  title?: string;
  description?: string[];
  clickfn?: () => void;
  indexNo?: number;
};

const FaqItem: React.FC<Props> = ({
  selected,
  clickfn,
  title,
  description,
  indexNo,
}) => {
  return (
    <FaqItemContainer>
      <div className="title" onClick={clickfn}>
        <h2>{title}</h2>
        <span>{selected === indexNo ? "-" : "+"}</span>
      </div>
      <div className={selected === indexNo ? "content show" : "content"}>
        {description?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </FaqItemContainer>
  );
};

export default FaqItem;
