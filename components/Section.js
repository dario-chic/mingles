import React from "react";

const Section = ({ children, modifier }) => {
  return (
    <section className={`section section--${modifier}`}>{children}</section>
  );
};

export default Section;
