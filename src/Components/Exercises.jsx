import { useState } from "react";
import { Exercise1 } from "./Exercise1";
import { Exercise2 } from "./Exercise2";
import { Exercise3 } from "./Exercise3";

export const Exercises = () => {
  const [exercise, setexercise] = useState(null);

  return (
      <section>
        <div className="container">
          <button className="btn btn-primary btn-lg" onClick={()=> setexercise (<Exercise1 />) }>Counter</button></div> <br />
          <div className="container">
          <button className="btn btn-primary btn-lg" onClick={()=> setexercise (<Exercise2 />) }>Calling a API</button> 
        </div> <br />
        <div className="container">
          <button className="btn btn-primary btn-lg" onClick={()=> setexercise (<Exercise3 />) }>Telephone Directory</button>
        </div>

        <div> {exercise} </div>
      </section>
  
  );
};
