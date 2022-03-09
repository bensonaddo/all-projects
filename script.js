/*Below you will find the 3 files for the Background Generator. A few things you can try:

1. Write code so that the colour inputs match the background generated on the first page load. 

2. Display the initial CSS linear gradient property on page load.

3. BONUS: Add a random button which generates two random numbers for the colour inputs.

You may also see different behaviours with the Color widget based on what browser you use. Remember, all browsers are implemented differently. Good luck!
 */
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradiant")
var random = document.querySelector("button");

// Set Gradiant
function setGradiant(){
    // set the background
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    // Add the css text on the h3 element
    css.textContent = body.style.background + ";";
}

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomColor(){
    var a = generateRandomNumber(0, 256);
    var b = generateRandomNumber(0, 256);
    var c = generateRandomNumber(0, 256);
    var d = generateRandomNumber(0, 256);
    var e = generateRandomNumber(0, 256);
    var f = generateRandomNumber(0, 256);
    // console.log("rgb("+a + "," + b + "," + c+")"+" rgb("+d + "," + e + "," + f+")");    
    body.style.background = 
    "linear-gradient(to right, rgb(" 
    + a + ", " + b + ", " + c + "), rgb(" 
    + d + ", " + e + ", " + f + ")"
    + ")";

    // Add the css text on the h3 element
    css.textContent = body.style.background + ";";
}

// Add event listerner for color1
color1.addEventListener("input", setGradiant);

// Add event listerner for color2
color2.addEventListener("input", setGradiant);

// Call the function to generate Random color
random.addEventListener("click", generateRandomColor);

