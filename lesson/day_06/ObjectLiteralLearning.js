// CREAT
let userData ={
    name: "Khanh Duong",
    "age": 29,
};

// READ: dot notation, [] syntax
console.log(userData.name);
console.log(userData["age"]);

// UPDATE
userData.name = "Khanh";
userData["age"] = "30";
userData.gender = "M";
console.log(userData);

// DELETE
delete userData["age"];
console.log(userData);
