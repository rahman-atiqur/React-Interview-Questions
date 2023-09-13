// not completely done //rendering problem while onChange method

import React, { useState } from "react";
import "./Style.css";

const Inteview6 = () => {
    const [formFields, setFormFields] = useState([
       {
            //id,name=keys // label,type=values
            email: ["Email", "email"],
            password: ["Password", "password"],
            firstName: ["First Name", "text"],
            lastName: ["Last Name", "text"],
            sex: ["Sex", "radio"],
            dob: ["Date of Birth", "date"],
            languageE: ["Check all that apply", "checkbox"],
            languageF: ["", "checkbox"],
            eyeColor: ["Eye Color", "select", ["Green", "Black", "Brown", "Blue"]],
        },
        // {
        //     email:"",
        //     password: "",
        //     firstName: "",
        //     lastName: "",
        //     sex: "",
        //     dob: "",
        //     language: "",
        //     eyeColor: ""
        // },
    ]);

    // const { email, password, firsName, lastName, sex, dob } = formFields;

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
        console.log(formFields, "formsField");
    };

    const handleSave = () => {
        // setFormFields(email);
        setFormFields({ ...formFields, formFields });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // setFormFields({ email: ["Email", "email", ""] });
    };

    return (
        <div className="container">
            <h1>Registartion Form</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Fields</th>
                            <th>Value</th>
                        </tr>
                    </thead>

                    {formFields.map((value, key) => {
                        return (
                            <tbody key={key}>
                                {Object.keys(value).map((val, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>{value[val][0]}</td>
                                            {/* <td>
                                                <label>
                                                    type="{value[val][1]}" id="{val}" name="{val}"
                                                </label>
                                            </td> */}
                                            <td>
                                                {value[val][1] !== "select" ? (
                                                    <input
                                                        type={value[val][1]}
                                                        id={val}
                                                        name={val}
                                                        onChange={handleChange}
                                                    ></input>
                                                 
                                                ) : (
                                                    <select
                                                        id={val}
                                                        name={val}
                                                        onChange={handleChange}
                                                    >
                                                        <option> {value[val][2][0]}</option>
                                                        <option> {value[val][2][1]}</option>
                                                        <option> {value[val][2][2]}</option>
                                                        <option> {value[val][2][3]}</option>
                                                    </select>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        );
                    })}

                    <tfoot>
                        <tr>
                            <td colSpan="2">
                                <button type="submit" onClick={handleSave}>
                                    Save
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </form>
            <div>
                <h2>Result: {email}</h2>
            </div>
        </div>
    );
};

export default Inteview6;
