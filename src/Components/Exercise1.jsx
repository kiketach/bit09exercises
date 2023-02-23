import React, { useState, useEffect } from "react";

export const Exercise1 = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("null");

  useEffect(() => { 
    count > 0 ? setColor('green') : false;
    count < 0 ? setColor('red') : false;
    count === 0 ? setColor('grey') : false;
  }, [count]);

  return (
    <>
      <h2 className={"text-center"}>Contador</h2> <hr />
      <div className="container text-center">
        <button
          className="btn btn-danger m-3"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button className="btn btn-outline-secondary m-3 text-white" style={{ backgroundColor: `${color}` }} >{count}</button>
        <button
          className="btn btn-success m-3"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>{" "}
      <br />
      <div className="container text-center">
        <button className="btn btn-secondary" onClick={() => setCount(0)}>
          RESET
        </button>
      </div>
    </>
  );
};
