import React from "react";

const Section = ({ children, modifier }) => {
  return (
    <section className={`section section--${modifier}`}>
      <div className={`section__container section__container--${modifier}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
