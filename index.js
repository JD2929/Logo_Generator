//write require code for fs
import fs from 'fs'

//import all needed files
import { Triangle } from "./lib/triangle.js";
import { Circle } from "./lib/circle.js";
import { Square } from "./lib/square.js";
import { Logo } from "./lib/logo.js";
import { askPrompts } from "./lib/prompt.js";

//use prompt function to gather desired configuration

//instantiate the shape requested by the user
function createLogo() {
  askPrompts()
    .then(({ characters, textColor, shapeChoice, shapeColor }) => {

      let shapeRequested = null

      if (shapeChoice === "triangle") {
        shapeRequested = new Triangle(shapeColor)
      } else if (shapeChoice === "square") {
        shapeRequested = new Square(shapeColor)
      } else if (shapeChoice === "circle") {
        shapeRequested = new Circle(shapeColor)
      }

      const logo = new Logo(shapeRequested, characters, textColor)

      //render to a string using the logo object
      const logoSVGstring = logo.render()
      fs.writeFile('./logo.svg', logoSVGstring, (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log("Generated logo.svg")
        }
      })

    })


  //instatiate the construct class (it will send the shape object, the text and color info)

}

//generate logo
createLogo();

//write result to a file

