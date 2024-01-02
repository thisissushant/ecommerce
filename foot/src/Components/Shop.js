import React from "react";
import { useState } from "react";

export default function Shop() {
  let [counter, setCounter] = useState(2);
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}
