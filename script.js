//Define a list of arrays
let array = [1,2,3,4,5];

// store value from the below array
let double = [];

// Double the value of each array
let newArray = array.forEach(num => {
     double.push(num * 2);
});
// console.log(newArray);
console.log(double);