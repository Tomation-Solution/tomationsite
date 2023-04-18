import React from "react";
import { GlobalButton } from "./Button.styles";

type Props = {
  styleType?: "bright" | undefined;
  clickfn?: () => void;
};

const Button = ({
  children,
  styleType,
  clickfn,
}: React.PropsWithChildren<Props>) => {
  return (
    <GlobalButton onClick={clickfn} styleTypex={styleType as string}>
      {children}
    </GlobalButton>
  );
};

export default Button;
