const {filterEvenNumber, 
    convertToEvenNumbers, 
    sortNumberASC,
    sortNumberDES}  = require('../utils/ArrayHelper')


// Literal declaration
let myNumArray = [1,2,3,4,5,6];
// FILTER
let evenNumber = myNumArray.filter(filterEvenNumber);
// MAP
const evenNumberArray = myNumArray.map(convertToEvenNumbers);

// SORT String: Asc, Descending
let myStrings = ['B', 'A', 'C'] 
myStrings.sort();
myStrings.reverse();

// SORT Number
let complexNumArray = [100, 22, 19];
complexNumArray.sort(sortNumberASC);

// forEach: Str:123456
myNumArray.forEach(convertToNoSpaceStr);

let targetStr = '';
function convertToNoSpaceStr(value, index, array){
    targetStr = value + '';

}

console.log(complexNumArray);

