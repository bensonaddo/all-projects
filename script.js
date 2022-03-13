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
const first = () => {
    const greet = 'Hi';
    const second = () => alert(greet);
    return second;
}

const newFunc = first();
newFunc();

// Currying
// Means accepting one parameter at a time
/*
// Old syntax
function multiply(a,b){
    return a * b;
}
*/
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4) // first arg 3=a and b=4
const multiplyBy5 = curriedMultiply(5); // this sets a as 5 as default
multiplyBy5(11); // B value can be changed and it would always be multiplied by 5 which is the default value of a. Eg.
multiplyBy5(12);
