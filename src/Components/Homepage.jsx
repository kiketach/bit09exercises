import React from "react";
import { Figure } from "react-bootstrap";

export const Homepage = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-success text-center">Bienvenidos</h2>
      </div>
      <section>
        <Figure className="text-center rounded mx-auto d-block">
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="src/assets/me.png"
          />
          <Figure.Caption>Enrique Abril.</Figure.Caption>
        </Figure>
      </section>
    </>
  );
};
