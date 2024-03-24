class MethodOverloading {
    //Rest parameters
    static add(...nums) {
        return nums;
    }
    // Set default b = 1
    // Global variable => arguments
    static divide(a, b = 1) {
        if(arguments.length != 2){
            throw new Error('Must provide 2 numbers !!!');
        }
        if(b ===0){
            throw new Error('Cant divide by zero');
        }
        return a / b;
    }
}

module.exports = MethodOverloading;