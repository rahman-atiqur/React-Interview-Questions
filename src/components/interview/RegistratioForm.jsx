//not done => tried in Interview6 also but not done

import React, { useState } from "react";
import "./Style.css";

const RegistratioForm = () => {
    const [items, setItems] = useState([
        {
            email: ["Email", "email", ""],
            password: ["Password", "password", ""],
            fname: ["First Name", "text", ""],
            lname: ["Last Name", "text", ""],
            dob: ["Date of Birth", "date", ""],
            sexMale: ["Sex", "radio", "", "Male"],
            sexFemale: ["Sex", "radio", "", "Female"],
            checkBox: [
                "Check all that apply",
                "checkbox",
                ["", "", "", ""],
                ["Green", "Black", "Brown", "Blue"],
            ],
        },
    ]);

    // const handleChange = (e) => {
    //     setItems((prevState) => ({
    //         ...prevState,
    //         [e.target.id]: e.target.value,
    //     }));
    // };

    const handleChange = (e) => {
        setItems((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    // const handleSelect = (e) => {};
    const handleSave = () => { };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>Registarion Form</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    {items.map((item, index) => {
                        // const [email, password, name, dob, sex] = item;
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{item.email[0]}</td>
                                    <td>
                                        <input
                                            id={item.email[1]}
                                            name={item.email[1]}
                                            // name="email"
                                            type={item.email[1]}
                                            // type="text"
                                            value={item.email[2]}
                                            onChange={handleChange}
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{item.password[0]}</td>
                                    <td>
                                        <input
                                            id={item.password[1]}
                                            name={item.password[1]}
                                            type={item.password[1]}
                                            value={item.password[2]}
                                            onChange={handleChange}
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{item.fname[0]}</td>
                                    <td>
                                        <input
                                            id={item.fname[1]}
                                            name={item.fname[1]}
                                            type={item.fname[1]}
                                            value={item.fname[2]}
                                            onChange={handleChange}
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{item.lname[0]}</td>
                                    <td>
                                        <input
                                            id={item.lname[1]}
                                            name={item.lname[1]}
                                            type={item.lname[1]}
                                            value={item.lname[2]}
                                            onChange={handleChange}
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{item.dob[0]}</td>
                                    <td>
                                        <input
                                            id={item.dob[1]}
                                            name={item.dob[1]}
                                            type={item.dob[1]}
                                            value={item.dob[2]}
                                            onChange={handleChange}
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{item.sexMale[0]}</td>
                                    <td>
                                        <input
                                            id={item.sexMale[0]}
                                            name={item.sexMale[0]}
                                            type={item.sexMale[1]}
                                            value={item.sexMale[2]}
                                            onChange={handleChange}
                                        ></input>
                                        <label>{item.sexMale[3]}</label>
                                        <br></br>
                                        <input
                                            id={item.sexFemale[0]}
                                            name={item.sexFemale[0]}
                                            type={item.sexFemale[1]}
                                            value={item.sexFemale[2]}
                                            onChange={handleChange}
                                        ></input>
                                        <label>{item.sexFemale[3]}</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{item.checkBox[0]}</td>
                                    <td>
                                        {/* <select
                                            id={item.checkBox[1]}
                                            name={item.checkBox[1]}
                                            type={item.checkBox[1]}
                                            value={item.checkBox[2]}
                                            onSelect={handleSelect}
                                        >
                                            <option value={item.checkBox[2][0]}>
                                                {item.checkBox[3][0]}
                                            </option>
                                            <option value={item.checkBox[2][1]}>
                                                {item.checkBox[3][1]}
                                            </option>
                                            <option value={item.checkBox[2][2]}>
                                                {item.checkBox[3][2]}
                                            </option>
                                            <option value={item.checkBox[2][3]}>
                                                {item.checkBox[3][3]}
                                            </option>
                                        </select> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button type="submit" onClick={handleSave}>
                                            Save
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </form>
        </div>
    );
};
export default RegistratioForm;

/*

<tr>
                            <td>Email</td>
                            <td>Y</td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>Y</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Y</td>
                        </tr>
                        <tr>
                            <td>Date of Birth</td>
                            <td>Y</td>
                        </tr>
                        <tr>
                            <td>Sex</td>
                            <td>Y</td>
                        </tr>
                        <tr>
                            <td>Eye color</td>
                            <td>Y</td>
                        </tr>
                        <tr>
                            <td>Check all that apply</td>
                            <td>Y</td>
                        </tr>
                        <tr>
                            <td>Cell #</td>
                            <td>Y</td>
                        </tr>
                        <tr >
                            <td colspan='2'><button>Save</button></td>
                        </tr>
*/
