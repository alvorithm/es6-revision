// // cannot reassign new value to const variable onlye with let
// // const name = "Lemuel";
// //     name = Solomon;
// let myname = "Lemuel";
//     myname = "L Solomon";
// console.log(myname);


// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }
// // with var i will still be pritned to the screen because var is not block scoped
// console.log("Outside", i);

// //

for (let i = 0; i < 3; i++) {
    console.log(i);
}
// with let tkeyword there will be a rreference error: ReferenceError: i is not defined
// because the second cosnole.log method is declared outside the block scope where i 
// was initially declared
console.log("Outside", i);