import React from "react";
import { ClientContainer } from "./Client.styles";
import { GlobalHeader } from "../../global/glob-styles";
import ClientItem from "./ClientItem";

import Client1 from "../../assets/Clients (1).png";
import Client2 from "../../assets/Clients (2).png";
import Client3 from "../../assets/Clients (3).png";
import Client4 from "../../assets/Clients (4).png";

const Client = () => {
  return (
    <ClientContainer>
      <GlobalHeader style={{ textAlign: "center" }}>Our Clientele</GlobalHeader>
      <div className="client-items">
        <ClientItem image={Client1} />
      </div>
    </ClientContainer>
  );
};

export default Client;
