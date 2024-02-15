let myString = 'Khanh\Duong ';
console.log(myString);

// Length
const myStrLength = myString.length;

// Get a character at a position
for(let index = 0; index < myStrLength; index++){
    console.log(myString.charAt(index));
}

// Get rid of spaces at start and the end - TRIM
console.log(myString.trim().length);

// Replace
let toBeReplaceStr = 'tmomi mnmay gmap mnmhamu 7h';
// \g - global, \i - insensitive
// console.log(toBeReplaceStr.replace(/m/gi,''));
console.log(toBeReplaceStr.replaceAll('m', ''));

// 200mins - Get 200 to verify
let containingNumberStr = '200mins';
let num = containingNumberStr.replace(/[^0-9]/gi, '');
console.log(num);

// Backstick | String Template
console.log(`typeof num: ${typeof num}`);
console.log(Number(num) + 1);

// Concat
console.log('Hellom, '.concat('Tui ten Teo!'));

// Substring
let strToBeCut = 'https://sdetpro.com';
const startIndex = 8;
// Exclusive
const endIndex = 19;
// console.log(strToBeCut.substring(startIndex, endIndex));

let returnedDomain = getDomainName('https://sdetpro.com/')
console.log(returnedDomain);
function getDomainName(url){
    const indicator = '://';
    const indexOfIndicator = url.indexOf(indicator);
    if(indexOfIndicator < 0){
        throw Error('Invalid url');
    }
    const domainStartIndex = indexOfIndicator +  indicator.length
    return url.substring(domainStartIndex).replace(/\//gi, '')
}

// Split
let splitStr = 'https://google.com';
console.log(splitStr.split(''));