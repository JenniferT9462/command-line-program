import { displayAdLib } from './functions.js';
import { checkbox, input } from '@inquirer/prompts';
import { hello } from './functions.js'; //Import function
import { select, Separator } from '@inquirer/prompts';

//Input
const answer = await input({ message: 'What is your name?' });
hello(answer);

//Select
let selectAnswer1 = await select({
    message: 'Pick your favorite.',
    choices: [
        { name: 'Chocolate',
          value: 'Chocolate',
          description: ''  
         },
        { name: 'Vanilla',
          value: 'Vanilla',
          description: ''  
         },
        { name: 'Strawberry',
          value: 'Strawberry',
          description: ''  
         },
        { name: 'Pistachio',
          value: 'Pistachio',
          description: ''  
         }
    ]
});
console.log(`You choose ${selectAnswer1}`);
//Select
const selectAnswer2 = await select({
    message: 'Pick one.',
    choices: [
        { name: 'running',
          value: 'running'  
         },
        { name: 'dancing',
          value: 'dancing'  
         },
        { name: 'swimming',
          value: 'swimming'  
         },
        { name: 'flying',
          value: 'flying'  
         }
    ]
});
console.log(`You choose ${selectAnswer2}`);

//Checkbox
const checkboxAnswer = await checkbox({
    message: 'Select 2 animals.',
    choices: [
        { name: 'dog',
          value: 'dog'  
         },
        { name: 'cat',
          value: 'cat'  
         },
        { name: 'bird',
          value: 'bird'  
         },
        { name: 'reptile',
          value: 'reptile'  
         },
        { name: 'hamster',
          value: 'hamster'  
         },
        { name: 'fish',
          value: 'fish'  
         }
    ]
});
console.log(`You choose ${checkboxAnswer}`)
const inputAnswer = await input({ message: 'Which movie character would you want to have an epic battle with? Briefly, describe the battle.'});


displayAdLib(answer, selectAnswer1, selectAnswer2, checkboxAnswer, inputAnswer)

