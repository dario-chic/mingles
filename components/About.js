import React from "react";
import Section from "./Section";

const description = `Mingles es una comunidad Latinoamericana fundada en respuesta a lanecesidad de las personas interesadas en aprender o mejorar su Inglés, de tener un ambiente donde pueden conversar con otras personas (eninglés), dar y recibir feedback, consejos y ayuda, con la finalidad de mejorar sus habilidades en el idioma y comunicarse de manera totalmente fluida. 

Gratis por supuesto. 

Es importante destacar que <span class="bold">no somos una escuela</span>, somos una comunidad. No tenemos profesores, ni damos clases, ni nada parecido a una institución convencional de inglés. Sí, tenemos “profesores” , pero estos no están aquí para dar clases, sino para ayudar de otras maneras. Si quieres unirte y saber más sobre la comunidad unete a nuestro <a class="link link--about" href="https://discord.gg/P2aGSpg8cr" target="_blank" rel="noreferrer">Discord</a>.`;

const About = () => {
  return (
    <Section modifier="about">
      <h1 className="section__title section__title--about">About us</h1>
      <p
        className="section__description section__description--about"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </Section>
  );
};

export default About;
