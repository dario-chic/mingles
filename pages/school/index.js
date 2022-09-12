import React from "react";
import Guide from "../../components/Guide";
import PageLayout from "../../components/layouts/PageLayout";
import guides from "../../data/guides";

const text = `Estas son guías que hemos desarrollado para ayudarte a trabajar en tu proceso de aprendizaje de una forma más <span class="bold">rápida</span> y <span class="bold">eficaz</span>. La información en estas guías no es inventada por nosotros, estas guías están creadas a base de investigaciones profesionales en el campo del aprendizaje de idiomas e información recopilada de lo que recomiendan los mayores poliglotas del mundo para aprender idiomas.

Claramente tomar estas guías no es obligatorio para ser parte de la comunidad, sin embargo, te recomendamos darle un vistazo e intentarlo si realmente quieres adquirir el idioma <span class="bold">rápidamente</span>, <span class="bold">eficazmente</span> y <span class="bold">correctamente</span>. Te prometemos que no te arrepentirás.`;

const index = () => {
  return (
    <PageLayout header={false} nav="home">
      <div className="school">
        <div className="school__container">
          <h1 className="school__title big">Welcome to The School</h1>
          <p
            className="school__description center"
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
          <div className="school__guides">
            {guides.map((el, i) => (
              <Guide key={i} element={el} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default index;
