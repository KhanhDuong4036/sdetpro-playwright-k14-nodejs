let intArr = [12,34,1,16,28];
let temp;

for(let i = 0; i< intArr.length; i++){
    for(let j = i + 1; j < intArr.length; j++){
        if(intArr[i] > intArr[j]){
            temp = intArr[i];
            intArr[i] = intArr[j];
            intArr[j] = temp;
        }
    }
}

for (const value of intArr) {
    console.log(value);
    
}