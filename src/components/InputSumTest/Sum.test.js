import React from "react";
// import { ReactDOM } from "react-dom";
import Sum from "./Sum";
import Home from "./Home";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import renderer from "react-test-renderer";

// if("Testing Sum component for button",()=>{

//     const {getByTestId} = render(<Sum label="save" />);
//     expect(screen.getByTestId("myBtn")).toHaveTextContent("save")

// });

// RTL

// Button Testing
it("1.Testing for button label by getByTestId", () => {
    const { getByTestId } = render(<Home label="Sum" />);
    expect(getByTestId("myBtn")).toHaveTextContent("Sum");
});

it("2.Testing for button label by getByText", () => {
    const { getByText } = render(<Home label="Sum" />);
    expect(getByText("Sum")).toBeInTheDocument();
});

// Snapshot testing
// it("3.Snapshot testing for button label", () => {
//     const tree = renderer.create(<Home label="Sum" />).toJSON;
//     expect(tree).toMatchSnapshot();
// });

//First input label testing
it("4.Testing for first input label by getByTestId", () => {
    const { getByTestId } = render(<Sum label="First Integer:" />);
    expect(getByTestId("myInput1")).toHaveTextContent("First Integer:");
});

// Second input label testing
it("5.Testing for second input label by getByTestId", () => {
    const { getByTestId } = render(<Sum label="Second Integer:" />);
    expect(getByTestId("myInput2")).toHaveTextContent("Second Integer:");
});

// not done
//  const ExampleSum = require('./handleSum');

// test('ExampleSum equals 4', () => {
//       expect(ExampleSum(2, 2)).toBe(2);
// });


const {handleSum} = require("./Sum");

test("6.Testing sum", () => {
    expect(handleSum(2,2)).toBe(4);
});
