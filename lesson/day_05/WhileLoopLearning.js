const readline = require('readline-sync');

/**
 * === GAME MENU ===
 * "1. Generate a random number (1->10)"
 * "0. Exit"
 */

readline.question("Please enter your name: ");
let  isPlaying = true;
while(isPlaying){
    printGameMenu();
    let userOption = getUserOption();
    if(userOption == 0){
        isPlaying = false;
        break;
    } else if(userOption == 1) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log("The Lucky Number is: ", randomNumber);
    } else {
        console.log("The value is invalid, please input again");
    }

}

console.log("See you later!");

function printGameMenu(){
    console.log('==== GAME MENU ====');
    console.log('1. Generate a random number (1->10)');
    console.log('0. Exit!');
}

function getUserOption(){
    return readline.question('Please select an option: ');
}
