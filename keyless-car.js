// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"
var age = 0
var msg;

function verify_age(){
    alert("This car will only let you drive if you are over 18");
    age = prompt("Please enter your age?: ");
    if (age < 18){
        msg = "Sorry, you are too young to drive this car. Powering off"
        alert(msg)
    }
    else if (age == 18){
        msg = "Congratulations on your first year of driving. Enjoy the ride!"
        alert(msg)
    }
    else if(age >= 19){
        msg = "Powering On. Enjoy the ride!"
        alert(msg)
    }
    else{
        msg = "Please enter a number"
        alert(msg);
    }
}