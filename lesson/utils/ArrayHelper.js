const filterEvenNumber = function(value, index, array){
    return value % 2 === 0;
}

const filterOddNumber = function(value, index, array){
    return value % 2 !== 0;
}

const  convertToEvenNumbers = function(value, index, array) {
    if(value % 2 !== 0){
        return value * 2;
    } else{
        return value;
    }
}

const sortNumberASC = function(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

const sortNumberDES = function(firstNumber, secondNumber){
    return secondNumber - firstNumber;
}


module.exports = {
    filterEvenNumber: filterEvenNumber,
    convertToEvenNumbers: convertToEvenNumbers,
    sortNumberASC: sortNumberASC,
    sortNumberDES: sortNumberDES,
    filterOddNumber: filterOddNumber
}