import React, { useState } from "react";

const Interview5 = () => {
    const [inputs, setInputs] = useState({ input1: "", input2: "" });
    const { input1, input2 } = inputs;
    const [sum, setSum] = useState(0);

    return (
        <div>
            <h1>Addition</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setInputs({ input1: "", input2: "" });
                }}
            >
                <div>
                    <label htmlFor="input1">Value1: </label>
                    <input
                        name="input1"
                        id="input1"
                        type="number"
                        value={input1}
                        onChange={(e) => {
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }));
                        }}
                    ></input>
                </div>
                <div>
                    <label htmlFor="input2">Value2: </label>
                    <input
                        name="input2"
                        id="input2"
                        type="number"
                        value={input2}
                        onChange={(e) => {
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }));
                        }}
                    ></input>
                </div>

                <div>
                    <button
                        type="submit"
                        onClick={() => {
                            setSum(Number(input1) + Number(input2));
                        }}
                    >
                        Sum
                    </button>
                </div>
            </form>

            <h2>Result: {sum}</h2>
        </div>
    );
};
export default Interview5;
