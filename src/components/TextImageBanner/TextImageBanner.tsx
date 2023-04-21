import React from "react";
import { TextImageBannerContainer } from "./TextImageBanner.styles";
import Button from "../../global/Button/Button";
import { Link } from "react-router-dom";

type Props = {
  reversed: boolean;
  header: string;
  description: string | string[];
  btnText: string;
  larger?: boolean;
  where?: string;
  openfn?: () => void;
  isNotMargin?: boolean;
};

const TextImageBanner = ({
  children,
  reversed,
  header,
  description,
  btnText,
  larger,
  where,
  openfn,
  isNotMargin,
}: React.PropsWithChildren<Props>) => {
  return (
    <TextImageBannerContainer isReversed={reversed} isNoMargin={isNotMargin}>
      <div className="text-section">
        {larger ? (
          <h1 style={{ fontSize: "50px" }}>{header}</h1>
        ) : (
          <h1>{header}</h1>
        )}
        {Array.isArray(description) ? (
          description.map((item, index) => (
            <p style={{ fontSize: "20px" }} key={index}>
              {item}
            </p>
          ))
        ) : (
          <p style={{ fontSize: "20px" }}>{description}</p>
        )}
        {btnText ? (
          openfn ? (
            <Button clickfn={openfn}>{btnText}</Button>
          ) : (
            <Link to={where as string}>
              <Button>{btnText}</Button>
            </Link>
          )
        ) : null}
      </div>

      {children}
    </TextImageBannerContainer>
  );
};

export default TextImageBanner;
