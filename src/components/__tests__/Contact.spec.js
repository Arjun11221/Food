import { render , screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page test cases" , ()=>{
    it('should Contact render onto the page', () => { 
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    it('should Submit button render onto the page', () => { 
        render(<Contact/>);
    
        const submit = screen.getByText("Submit");
    
        expect(submit).toBeInTheDocument();
    });  
    
    it("Should render inputName onto the page" , ()=>{
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("Name");
    
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should render two input boxes onto the box" , ()=>{
        render(<Contact/>);
    
        const twoInput = screen.getAllByRole("textbox");
    
        expect(twoInput.length).toBe(2);
    });
})