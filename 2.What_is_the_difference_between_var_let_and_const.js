// cannot reassign new value to const variable only with let
// const name = "Lemuel";
//     name = "Solomon";
let myname = "Lemuel";
    myname = "Solomon";
console.log(myname);


for (var i = 0; i < 3; i++) {
    console.log(i);
}
// with var i will still be pritned to the screen because var is not block scoped
console.log("Outside", i);

//

for (let i = 0; i < 3; i++) {
    console.log(i);
}
// with let keyword there will be a reference error: ReferenceError: i is not defined
// because the second cosnole.log method is declared outside the block scope where i 
// was initially declared
console.log("Outside", i);

function checkPassword(password) {
    const valid = password.length > 6;
    if (valid) {
        const message = "Your password is valid";
        console.log(message);
    } else {
        const message = "Your password is not valid";
        console.log(message);
    }
}

checkPassword('3632');
checkPassword('48278y87hkjsd');