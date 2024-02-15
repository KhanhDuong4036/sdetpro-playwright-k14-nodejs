/**
 * Given String: Hey, tui ten Khanh, ban cung ten Khanh ah?
 * 
 */

const givenStr = "Hey, tui ten Teo, ban cung ten Teo ah?";
let individualWords = givenStr.replace(/,/gi,'').split(' ');
console.log(individualWords);
const returnedGroupWord = groupWordMap(givenStr);
console.log(returnedGroupWord);


function groupWordMap(givenStr) {
    let wordMap = new Map();
    for (const word of individualWords) {
        if (!wordMap.has(word)) {
            wordMap.set(word, 1);
        } else {
            wordMap.set(word, wordMap.get(word) + 1);
        }
    }
    return wordMap;
}