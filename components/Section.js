import React from "react";

const Section = ({ children, modifier }) => {
  return (
    <section
      className={`section section--${modifier}`}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="500"
      once="true"
    >
      <div className={`section__container section__container--${modifier}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
