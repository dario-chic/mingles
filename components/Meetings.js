import React from "react";
import Section from "./Section";
import AboutBrief from "./svg/AboutBrief";
import Feedback from "./svg/Feedback";
import Help from "./svg/Help";
import Learn from "./svg/Learn";
import Meet from "./svg/Meet";
import Meetings from "./svg/Meetings";

const description = `Nuestras meetings crean un ambiente mas dinamico e interactivo entre nuestros miembros, también generan un mayor progreso en el  proceso de adquisicion del idioma. Pero ¿De qué tratan?

Como su nombre lo indica, estas son reuniones que se realizan eventualmente en la comunidad. Los organizadores fijan una fecha de encuentro, avisan el tema de la reunion a los miembros, estos se informan y en la fecha indicada se discute sobre el tema en una reunión.

Los organizadores  o “profesores” se encargaran de dirigir la reunion, realizando preguntas, alentando a los miembros a conversar, creando un ambiente agradable y por supuesto ayudan a los miembros corrigiendo sus errores y dando consejos para mejorar cada vez más y más.

Hay diferentes tipos de reuniones y estas se realizan tanto de forma oral, mediante llamadas de voz grupales y por texto en alguno de los canales de nuestro servidor. Para mas información <a class="link link--about" href="https://discord.gg/P2aGSpg8cr" target="_blank" rel="noreferrer">unete a nuestro Discord</a>.`;

const About = () => {
  return (
    <Section modifier="meetings" id="meetings">
      <div className="section__text--container">
        <h2 className="section__title section__title--meetings">Meetings</h2>
        <p
          className="section__description section__description--meetings"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
      <div className="meetings__svg">
        <Meetings id="meetings" />
      </div>
    </Section>
  );
};

export default About;
