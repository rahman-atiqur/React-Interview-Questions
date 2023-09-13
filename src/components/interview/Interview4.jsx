import React, { useState } from "react";

const Interview4 = () => {
    const [inputs, setInputs] = useState({ input1: "", input2: "" });
    const [sum, setSum] = useState(0);

    const container = {
        width: "700px",
        height: "800px",
        margin: "10px auto",
        border: "1px solid balck",
        // backgroundColor: "#d6ecfa",
        backgroundColor: "#def",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };
    const h1 = { padding: "20px" };
    const formDiv = {
        height: "40px",
        // border: "1px solid black",
        margin: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontSize:"20px"
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
     };
    const handleSubmit = (e) => {
        e.preventDefault();

        // setInputs({ input1: "", input2: "" });
    };
    const handleSum = () => {
        const { input1, input2 } = inputs;
        setSum(Number(input1) + Number(input2));
    };
    const handleSubtraction = () => {
        const { input1, input2 } = inputs;
        setSum(Number(input1) - Number(input2));
    };
    const handleMultiplication = () => {
        const { input1, input2 } = inputs;
        setSum(Number(input1) * Number(input2));
    };
    const handleDivision = () => {
        const { input1, input2 } = inputs;
        setSum(Number(input1) / Number(input2));
    };

    return (
        <div style={container}>
            <h1 style={h1}>Enter Data</h1>
            <form onSubmit={handleSubmit}>
                <div style={formDiv}>
                    <label htmlFor="input1">Value1:</label>
                    <input
                        type="number"
                        id="input1"
                        name="input1"
                        value={inputs.input1}
                        onChange={handleChange}
                    ></input>
                </div>
                <div style={formDiv}>
                    <label htmlFor="input2">Value2:</label>
                    <input
                        type="number"
                        id="input2"
                        name="input2"
                        value={inputs.input2}
                        onChange={handleChange}
                    ></input>
                </div>
                <div>
                    <button type="submit" onClick={handleSum}>
                        +
                    </button>
                    {/* <button type="submit" onClick={handleSubtraction}>
                        -
                    </button>
                    <button type="submit" onClick={handleMultiplication}>
                        *
                    </button>
                    <button type="submit" onClick={handleDivision}>
                        /
                    </button> */}
                </div>
            </form>
            <h2>Result: {sum}</h2>
        </div>
    );
};

export default Interview4;
