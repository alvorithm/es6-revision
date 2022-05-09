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
    // if property identifier of an object is= to the property value then there
    // is no need to write it out completely
    return {
        name,
        age,
        isAdmin: admin
    };
}

console.log(createPerson1("Lemuel", 32, true));
console.log(createPerson1("Solomon", 32, false));

// Computed property names: passing variables as properties into objects in ES5

const specialProperty = "nationality";

const person = {
    name: "John",
    age: 22,
    isAdmin: false
};

person[specialProperty] = "German";

console.log(person);


// Computed property names: passing variables as properties into objects in ES6
// can directly add the computed property nme to the objct in ES6

const specialProperty1 = "nationality";

const person1 = {
    name: "John",
    age: 22,
    isAdmin: false,
    [specialProperty1]: "German"
};


console.log(person1);

const makeObject = (key, value) => {
    return {[key]: value};
}

const user = makeObject("username", "John");
const dog = makeObject("breed","labrador");

console.log(user);
console.log(dog);

// In ES5 you write the fucntion name as porperty identifier 
// and the actual function as a value

const person2 = {
    firstName: "John",
    lastName: "The Baptist",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
// person.getFullName() is a method call
console.log(person2.getFullName());

// in ES6 the above example can be written wiithout the 
// function keyword in the person2 object - getFullNmae object key can be 
// followed by parenthesis right away

const person3 = {
    firstName: "John",
    lastName: "The Baptist",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
// person.getFullName() is a method call
console.log(person3.getFullName());


// combining all new object features of ES6 by writing the ES5 code below 
// in a shorter syntax

const specialProperty2 = "nationality";
const firstName = "John";
const lastName = "The Baptist";

const person4 = {
    firstName: firstName,
    lastName: lastName,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

person4[specialProperty2] = "German";

console.log(person4);

// combining all new object features of ES6 by writing the ES5 code above 
// in a shorter syntax

const specialProperty3 = "nationality";
const firstName1 = "John";
const lastName1 = "The Baptist";

const person5 = {
    firstName1,
    lastName1,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    [specialProperty3]: "German"
};

console.log(person5);

