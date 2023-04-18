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
}: React.PropsWithChildren<Props>) => {
  return (
    <TextImageBannerContainer isReversed={reversed}>
      <div className="text-section">
        {larger ? (
          <h1 style={{ fontSize: "40px" }}>{header}</h1>
        ) : (
          <h1>{header}</h1>
        )}
        {Array.isArray(description) ? (
          description.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>{description}</p>
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
