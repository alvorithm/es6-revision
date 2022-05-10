// How destructure arrays and objects. A way to unpack and assign variables
// destructuring an oject

const person = {
    name: "John Doe",
    age: 45
};

const { name, age } = person;
// the above code is shorthand for const name = person.aname
// const age = person.age

console.log(name, age);