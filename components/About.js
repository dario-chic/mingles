import React from "react";
import Section from "./Section";
import AboutBrief from "./svg/AboutBrief";
import Feedback from "./svg/Feedback";
import Help from "./svg/Help";
import Learn from "./svg/Learn";
import Meet from "./svg/Meet";

const description = `Mingles es una comunidad Latinoamericana fundada en respuesta a lanecesidad de las personas interesadas en aprender o mejorar su Inglés, de tener un ambiente donde pueden conversar con otras personas (eninglés), dar y recibir feedback, consejos y ayuda, con el fin de mejorar sus habilidades en el idioma y comunicarse de forma totalmente fluida. 

Gratis por supuesto. 

Es importante destacar que <span class="bold">no somos una escuela</span>, somos una comunidad. No tenemos profesores, ni damos clases, ni nada parecido a una institución convencional de inglés. Sí, tenemos “profesores” , pero estos no están aquí para dar clases, sino para ayudar de otras maneras. Si quieres unirte y saber más sobre la comunidad unete a nuestro <a class="link link--about" href="https://discord.gg/P2aGSpg8cr" target="_blank" rel="noreferrer">Discord</a>.`;

const brief = [
  {
    Svg: Meet,
    title: "Meet other English speakers",
    info: "Conoce personas de todas partes del mundo, desde personas iniciantes en el idioma hasta nativos.",
  },
  {
    Svg: Learn,
    title: "Learn while having fun",
    info: "Conversa sobre temas interesantes, aprende nuevas cosas diviertete y aprende en el camino.",
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
    <Section modifier="about">
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
