import React from "react";
import { ClientItemContainer } from "./Client.styles";

const ClientItem: React.FC<{ image: string }> = ({ image }) => {
  return (
    <ClientItemContainer>
      <img alt="" src={image} />
    </ClientItemContainer>
  );
};

export default ClientItem;
