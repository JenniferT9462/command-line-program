function hello(answer) {
    console.log(`Hello ${answer}, You are the Best! The Absolute Best!`);
}

function displayAdLib(name, flavor, action, animals, text) {

    console.log(`\nIf ${name} could have a pet ${animals[0]} that
         loved ${flavor} ice cream, what would they do together?
         I bet they'd go ${action} through the forest with a
         ${animals[1]}. In the forest they are attacked by ${text}.`)
}


  
  



export { displayAdLib }
export { hello }