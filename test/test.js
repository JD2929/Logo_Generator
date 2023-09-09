//import all of the needed files

import {Square} from "../lib/square.js";
import {Circle} from "../lib/circle.js";
import {Triangle} from "./lib/triangle.js";

//test for square
//first ran with incorrect specs then put in correct sq specs

describe('square', () => {
    it('should render as expected', () => {
        const sqTest = `<rect x="70px" y="20px" width="180px" height="180px" stroke="red" fill= "red" stroke-width="5"/>`;
        const actualRender = new Square('red').render();
        expect(actualRender).toEqual(sqTest);
    })
});

//test for circle
//this is the second test - one we expect to pass

describe('circle', () => {
    it('should render as expected', () => {
        const cirTest = `<circle cx="50" cy="50" r="40" stroke="red" fill= "red" stroke-width="5"/>`;
        const actualRender = new Circle('red').render();
        expect(actualRender).toEqual(cirTest);
    })
});

//test for triangle 

describe('triangle', () => {
    it('should render as expected', () => {
        const triTest = `<polygon points="50 15, 100 100, 0 100" stroke="red" fill= "red" stroke-width="5"/>`;
        const actualRender = new Triangle('red').render();
        expect(actualRender).toEqual(triTest);
    })
});



//Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

//run test at the constructor level to ensure the whole logo produces the expected result

//specifically make sure that the code can pass this test 

/*const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'); */