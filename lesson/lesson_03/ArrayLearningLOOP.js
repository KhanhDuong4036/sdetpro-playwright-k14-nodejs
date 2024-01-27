// Literal declaration
let myNumArray = [1,2,3,4,5,6];
let arrayLength = myNumArray.length;

for (let index = 0; index < arrayLength; index++) {
    const currentValue = myNumArray[index];
    myNumArray[index] = currentValue *2;
  
}

for (const value of myNumArray) {
    console.log(value);
    }

