// fucntion to some a fixed number of values
function add(a, b) {
    return a + b;
}

console.log(add(3, 5));

// to add multiple values without manually specifiying each individual
// parameter - use the rest operator.

function addRest(a, b, ...values) {
    let sum = a + b;
    values.forEach(value => (sum += value))
    return sum;
}

console.log(addRest(3, 5, 5, 77, 382));

// spread operator for copying object properties to create one object

// run code in code snippets: press f12 in browser and hn selct sources 
// and then create a code snippet file

const user = {name: "John The Baptist"};

const cart = {
    items: [{name: "shirt", quantity: 1}, {name: "pants", quantity: 3}]
};

const deliveryAddress = {
    street: "100 Main Street",
    city: "Miami",
    state: "FL"
};

const purchase = {
    ...user,
    ...cart,
    ...deliveryAddress
};

console.log(purchase);