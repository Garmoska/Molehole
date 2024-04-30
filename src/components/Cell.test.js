import {render, screen} from "@testing-library/react";
import Cell from "./Cell";

test("check button rendering", ()=>{
    render(<Cell isVisible={false} /> );
    screen.getByText("Press me!");
});