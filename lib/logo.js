

//create class that can construct the logo from a shape object(from index.js) and other gathered information(index.js)
export class Logo {
    constructor (shape) {
    this.shape = shape
}

//using the shape classes to look after that portion of the creation process
//assemble SVG code for logo from collected congfig
 render () {
const logoContainer = `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
  ${this.shape.render()} </svg>`

  return logoContainer
 
}

}
//add chosen characters to the logo
