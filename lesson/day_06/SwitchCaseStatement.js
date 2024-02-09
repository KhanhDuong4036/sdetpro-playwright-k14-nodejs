const { getUserOption } = require('../utils/UserOption');

const inputNum = getUserOption();

switch (inputNum) {
    case "2":
        console.log("Monday");
        break;
    case "3":
        console.log("Tuesday");
        break
}