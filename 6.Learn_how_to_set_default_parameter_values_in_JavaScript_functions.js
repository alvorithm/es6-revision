// Setting default paraemter values in JS functions
// normal ES5 function with default parameters
// if no argument is specified then it will return undefined

const { getDefaultSettings } = require("http2");

function greeting(name) {
    return `Hello there, ${name}`;
}

console.log(greeting("John"));

// see what happens when no value is specified.

console.log(greeting());

// to avoid undeifned result input a default parameter incase
// no argument is specified

function greetingOne(name = "you did not enter a name") {
    return `Hello there, ${name}`;
}

console.log(greetingOne());

// superhero points example for a possible game

function createSuperhero(name, healthPoints = 100) {
    return `You are ${name} and you have ${healthPoints} healthpoints`
}

const ironMan = createSuperhero("Ironman", 90);
const superMan = createSuperhero("Superman" );

console.log(ironMan);
console.log(superMan);

/// function addlIstItem

function addListItem(item, list = []) {
    list.push(item);
    return list;
}

console.log(addListItem("banana"));
console.log(addListItem("Grapes"));

// passing functions as default parameters

function getDate() {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${date.getMonth()}-
    ${date.getDate()}`
    const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; 

    return `${formattedDate} ${formattedTime}`;
}

function logMessage(message, prefix = getDate()) {
    console.log(`${prefix} - ${message}`);
}

// no prefix specified
// will log the time - good for error logging etc
// or timpe stampoing blocks or transactions
logMessage("I love Typescript");
