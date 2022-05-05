// ES5 JAVASCRIPT OBJECTS vs ES6 Javascript objects
// A function which returns an object using ES5 syntax

function createPerson(name, age, admin) {
    return {
        name: name,
        age: age,
        isAdmin: admin
    };
}

console.log(createPerson("Lemuel", 32, true));
console.log(createPerson("Solomon", 32, false));

// A function which returns an object using ES6 syntax

function createPerson1(name, age, admin) {
    // if property identifier of an oect is= to the property value then there
    // is no need to write it out completely
    return {
        name,
        age,
        isAdmin: admin
    };
}

console.log(createPerson1("Lemuel", 32, true));
console.log(createPerson1("Solomon", 32, false));

