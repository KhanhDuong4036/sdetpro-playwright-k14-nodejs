const readLine = require('readline-sync');

function getUserOption(){
    return readLine.question('Please select an option: ');
}

module.exports = {
   getUserOption : getUserOption
}