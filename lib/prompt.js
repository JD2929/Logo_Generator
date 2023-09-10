// code for require inquirer
import inquirer from "inquirer";
import MaxLengthInputPrompt  from 'inquirer-maxlength-input-prompt';

//prompt function to ask user about logo details
//text (only 3 characters)
//text color
//shape
//shape color

export function askPrompts (){
    inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
    return inquirer
    .prompt([
        {
            
            type: 'maxlength-input',
            maxLength: 3,
            name: 'characters',
            message: 'What 3 characters do you want on the logo? These will show up as you have typed them in.',
        },

        {
            type: 'input',
            name: 'textColor',
            message: 'What color do you want the text to be? Please enter a CSS keyword or a hexadecimal starting with #',

        },
        {
            type: 'list',
            name: 'shapeChoice',
            message: 'Which shape would you like to use?',
            choices: ["circle", "square", "triangle"],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What colour would you like the shape to be? Please enter a CSS keyword or a hexadecimal starting with #',
        },

    ])

  //return an object which has the wanted criteria for the logo

  .then((answers) => {
    return answers;
    console.log(answers)
  });
  
}
