import React from "react";
import { ReactDOM } from "react-dom";
// import Sum from "./Sum";
import Button from "./Button";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";


// RTL
it("Testing label from button", () => {
        const { getByTestId } = render(<Button label="save" />);
        expect(getByTestId("myBtn")).toHaveTextContent("save");
        // const {getByTestId} = render(<Button label = "click me please"></Button>)
        // expect(getByTestId("myBtn")).toHaveTextContent("click me please")
    });


it("Testing label from button by getByText",() => {
        const { getByText } = render(<Button label="button1" />);
        expect(getByText("button1")).toBeInTheDocument();
    })

//Snapshot testing
it("Snapshot testing for button",()=>{
    const anyConst=renderer.create(<Button label="Hello" />).toJSON;
    expect(anyConst).toMatchSnapshot();

})

