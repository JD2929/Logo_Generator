//import shapes file
import {Shapes} from "./shapes.js";


//create a square class extended from the shape class

//inside build a square based on shape class color with SVG coding

export class Square extends Shapes{
    constructor (color) {
      super (color)
 };
 
render() {
    return `<rect x="70px" y="20px" width="180px" height="180px" stroke="${this.color}" fill= "${this.color}" stroke-width="5"/>`;
  }
};