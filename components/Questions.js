import React from "react";
import Plus from "./svg/Plus";

const questions = [
  {
    question: "¿Cómo unirse a Mingles?",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quibusdam iste? Dolores, obcaecati! Tenetur iusto asperiores nam provident quia quos odio harum, facilis ratione placeat, eius similique eaque reiciendis ex!",
  },
  {
    question: "¿Por qué ser parte de Mingles?",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quibusdam iste? Dolores, obcaecati! Tenetur iusto asperiores nam provident quia quos odio harum, facilis ratione placeat, eius similique eaque reiciendis ex!",
  },
  {
    question: "¿De verdad es gratis?",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quibusdam iste? Dolores, obcaecati! Tenetur iusto asperiores nam provident quia quos odio harum, facilis ratione placeat, eius similique eaque reiciendis ex!",
  },
  {
    question: "¿Mingles es una aplicación?",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quibusdam iste? Dolores, obcaecati! Tenetur iusto asperiores nam provident quia quos odio harum, facilis ratione placeat, eius similique eaque reiciendis ex!",
  },
  {
    question: "¿Cómo puedo colaborar con Mingles?",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quibusdam iste? Dolores, obcaecati! Tenetur iusto asperiores nam provident quia quos odio harum, facilis ratione placeat, eius similique eaque reiciendis ex!",
  },
];

const Questions = () => {
  return (
    <div
      className="questions"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="500"
      once="true"
    >
      <div className="questions__container">
        <h2 className="questions__title">FAQ</h2>
        <div className="questions__details">
          {questions.map((el, i) => (
            <details key={i} className="questions__detail">
              <summary className="questions__summary">
                {el.question}
                <span className="plus">
                  <Plus />
                </span>
              </summary>
              <p className="questions__info">{el.detail}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
