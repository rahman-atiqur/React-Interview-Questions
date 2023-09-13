import React, { useState } from "react";

const Interview3 = () => {
    const [inputs, setInputs] = useState({
        input1: "",
        input2: "",
    });
    const [sum, setSum] = useState(0);
    const { input1, input2 } = inputs;

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setInputs({ input1: "", input2: "" });
    // };

    // const handelSum=()=>{
    //     setSum(Number(input1)+Number(input2));
    // }
    const container = {
        width: "700px",
        height: "800px",
        backgroundColor: "#def",
        margin: "10px auto",
        border: "1px solid black",
    };
    const formDiv = {
        height: "40px",
        fontSize: "20px",
    };

    return (
        <div style={container}>
            <h1> Interview3 - Addition of Two inputs </h1>{" "}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setInputs({
                        input1: "",
                        input2: "",
                    });
                }}
            >
                <div style={formDiv}>
                    <label htmlFor="input1"> Value1: </label>
                    <input
                        type="number"
                        id="input1"
                        name="input1"
                        value={input1}
                        onChange={handleChange}
                    ></input>{" "}
                </div>{" "}
                <div style={formDiv}>
                    <label htmlFor="input1"> Value2: </label>
                    <input
                        type="number"
                        id="input2"
                        name="input2"
                        value={input2}
                        onChange={handleChange}
                    ></input>{" "}
                </div>{" "}
                <div style={formDiv}>
                    <button type="submit" onClick={() => setSum(Number(input1) + Number(input2))}>
                        Sum{" "}
                    </button>{" "}
                </div>{" "}
            </form>{" "}
            <h2> Result: {sum} </h2>{" "}
        </div>
    );
};

export default Interview3;
