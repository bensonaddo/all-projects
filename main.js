let a = 5;
let b = a;

b++

console.log('a', a); // 5
console.log('b', b); // 6

// Defining objects
let array = [1,2,3,5,7];

// This makes a link copy which makes them the same
// Changes to this array would be shown on the original array
let cpArray = array;

// Modifying array
cpArray.push(9,10);

console.log('Original', array, 'Linked', cpArray);

// To make just a copy without it affecting original
let realCopyArray = array.concat(array);
console.log('Real Copy', realCopyArray);

// Modifing the array list again
cpArray.push(11,12);
console.log('Original', array, 'Linked', cpArray, 'Real Copy', realCopyArray);

let obj = {a: 'a', b: 'b', c: 'c'};

// Make Copy of Object to keep original intact
let clone = Object.assign({}, obj);

// New way of making copy of objects above
let clone2 = {...obj};

// Modify Original obj value c
obj.c = 5;

// View content in console log
console.log('Original', obj, 'clone', clone, 'clone2', clone2);




