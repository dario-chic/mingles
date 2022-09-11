import React from "react";

const AboutBrief = ({ element }) => {
  const { Svg, title, info } = element;

  return (
    <div className="about__brief">
      <div className="about__brief-svg">
        <Svg id="about__brief-svg" />
      </div>
      <div className="about__brief-text">
        <h4 className="about__brief-title">{title}</h4>
        <p className="about__brief-info">{info}</p>
      </div>
    </div>
  );
};

export default AboutBrief;
