class Person {
    constructor(name, age) {
        // The object is created from this class
        this._name = name;
        this._age = age;
    }

    // getter | get the current value of the attribute/property
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get age() {
        return this._age;
    }
}


module.exports = Person