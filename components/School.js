import Link from "next/link";
import React from "react";
import guides from "../data/guides";
import Button from "./Button";
import Guide from "./Guide";
import Section from "./Section";

const description = `Somos conscientes de que puede ser realmente complicado <span class="bold">aprender un idioma de forma correcta</span>, es por eso que hemos creamos nuestra sección "<span class="bold">school</span>". 

Primero, es importante aclarar que realmente <span class="bold">no somos una "escuela"</span>, somos una comunidad. No impartimos clases para enseñarte gramática, listas de vocabulario ni nada parecido a los métodos convencionales. Nuestros métodos de enseñanza y de aprender idiomas van mucho más allá de todo eso.

Toda nuestra vida nos han hecho creer que el método tradicional es la única forma y el único camino para aprender inglés, pero que pensarías si te dijéramos que <span class="bold">estudiar gramática no es indispensable o totalmente necesario</span>. Probablemente, pensarías que estamos locos o que somos un fraude, pero no te apresures. La realidad es que hay un "<span class="bold">secreto</span>" detrás de aprender idiomas, y una vez que lo sepas tu vida cambiará completamente.

Nuestra escuela se encarga de enseñarte el "secreto" o mejor dicho, el verdadero camino y los <span class="bold">métodos realmente eficaces</span> no solo para aprender inglés, sino cualquier idioma que desees. Aquí encontrarás guías que hemos desarrollado para ayudarte y guiarte en tu proceso de aprendizaje, para que lo realices de una forma rápida, eficaz y que realmente te de buenos resultados. 

La información en estas guías no es inventada por nosotros, estas guías están creadas a partir investigaciones <span class="bold">profesionales en el campo del aprendizaje de idiomas</span>, experiencias personales e información recopilada de los mayores poliglotas del mundo.

Claramente, tomar estas guías no es obligatorio para ser parte de la comunidad, sin embargo, te recomendamos enormemente darles un vistazo e intentarlo si realmente quieres adquirir el idioma rápidamente, eficazmente y correctamente. Te prometemos que <span class="bold">no te arrepentirás</span>.
`;

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
