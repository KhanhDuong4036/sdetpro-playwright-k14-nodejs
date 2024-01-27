function filterEvenNumber(value, index, array){
    return value % 2 === 0;
}

function convertToEvenNumbers(value, index, array) {
    if(value % 2 !== 0){
        return value * 2;
    } else{
        return value;
    }
}

function sortNumberASC(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function sortNumberDES(firstNumber, secondNumber){
    return secondNumber - firstNumber;
}


module.exports = {
    filterEvenNumber: filterEvenNumber,
    convertToEvenNumbers: convertToEvenNumbers,
    sortNumberASC: sortNumberASC,
    sortNumberDES: sortNumberDES
}