import React, { useState } from "react";

const Interview7 = () => {
    const [inputs, setInputs] = useState([
   
    ]);
    // {
    //     fname: "x",
    //     lname: "y",
    //     email: "z",
    //     password: "w",
    // },
    const [datas, setDatas] = useState([
        {
            fname: "",
            lname: "",
            email: "",
            password: "",
        },
    ]);
    // const [datas,setDatas]=useState([])
    const { fname, lname, email, password } = inputs;

    const container = {
        width: "800px",
        margin: "10px auto",
        backgroundColor: "#def",
        padding: "50px 300px",
        textAlign: "left",
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        console.log(inputs);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setInputs({
            fname: "",
            lname: "",
            email: "",
            password: "",
        });
    };
    const handleSave = () => {
        // setDatas({datas: inputs});
        setDatas((newState) => ({
            ...newState,
            inputs
        }));
        console.log(inputs, "save-inputs");
        console.log(datas, "save-datas");
    };
    // return {
    //     ...newState,
    //     todos: [...state.todos, action.payload],
    // };
    return (
        <div style={container}>
            <div>
                <h1>SignUp Form</h1>
                <form onSubmit={handleSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="fname">First Name : </label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="fname"
                                        name="fname"
                                        value={fname}
                                        onChange={handleChange}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="fname">Last Name : </label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="lname"
                                        name="lname"
                                        value={lname}
                                        onChange={handleChange}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="email">Email Id : </label>
                                </td>
                                <td>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="password">Password : </label>
                                </td>
                                <td>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={handleChange}
                                    ></input>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2">
                                    <button type="submit" onClick={handleSave}>
                                        Submit
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </form>
            </div>
            <div>
                <h2>Result</h2>
            </div>
        </div>
    );
};

export default Interview7;
