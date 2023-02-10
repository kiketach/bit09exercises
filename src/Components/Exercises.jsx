import { useState } from "react";
import { Exercise1 } from "./Exercise1";
import { Exercise2 } from "./Exercise2";

export const Exercises = () => {
  const [exercise, setexercise] = useState(null);

  return (
      <section>
        <h1 className="text-center">Ejercicios</h1>
        <ol>
          <li onClick={()=> setexercise (<Exercise1 />) }>Ejercicio 1</li>
          <li onClick={()=> setexercise (<Exercise2 />) }>Ejercicio 2</li>
        </ol>
        <div> {exercise} </div>
      </section>
  
  );
};
