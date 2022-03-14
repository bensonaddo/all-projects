// ES 7 introduced includes() which verifys if something is included
// and returns true or false
let pets = ['cat', 'dog', 'bat'];

pets.includes('dog'); //true
pets.includes('birds'); //false since birds is not in the list of arrays


// Exponential
let square = (x) => x**2;
let cube = (y) => y**3;

// Print results to console
console.log('Square', square(5), 'Cube', cube(7));