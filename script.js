/*
function first(){
    var greet = 'Hi';
    function second(){
        alert(greet);
    }
    return second;
}
*/

// Convert above to es6 format
/*
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}
*/
// Above or more simpler
/*
const first = () => {
    const greet = 'Hi';
    const second = () => alert(greet);
    return second;
}

const newFunc = first();
newFunc();
*/

// Currying
// Means accepting one parameter at a time
/*
// Old syntax
function multiply(a,b){
    return a * b;
}
*/
/*
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4) // first arg 3=a and b=4
const multiplyBy5 = curriedMultiply(5); // this sets a as 5 as default
multiplyBy5(11); // B value can be changed and it would always be multiplied by 5 which is the default value of a. Eg.
multiplyBy5(12);

//Compose 
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;
compose(sum, sum)(5);
*/

//#1 Create a one line function that adds adds two parameters
const addTwo = (a, b) => a + b;
addTwo(7,8);

//Closure: What does the last line return?
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);


//Currying: What does the last line return?
const sum1 = (a, b) => a + b;
const curriedSum1 = (a) => (b) => a + b;
const add_5 = curriedSum1(5);
add_5(12);

//Composing: What does the last line return?
// First we calculate the value a=10 and number 10=num,
// add5 = num which is 10 + 5 so new value add5=15
// add1 = num which is now 15 + 1 which makes new value add1=16
const compose = (f, g) => (a) => f(g(a)); 
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10); // answer 10+5+1 = 16