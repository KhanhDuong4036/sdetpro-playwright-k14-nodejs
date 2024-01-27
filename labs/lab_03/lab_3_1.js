
let intArr = [1,2,3,4,5];

let evenNumbers = 0;
let oddNumbers = 0;
for (let i = 0; i < intArr.length; i++){
    if(intArr[i] % 2 === 0){
        evenNumbers++;
    } else{
        oddNumbers++;
    }
}

console.log("Even numbers: " + evenNumbers);
console.log("Odd numbers: " + oddNumbers);