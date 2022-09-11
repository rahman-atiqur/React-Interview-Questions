import React, {useState} from "react";

import "./Style.css";

// const { useState } = React;

const Interview = () => {
    const [counter,setCounter]=useState(0);
    return (
        <div>
            <h1>Basic Counter</h1>
            <h2>Counter: {counter}</h2>

            <button onClick={()=>setCounter(counter+1)}>Counter</button>
        
        </div>
    );
};

export default Interview;
