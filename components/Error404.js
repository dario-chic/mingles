import React from "react";
import Button from "./Button";

const Error404 = () => {
  return (
    <div className="error">
      <h1>Error 404 </h1>
      <p>Page not Found</p>
      <Button className="btn btn__error big" href="/">
        Inicio
      </Button>
    </div>
  );
};

export default Error404;
