import React from "react";
import Section from "./Section";
import AboutBrief from "./svg/AboutBrief";
import Feedback from "./svg/Feedback";
import Help from "./svg/Help";
import Learn from "./svg/Learn";
import Meet from "./svg/Meet";

const description = `Mingles es una comunidad Latinoamericana que ayuda a las personas a aprender inglés de una forma <span class="bold">rápida, fácil y eficaz de forma gratuita</span>. Nuestra misión es ayudar a expandir las oportunidades en la vida de las personas a través del inglés y revolucionar su forma de aprendizaje en Latinoamérica.

En Mingles te enseñamos los <span class="bold">métodos realmente eficaces</span> para que aprendas no solo el inglés, sino cualquier idioma que desees. 

También hemos creado el espacio que necesita toda persona que planear aprender inglés. Un ambiente donde puedes comunicarte (en inglés) con personas de todo el mundo, para practicar, recibir ayuda, feedback, consejos y demás. Y así mejorar sus habilidades en el idioma consiguiendo esa fluidez que tanto se anhela. 

Nuestra visión u objetivo es ser la herramienta que transforme la vida de las personas y expanda globalmente la sociedad y el talento Latinoamericano. Si quieres obtener esa fluidez que tanto deseas para extender tus fronteras y expandir tus oportunidades en la vida, sin duda deberías ser miembro de Mingles! Para saber más sobre la comunidad únete a nuestro <a class="link link--about" href="https://discord.gg/P2aGSpg8cr" target="_blank" rel="noreferrer">Discord</a>.
`;

const brief = [
  {
    Svg: Meet,
    title: "Meet other English speakers",
    info: "Conoce personas de todas partes del mundo, desde principiantes hasta nativos.",
  },
  {
    Svg: Learn,
    title: "Learn while having fun",
    info: "Conversa sobre temas interesantes, aprende nuevas cosas, diviertete y aprende en el camino.",
  },
  {
    Svg: Feedback,
    title: "Get feedback and improve",
    info: "Recibe feedback de otros miembros sobre tus errores y mejoralos.",
  },
  {
    Svg: Help,
    title: "Help each other",
    info: "Lo más importante, la ayuda mutua entre todos los miembros para el objetivo común: Conseguir fluidez.",
  },
];

const About = () => {
  return (
    <Section modifier="about" id="about">
      <h2 className="section__title section__title--about">About us</h2>
      <p
        className="section__description section__description--about"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <div className="about__info">
        {brief.map((el, i) => (
          <AboutBrief key={i} element={el} />
        ))}
      </div>
    </Section>
  );
};

export default About;
