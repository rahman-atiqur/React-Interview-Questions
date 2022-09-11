import React from "react";
import "./Style.css"
const { useState } = React;
const Interview2 = () => {
  const [counter,setCounter]=useState(0);
    return <div>
      <h1>Basic Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={()=>{counter === 10 ? setCounter(0):setCounter(counter+1)}}>Increment</button>
      <button onClick={()=>{counter === 0 ? setCounter(0):setCounter(counter-1)}}>Decrement</button>
    </div>;
};

export default Interview2;
