let userData01 ={
    name: "Khanh Duong",
    age: 29,
    bankAccount: {
        accountNumber: "4036",
        balance: 10000000
    }
};

// Shallow copy - spread syntax -> Array, nested-index, function can not be copy - Call as ONE level
// let userData02 ={...userData01}
// userData02.name = "Quoc Khanh";
// console.log(userData01);
// console.log(userData02);

// Shallow copy - Handle for nested object, array... (NOT for function, circular)
let userData02 = JSON.parse(JSON.stringify(userData01)); // Transform to STRING and then PARSE to JSON again
userData02.name = "Quoc Khanh";
userData02.bankAccount.balance = 2;
// console.log(userData01);
// console.log(userData02);

// Object.keys(targetObject)
console.log(Object.keys(userData01));

// Object.values(targetObject)
console.log(Object.values(userData01));

// Object.entries(targetObject)
console.log(Object.entries(userData01));

