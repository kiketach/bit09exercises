import React, { useState } from "react";

export const Exercise2 = () => {
  const [image, SetImage] = useState(null);

  const handleClick = async () => {
    fetch("https://random-d.uk/api/v2/random")
      .then((response) => response.json())
      .then((data) => SetImage(data.url))
      .catch((error) => {
        console.error("Error en conexion. Verifique la pagina", error);
      });
  };
  return (
    <>
      <h2 className="text-center">Calling a API</h2>
      <div className="text-center">
        <button className="btn btn-success m-3" onClick={handleClick}>
          Random IMG
        </button>
        
      </div>
      <div className="container text-center mb-5">
        {image && <img src={image} width={200} height={200} alt="Img API" />}
      </div>
    </>
  );
};
