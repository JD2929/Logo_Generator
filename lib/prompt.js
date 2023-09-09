// code for require inquirer
import inquirer from "inquirer";

//prompt function to ask user about logo details
//text (only 3 characters)
//text color
//shape
//shape color

export function askPrompts (){
return inquirer
    .prompt([
        {
            type: 'input',
            name: 'characters',
            message: 'What 3 characters do you want on the logo?',
        },

        {
            type: 'input',
            name: 'textColor',
            message: 'What color do you want the text to be?',

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
            message: 'What colour would you like the shape to be?',
        },

    ])

  //return an object which has the wanted criteria for the logo

  .then((answers) => {
    return answers;
    console.log(answers)
  });
  
}
