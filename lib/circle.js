//import shapes file
import {Shapes} from "./shapes.js";

//create a circle class that uses "extend" the shapes class

//produce a circle using the color from the parent class using the SVG format
export class Circle extends Shapes{
    constructor (color) {
      super (color)
 };
 
render() {
    return `<circle cx="150" cy="100" r="97.5" stroke="${this.color}" fill= "${this.color}" stroke-width="5"/>`;
   
  }
};


