import React from "react";
import Section from "./Section";
import AboutBrief from "./svg/AboutBrief";
import Feedback from "./svg/Feedback";
import Help from "./svg/Help";
import Learn from "./svg/Learn";
import Meet from "./svg/Meet";

const description = `En <span class="bold">Mingles</span> queremos ayudarte a <span class="bold">expandir tus oportunidades</span> en la vida a través del inglés, enseñándote los mejores método y dandote las herramientas realmente eficaces para que por fin aprendas no solo el inglés, sino cualquier idioma que desees. 

Somos una comunidad Latinoamericana donde ayudamos a las personas a aprender inglés de manera <span class="bold">rápida</span>, <span class="bold">fácil</span>, <span class="bold">eficaz</span> y de <span class="bold">forma gratuita</span>. 

Enseñamos los métodos y creamos el espacio que necesita toda persona que planea aprender inglés. Un espacio donde puedas comunicarte con personas de todo el mundo, para practicar, recibir ayuda, feedback, consejos y demás. Mejorando tus habilidades en el idioma y consiguiendo esa fluidez que tanto anhelas. 

Nuestra meta es ser la herramienta que transforme la vida de las personas y expanda globalmente la sociedad y el talento Latinoamericano. ¡Si quieres obtener esa fluidez que tanto deseas para extender tus fronteras y expandir tus oportunidades en la vida, sin duda deberías ser miembro de Mingles! Para más información y unirte la comunidad únete a nuestro <a class="link link--about" href="https://discord.gg/P2aGSpg8cr" target="_blank" rel="noreferrer">Discord</a>

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
