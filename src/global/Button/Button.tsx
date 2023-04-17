import React from "react";
import { GlobalButton } from "./Button.styles";

type Props = {};

const Button = ({ children }: React.PropsWithChildren<Props>) => {
  return <GlobalButton>{children}</GlobalButton>;
};

export default Button;
