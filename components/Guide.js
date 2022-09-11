import React from "react";

const Guide = (element) => {
  const { img, title, description, link } = element.element;
  return (
    <a href={`/school/${link}`} target="_blank" rel="noreferrer">
      <figure className="guide">
        <img className="guide__img" src={img} alt={title} />
        <span className="guide__title">{title}</span>
        <p className="guide__description">{description}</p>
      </figure>
    </a>
  );
};

export default Guide;
