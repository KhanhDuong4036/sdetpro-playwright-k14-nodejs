let intArr = [1,2,3,4,5]
let min = intArr[0];
let max = intArr[0];

for(let i = 1; i < intArr.length; i++){
    if(intArr[i] < min){
        min = intArr[i];
    }else if(intArr[i]> max){
        max = intArr[i]
    }
}

console.log('Min: ' + min);
console.log('Max: ' + max);