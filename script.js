function first(){
    var greet = 'Hi';
    function second(){
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();