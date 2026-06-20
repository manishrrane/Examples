import React from 'react'
import { useState } from 'react'
const Events = () => {



  const [Number, setNumber] = useState(0);
  const Increment = () => {
    setNumber(Number + 1);
  };
  const Decrement = () => {
    if (Number > 0) {
      setNumber(Number - 1);
    }
  };
  return (
    <>
      {/* <button onClick={getAlert}>Get ALert</button> */}
      <button onClick={Increment}>Increment</button>
      <h1>Number {Number} </h1>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
};

export default Events;
