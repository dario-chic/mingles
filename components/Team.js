import React from "react";
import Member from "./Member";
import members from "../data/members";

const Team = () => {
  return (
    <section
      className="team"
      id="team"
      // data-aos="fade-up"
      // data-aos-duration="800"
      // data-aos-delay="500"
      // data-aos-once="true"
    >
      <h2 className="section__title team__title">A Passionate Team</h2>
      <div className="team__container">
        {members.map((el, i) => (
          <Member key={i} member={el} />
        ))}
      </div>
    </section>
  );
};

export default Team;
