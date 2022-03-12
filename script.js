//condition ? expr1 : expr2;

// function isUserValid(bool) {
//     return bool;
// }

// var answer = isUserValid(true) ? "You may enter" : "Access Denied";

// var automatedAnswer = "Your account # is " + ( isUserValid(false) ? "1234" : "Not available");

// Switch Statements
function moveCommand(direction){
    var whatHappens;
    switch (direction){
        case "forward":
            whatHappens = "You encountered a monster";
            break;
        case "back":
            whatHappens = "You arrived home";
            break;
        case "right":
            whatHappens = "You found a river";
            break;
        case "left":
            whatHappens = "You run into a troll";
            break;
        default:
            whatHappens = "Please enter a valid value: forward, back, right, left";
    }
    // This would return the value of what happens after the condition has been evaluated 
    return whatHappens;
}