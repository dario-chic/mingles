import React from "react";
import Linkedin from "./svg/Linkedin";
import TwitterSVG from "./svg/TwitterSVG";

const Member = ({ member }) => {
  const { pic, name, position, description, social } = member;
  return (
    <figure className="team__member">
      <img src={pic} alt={name} className="team__member-picture" />

      <figcaption className="team__member-name">
        {name}
        <span className="team__member-position">{position}</span>
      </figcaption>
      <p className="team__member-description">{`"${description}"`}</p>
      <div className="team__member-social">
        {social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <Linkedin id="linkedin-card" />
          </a>
        )}
        {social.twitter && (
          <a href={social.twitter} target="_blank" rel="noreferrer">
            <TwitterSVG id="twitter-card" />
          </a>
        )}{" "}
      </div>
    </figure>
  );
};

export default Member;
