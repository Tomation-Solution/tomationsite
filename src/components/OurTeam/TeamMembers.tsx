import React from "react";
import { TeamMembersContainer } from "./OurTeam.styles";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

type Props = {
  image: string;
  name: string;
  facebook: string;
  twitter: string;
  linkedin: string;
};

const TeamMembers: React.FC<Props> = ({
  image,
  name,
  facebook,
  linkedin,
  twitter,
}) => {
  return (
    <TeamMembersContainer>
      <img alt="" src={image} />
      <h3>{name}</h3>
      <div className="social-link">
        <a href={facebook} rel="noreferer">
          <FiFacebook />
        </a>
        <a href={twitter} rel="noreferer">
          <FiTwitter />
        </a>
        <a href={linkedin} rel="noreferer">
          <SlSocialLinkedin />
        </a>
      </div>
    </TeamMembersContainer>
  );
};

export default TeamMembers;
