//Define a list of arrays
let array = [1,2,3,4,5];

// store value from the below array
let double = [];

// Double the value of each array
let newArray = array.forEach(num => {
     double.push(num * 2);
});
// console.log(newArray);
console.log('forEachDouble', double);

// map, filter, reduce

// map
// Map is preffered more than forEach because it expects a return value and always creates a new array
/*  
    // Same as below
    let mapArray = array.map((num) => {
        return num * 5
    });
*/
// Increase array Items by 5
let mapArray = array.map(num => num * 5);
console.log('mapArrayTimes5', mapArray);

// filter
// Filter all items greater than 5
let filterArray = mapArray.filter(num => num > 5);
console.log('FilterArray', filterArray);

// reduce
let reduceArray = mapArray.reduce((accumulator, num) => {
    // Accumulator stores the previous stored value of the return statement starting from zero which is defined at the end of the return statement
    // This also means the starting number would be 0 for accumulator
    return accumulator + num;
}, 0);
console.log('ReduceArray', reduceArray);