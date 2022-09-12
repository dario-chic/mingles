import React from "react";

const Section = ({ children, modifier, id }) => {
  return (
    <section
      className={`section section--${modifier}`}
      id={id}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="500"
      data-aos-once="true"
    >
      <div className={`section__container section__container--${modifier}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
