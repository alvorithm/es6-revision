// function sayHi(name) {
//     return "Hello there, " + name;
// }

// console.log(sayHi("Lemuel Solomon"));

// Let us use template literals instead of using concatenation
// function sayHi(name) {
//     return `Hello there, ${name}`;
// }

// console.log(sayHi("Lemuel Solomon"));

// can use template literals to avoid typos with api calls - 
// baseurl can be a variable and then it can be passed  into the fetch method
// swapi is the star wars api

// fetch API not implemented in node. Installed external module node-fecth
// imported module at the top of code. pnpm added it autoatically to list of 
// dependencies. Added in "type";

import fetch from 'node-fetch';

// using template literals to interpolate an abolsute link into the fetch 
// method parameteric placeholders to avoid spelling mistakes

const baseUrl = "https://swapi.dev/api/";

fetch(`${baseUrl}people/1/`)
   .then(res => res.json())
   .then(json => console.log(json));

fetch(`${baseUrl}people/2/`)
   .then(res => res.json())
   .then(json => console.log(json));