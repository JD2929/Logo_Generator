

//create class that can construct the logo from a shape object(from index.js) and other gathered information(index.js)
export class Logo {
    constructor (shape, logoCharacters, characterColor) {
    this.shape = shape
    this.logoCharacters = logoCharacters
    this.characterColor = characterColor
}

//using the shape classes to look after that portion of the creation process
//assemble SVG code for logo from collected congfig
 render () {
const logoContainer = `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
  ${this.shape.render()} <text x="40px" y="140px" textLength ="220px" stroke="${this.characterColor}" fill = "${this.characterColor}" font-size ="80px">${this.logoCharacters}</text></svg>`

  return logoContainer
 
}

}
//add chosen characters to the logo
