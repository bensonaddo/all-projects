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