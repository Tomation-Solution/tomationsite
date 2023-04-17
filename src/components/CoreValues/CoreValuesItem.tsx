import React from "react";
import { CoreValueItemContainer } from "./CoreValues.styles";

type Props = {
  image: string;
  header: string;
  description: string;
  backimage: string;
};

const CoreValuesItem: React.FC<Props> = ({
  image,
  header,
  description,
  backimage,
}) => {
  return (
    <CoreValueItemContainer>
      <img alt="" src={image} />
      <img alt="" src={backimage} className="back-image" />
      <h1>{header}</h1>
      <div className="description">{description}</div>
    </CoreValueItemContainer>
  );
};

export default CoreValuesItem;
