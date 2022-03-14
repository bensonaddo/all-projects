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


let obj1 = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'Try to copy me'
    }
};

let newClone = Object.assign({}, obj1);
let newClone2 = {...obj1};

console.log('NewClone', newClone, 'NewClone2', newClone2);

// Modify object with property deep
// This would change both prototype since the copy
// creates copies of root and not child objects
// Therefore changing deep value for all
obj1.c.deep = "Hahaha!!!";
console.log('NewClone', newClone, 'NewClone2', newClone2);

// To copy an object with child objects
let superClone = JSON.parse(JSON.stringify(obj1));
console.log('NewClone', newClone, 'NewClone2', newClone2, 'Super Clone', superClone);



