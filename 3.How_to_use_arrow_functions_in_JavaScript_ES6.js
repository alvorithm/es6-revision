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
// const getInfo4 = name => `Name: ${name}`;
// console.log(getInfo4("Alvorithm Ikiguy", 33));

// Function hositing, Variables and function execution logic,
// arrow function declaration and execution logic

// // Function declared and executed after fucntion dclaration - which is normal

// function greeting() {
//     return "Hey there!";
// }

// console.log(greeting());

// // Function executed/invoked before function declaration which is
// // allowed with normal fucntions becuase of hositing. This is
// // possible becuase of hoisting.Functions and variables (of the function)
// // are stored in memory upon definition/creation but this does not work
// // with stand alone variables

// // cannot access/execute/invoke standalone or global ;pet and const
// // variables before intitialisation/declaration - with var keyword
// // the default value will be store as undefined
// // but letr and const do not have this default value

// console.log(greeting());
// console.log(name);

// function greeting() {
//     return "Hey there!";
// }

// const name = "Lemuel Solomon";

// console.log(greeting());
// console.log(name);

// function greeting() {
//     return "Hey there!";
// }

// var name = "Lemuel Solomon";

// // we define arrow functions by equalliing them to a variable using
// // the let and const keyword. Also, we can only invoke arrow
// // functions after declaring them

// const greeting2 = () => "Hey there!!";
// console.log(greeting2());

// normal functions vs arrow functions: value of the this keyword

// const shape = {
//     radius: 10,
//     diameter: function() {
//         return this.radius * 2;
//     }
// };

// console.log(shape.diameter(2));

// with arrow functions we do not have o use the bind method
// with arrow functions we can specify wht the this keyword should refer to

const hero = {
  name: "Super Man",
  greet: function () {
    setTimeout(
      function () {
        console.log("Hi, my name is", this.name);
      }.bind(this),
      1000
    );
  },
};

console.log(hero.greet());

// arrow function with no bind method
const hero1 = {
  name1: "Super Man",
  greet1: function () {
    setTimeout(() => {
      console.log("Hi, my name is", this.name);
    }, 1000);
  }
};

console.log(hero1.greet1());
