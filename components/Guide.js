import Link from "next/link";
import React from "react";

const Guide = (element) => {
  const { img, title, description, link } = element.element;
  return (
    <Link href={`/school/${link}`} target="_blank" rel="noreferrer">
      <figure className="guide">
        <img className="guide__img" src={img} alt={title} />
        <span className="guide__title">{title}</span>
        <p className="guide__description">{description}</p>
      </figure>
    </Link>
  );
};

export default Guide;
