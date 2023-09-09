import {Square} from "../lib/square.js";

//test of tests
describe('square', () => {
    it('should render as expected', () => {
        const expected = `<rect x="70px" y="20px" width="180px" height="180px" stroke="red" fill= "red" stroke-width="5"/>`;
        const actualRender = new Square('red').render();
        expect(actualRender).toEqual(expected);
    })
});


//describe('Arithmetic', () => {
// A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.


//Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

//run test at the constructor level to ensure the whole logo produces the expected result

//specifically make sure that the code can pass this test 

/*const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'); */