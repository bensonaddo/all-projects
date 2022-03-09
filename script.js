var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradiant")

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
// Add event listerner for color1
color1.addEventListener("input", setGradiant);

// Add event listerner for color2
color2.addEventListener("input", setGradiant);

