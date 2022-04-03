// normal funcion using the funnction keyword
function getInfo(name, age) {
    return `Name: ${name}  - Age: ${age}`;
}


console.log(getInfo("Lemuel", 33));
// arrow function using the arrow syntax, const keyword  without the fucntion keyword
const getInfo2 = (name, age) => {
    return `Name: ${name}  - Age: ${age}`;
};

console.log(getInfo2("Lemuel", 33));

// arrow function: no need for return statement and curly parenthesis when returning one value
const getInfo3 = (name, age) => `Name: ${name}  - Age: ${age}`;

console.log(getInfo3("Lemuel", 33));

// no need for parenthesis if there i one argument being passed
const getInfo4 = (name, age) => `Name: ${name}`
console.log(getInfo4("Lemuel", 33));