//write require code for fs
import fs from 'fs' 

//import all needed files
import {Square} from "./lib/square.js";
import {Logo} from "./lib/logo.js"

//use prompt class to gather desired configuration

//instantiate the shape requested by the user
function createLogo () {
const shapeRequested = new Square ("red");

const logo = new Logo (shapeRequested)

//render to a string using the logo object
const logoSVGstring = logo.render ()
fs.writeFile ('./logo.svg',logoSVGstring, (err) => {
    if (err)
      console.log(err)})
}
//if shape = 'triangle' then shape = new Triangle

//instatiate the construct class (it will send the shape object, the text and color info)



//generate logo
createLogo ();

//write result to a file

