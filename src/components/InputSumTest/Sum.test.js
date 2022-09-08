import React from "react";
// import { ReactDOM } from "react-dom";
import Sum from "./Sum";
import Home from "./Home";


import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

// if("Testing Sum component for button",()=>{

//     const {getByTestId} = render(<Sum label="save" />);
//     expect(screen.getByTestId("myBtn")).toHaveTextContent("save")

// });


// RTL

//Button Testing
it("Testing for button label by getByTestId", () => {
        const { getByTestId } = render(<Home label="Sum" />);
        expect(getByTestId("myBtn")).toHaveTextContent("Sum");

    });


it("Testing for button label by getByText",() => {
        const { getByText } = render(<Home label="Sum" />);
        expect(getByText("Sum")).toBeInTheDocument();
    })

// Snapshot testing
it("Snapshot testing for button label",()=>{
    const tree=renderer.create(<Home label="Sum" />).toJSON;
    expect(tree).toMatchSnapshot();
})

//First input label testing
it("Testing for first input label by getByTestId", () => {
    const { getByTestId } = render(<Sum label="First Integer:" />);
    expect(getByTestId("myInput1")).toHaveTextContent("First Integer:");

});

//Second input label testing
it("Testing for second input label by getByTestId", () => {
    const { getByTestId } = render(<Sum label="Second Integer:" />);
    expect(getByTestId("myInput2")).toHaveTextContent("Second Integer:");

});




