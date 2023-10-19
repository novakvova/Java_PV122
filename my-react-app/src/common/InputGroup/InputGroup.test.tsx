import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import InputGroup from "./index.ts";

describe('InputGroup Conponent TESTS', ()=> {

    test("Test Label props component", () => {
        render(<InputGroup field={"ssdf"} label={"Login"} onClick={()=>{}} />);
        expect(screen.getByText("Login")).toBeInTheDocument();
    });

    it("InputGroup smapshot", ()=> {
       const ig = render(
           <InputGroup
               field={"email"}
               label={"Електронна пошта"}
               type={"email"}
               placeholder={"Вкажіть пошту"}
               onChange={()=>{}} />
       );
       expect(ig).toMatchSnapshot();
    });

});
