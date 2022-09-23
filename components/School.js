import Link from "next/link";
import React from "react";
import guides from "../data/guides";
import Button from "./Button";
import Guide from "./Guide";
import Section from "./Section";

const description = `Ya te mencionamos anteriormente que no somos una escuela, y es cierto. Sin embargo, sabemos que al inicio puede ser extremadamente complicado empezar a <span class="bold">aprender de forma correcta un idioma</span>, es por eso que hemos creamos la sección “school”.

Estamos acostumbrados a creer que para poder adquirir el inglés tenemos que ir a institutos muy caros, aprendernos toneladas de listas de vocabularios, memorizarnos todas las reglas gramaticales, estructuras y demás... pero la realidad está muy alejada de eso y es mucho más “<span class="bold">fácil</span>” de lo que imaginamos. 

La cuestión es que nos han hecho pensar que el método tradicional es el único método o camino para aprender inglés y lo más importante para adquirir el inglés, pero que pensarías si te decimos que <span class="bold">ESTUDIAR GRAMÁTICA NO ES TOTALMENTE ESENCIAL O NECESARIO</span>. Probablemente pensarías que estamos locos y que somos un fraude, pero no te apresures, échale un ojo a nuestra escuela para entender de que estamos hablando y conozcas el secreto detrás de aprender idiomas.

Nuestra escuela se encarga específicamente de eso, de explicarte el verdadero camino y los métodos realmente eficaces para aprender, no solo el inglés, si no cualquier idioma que quieras. 

Estas son guías que hemos desarrollado para ayudarte a trabajar en tu proceso de aprendizaje de una forma más <span class="bold">rápida</span> y <span class="bold">eficaz</span>. La información en estas guías no es inventada por nosotros, estas guías están creadas a partir investigaciones profesionales en el campo del aprendizaje de idiomas, experiencia personal e información recopilada de los mayores poliglotas del mundo.

Claramente tomar estas guías no es obligatorio para ser parte de la comunidad, sin embargo, te recomendamos darle un vistazo e intentarlo si realmente quieres adquirir el idioma <span class="bold">rápidamente</span>, <span class="bold">eficazmente</span> y <span class="bold">correctamente</span>. Te prometemos que no te arrepentirás.`;

const School = () => {
  return (
    <Section modifier="school" id="our-school">
      {" "}
      <h2 className="section__title section__title--about">Our School</h2>
      <p
        className="section__description section__description--about"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <div className="school__guides">
        {guides.map((el, i) => (
          <Guide key={i} element={el} />
        ))}
      </div>
      <Link href="/school">
        <a className="btn btn__school">Ver más</a>
      </Link>
    </Section>
  );
};

export default School;
