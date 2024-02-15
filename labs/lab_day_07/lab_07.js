const readLine = require('readline-sync');

let userString = readLine.question('Please input your string: ');
let formatUserString = userString.replace(/[,.!?]/g, "").toLowerCase();

console.log(countWords(formatUserString));

function countWords(string){
    let wordsArray = string.split(' ');
    let wordsObject = {};

    for (const word of wordsArray) {
        if(wordsObject[word] === undefined){
            wordsObject[word] = 1;
        }else{
            wordsObject[word] = wordsObject[word] + 1;
        }
    }
    return wordsObject;
}

