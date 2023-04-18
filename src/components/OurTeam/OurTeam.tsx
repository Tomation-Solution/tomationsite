import React from "react";
import { TeamContainer, TeamInquiries } from "./OurTeam.styles";
import { GlobalHeader } from "../../global/glob-styles";
import TeamMembers from "./TeamMembers";
import Button from "../../global/Button/Button";
import Teammates1 from "../../assets/Teammates (1).png";
import Teammates2 from "../../assets/Teammates (2).png";
import Teammates3 from "../../assets/Teammates (3).png";

const OurTeam = () => {
  return (
    <>
      <TeamContainer>
        <GlobalHeader style={{ textAlign: "center" }}>
          Meet Our Professional Team
        </GlobalHeader>
        <div className="professional-team">
          <TeamMembers
            image={Teammates1}
            name={"Debo Adebayo C.E.O"}
            facebook={""}
            twitter={""}
            linkedin={""}
          />
          <TeamMembers
            image={Teammates2}
            name={"Kika Ubaka Head, Corporate Services"}
            facebook={""}
            twitter={""}
            linkedin={""}
          />
          <TeamMembers
            image={Teammates3}
            name={"Tomiwa Ayandele Head, Product Management"}
            facebook={""}
            twitter={""}
            linkedin={""}
          />
        </div>
      </TeamContainer>

      <TeamInquiries>
        <div className="inquiries-content">
          <h1>Want to make inquiries about our best services?</h1>
          <Button styleType="bright">Contact Us</Button>
        </div>
      </TeamInquiries>
    </>
  );
};

export default OurTeam;
