/*Below you will find the 3 files for the Background Generator. A few things you can try:

1. Write code so that the colour inputs match the background generated on the first page load. 

2. Display the initial CSS linear gradient property on page load.

3. BONUS: Add a random button which generates two random numbers for the colour inputs.

You may also see different behaviours with the Color widget based on what browser you use. Remember, all browsers are implemented differently. Good luck!
 */

// Import lodash
var _ = require('lodash');
// import { without } from "lodash";

// Create an array element for demonstration
var array = [1,2,3,4,5,6,7,8];

/*
var liveServer = require("live-server");
 
var params = {
    port: 8181, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "/", // Set root directory that's being served. Defaults to cwd.
    open: true, // When false, it won't load your browser by default.
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['/components', './node_modules']], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);
*/

// Remove #3 from the array using without method from lodash package
// console.log('answer:', without(array, 3));
console.log('answer:', _.without(array, 3));

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

