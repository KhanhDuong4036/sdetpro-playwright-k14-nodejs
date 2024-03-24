const Person = require('./Person')
const teo = new Person('Teo', 18);
console.log(teo.age);
console.log(teo.name);
teo.name = 'Khanh Duong';
console.log(teo.name);