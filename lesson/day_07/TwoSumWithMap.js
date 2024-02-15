/**
 * [3, 7, 22, 1] target number: 8
 * [index 1, index 2] that sum of them = targetNum
 * Assumption: Only one indice existing
 * 
 */

const givenArray = [3, 7, 22, 1];
const targetNumber = 8;
let indices = findIndicesUsingMap(givenArray, targetNumber);
console.log(indices);

function findIndices(givenArray, targetNumber) {
    for (let firstNumberIndex = 0; firstNumberIndex < givenArray.length; firstNumberIndex++) {
        const firstNumber = givenArray[firstNumberIndex];

        for (let secondNumberIndex = firstNumberIndex + 1; secondNumberIndex < givenArray.length; secondNumberIndex++) {
            const secondNumber = givenArray[secondNumberIndex];
            if (secondNumber === targetNumber - firstNumber) {
                return [firstNumberIndex, secondNumberIndex];
            }
        }

    }
    return [];

}

function findIndicesUsingMap(givenArray, targetNumber) {
    let numberMap = new Map();
    for (let firstNumberIndex = 0; firstNumberIndex < givenArray.length; firstNumberIndex++) {
        const firstNumber = givenArray[firstNumberIndex];
        const lookingNumber = targetNumber - firstNumber;
        if (numberMap.has(lookingNumber)) {
            return [firstNumberIndex, numberMap.get(lookingNumber)];
        }
        numberMap.set(firstNumber, firstNumberIndex);


    }
    return [];
}