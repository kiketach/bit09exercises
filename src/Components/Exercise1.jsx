import React, { useState, useEffect } from "react";

export const Exercise1 = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("null");

  useEffect(() => {
    if (count > 0) setColor("success");
    else if (count < 0) setColor("warning");
    else setColor("secondary");
  });

  return (
    <>
      <h2 className="text-center">Contador</h2> <hr />
      <div className="container text-center">
        <button
          className="btn btn-danger m-3"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button className="btn btn-outline-secondary m-3">{count}</button>
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
