class Robot {
    static id = 0;

    constructor(){
        Robot.id++;
    }

    getId(){
        return Robot.id;
    }

    static doSth(){
        console.log(`Hello, my name is ${this.name}`);
    }


}
module.exports = Robot;

const robot1 = new Robot();
console.log(robot1.getId());