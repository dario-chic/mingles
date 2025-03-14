import React from "react";
import Plus from "./svg/Plus";

const questions = [
  {
    question: "¿Cómo unirse a Mingles?",
    detail: `Unirse es muy sencillo, solo debes ingresar a <a class="link link--about" href="https://discord.gg/P2aGSpg8cr" target="_blank" rel="noreferrer">nuestro discord</a> y allí encontraras el resto de la información necesaria para tener una buena estadía en la comunidad.`,
  },
  {
    question: "¿Por qué ser parte de Mingles?",
    detail: `Si en serio deseas aprender inglés, 
    y realmente obtener buenos resultados, sin duda deberías ser parte de nuestra comunidad. En Mingles encontraras todas las herramientas que necesitas para lograr tu nivel deseado.`,
  },
  {
    question: "¿De verdad es gratis?",
    detail: `Así es, ser miembro, y participar en las actividades y eventos de la comunidad es totalmente gratuito y para todas las personas. A medida que crezcamos es posible que incluyamos características especiales de paga, pero en general, Mingles siempre será de gratis acceso para todos.`,
  },
  {
    question: "¿Mingles es una aplicación?",
    detail: `No, no somos una aplicación, al menos no todavía. Por ahora somos una comunidad establecida en <a class="link link--about" href="https://discord.gg/P2aGSpg8cr" target="_blank" rel="noreferrer">Discord</a>.`,
  },
  {
    question: "¿Cómo puedo colaborar con Mingles?",
    detail: `Si te gusta el proyecto y quieres colaborar de cualquier manera para hacerlo crecer y mejorar, comunicate a nuestro correo contact@mingles.com o por contact@dariochic.com. Estaremos muy agradecidos con tu ayuda!`,
  },
];

const Questions = () => {
  return (
    <section
      className="questions"
      id="faq"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="500"
      data-aos-once="true"
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
              <p
                className="questions__info"
                dangerouslySetInnerHTML={{ __html: el.detail }}
              ></p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
