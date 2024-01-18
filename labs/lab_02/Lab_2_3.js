let weight = 87;

let heigh = 1.75;

let bmiNumber = weight / (heigh *2);

console.log(bmiNumber);

if(bmiNumber < 18.5){
    console.log("You're Underweight");
} else if(bmiNumber < 25){
    console.log("You're normal weight");
} else if(bmiNumber < 30){
    console.log("You're Overweight");
} else{
    console.log("You're obesity");
}