
function divideNumber(firstNumber, secondNumber) {
    let result = firstNumber / secondNumber;
    let upRoundedValue = Math.round(result);
    return upRoundedValue;
}

function isEvenNumber(number) {
    return number % 2 === 0;
}

module.exports = {
    divideNumber: divideNumber,
    isEvenNumber: isEvenNumber
}