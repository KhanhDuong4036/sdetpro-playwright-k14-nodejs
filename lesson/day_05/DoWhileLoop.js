const readline = require('readline-sync');

/**
 * 1. Do sth before checking the condition for the FIRST interation
 * 
 */
let guessingTime = 0;
let randomNumber = getRandomNumber();
console.log(randomNumber);
do{
    let userNum = getUserNumber();
    if(userNum === randomNumber){
        console.log('Hooray!');
        break;
    }
    guessingTime++;

}while(guessingTime < 3);

if(guessingTime === 3){
    console.log('Chuc ban may man lan sau');
}

function getRandomNumber(){
    return Math.floor(Math.random() * 10) + 1;
}

function getUserNumber(){
    return readline.question('Please enter your number: ');
}