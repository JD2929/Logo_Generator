
//import shapes file
import {Shapes} from "./shapes.js";

//create a circle class that uses "extend" the shapes class
//produce a circle using the color from the parent class using the SVG format

export class Triangle extends Shapes{
    constructor (color) {
      super (color)
 };
 
render() {
    return `<polygon points="50 15, 100 100, 0 100" stroke="${this.color}" fill= "${this.color}" stroke-width="5"/>`;
   
  }
};
