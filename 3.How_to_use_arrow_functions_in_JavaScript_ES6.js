// // normal funcion using the function keyword
// function getInfo(name, age) {
//     return `Name: ${name}  - Age: ${age}`;
// }


// console.log(getInfo("Alvorithm Ikiguy", 33));
// // arrow function using the arrow syntax, const keyword  without the
// // function keyword
// const getInfo2 = (name, age) => {
//     return `Name: ${name}  - Age: ${age}`;
// };

// console.log(getInfo2("Alvorithm Ikiguy", 33));

// // arrow function: no need for return statement and curly parenthesis 
// // when returning one value
// const getInfo3 = (name, age) => `Name: ${name}  - Age: ${age}`;

// console.log(getInfo3("Alvorithm Ikiguy", 33));

// // no need for parenthesis if there is one argument being passed
// const getInfo4 = name => `Name: ${name}`
// console.log(getInfo4("Alvorithm Ikiguy", 33));

// Function hositing, Variables and function execution logic, 
// arrow function declaration and execution logic

// // Function declared and executed after fucntion dclaration - which is normal

// function greeting() {
//     return "Hey there!";
// }

// console.log(greeting());

// Function executed/invoked before function declaration which is 
// allowed with normal fucntions becuase of hositing. This is 
// possible becuase of hoisting.Functions and variables (of the function) 
// are stored in memory upon definition/creation but this does not work 
// with stand alone variables

// // cannot access/execute/invoke standalone or global ;pet and const 
// // variables before intitialisation/declaration - with var keyword 
// // the default value ill be store as undefined

// console.log(greeting());
// console.log(name);

// function greeting() {
//     return "Hey there!";
// }

// const name = "Alvorithm Ikiguy";

console.log(greeting());
console.log(name);

function greeting() {
    return "Hey there!";
}

var name = "Alvorithm Ikiguy";