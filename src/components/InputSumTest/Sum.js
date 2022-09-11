import React, { useState } from "react";

const Sum = () => {
    const [inputs, setInputs] = useState({ input1: '', input2: '' });
    const [numbers, setNumbers] = useState({ number1: 0, number2: 0 });
    const [sum, setSum] = useState(undefined);

    const handleChange = (event) =>
        setInputs((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));

    // const handleSum = () => {
    //     const { input1, input2 } = inputs;
    //     setSum(Number(input1) + Number(input2));
    //     setNumbers({
    //         number1: input1 === null || input1 === "" ? 0 : input1, //missing to insert value in any input box
    //         number2: input2 === null || input2 === "" ? 0 : input2,
    //     });
    // };
    function handleSum() {
        const { input1, input2 } = inputs;
        setSum(Number(input1) + Number(input2));
    };
    console.log(handleSum, "handleSum");

    //Setting AutoFocus for first input box
    const firstInputRef = React.useRef(null);
    React.useEffect(() => {
        firstInputRef.current.focus();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputs({ input1: "", input2: "" });
        firstInputRef.current.focus(); //make it focus again onSubmit button
    };

    return (
        <div className="container">
            <div className="header">
                <h1>6Unit Test of input elements</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label data-testid="myInput1" htmlFor="input1">
                        First Integer:
                    </label>
                    <input
                        type="number"
                        id="input1"
                        name="input1"
                        // autoFocus="true"
                        ref={firstInputRef}
                        value={inputs.input1}
                        onChange={handleChange}
                    ></input>
                </div>
                <div>
                    <label data-testid="myInput2" htmlFor="input2">
                        Second Integer:
                    </label>
                    <input
                        type="number"
                        id="input2"
                        name="input2"
                        value={inputs.input2}
                        onChange={handleChange}
                    ></input>
                </div>
                <div>
                    <button data-testid="myBtn" type="submit" onClick={handleSum}>
                        Sum
                    </button>
                </div>
            </form>
            <div>
                {sum !== undefined && (
                    <h3>
                        Result : {numbers.number1} + {numbers.number2} = {sum}
                    </h3>
                )}
            </div>
        </div>
    );
};

export default Sum;
