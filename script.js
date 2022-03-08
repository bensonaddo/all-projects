var button = document.querySelector("button");
var items = document.querySelector("input");
var ul = document.querySelector("ul");

function getTotalLength(){
    return items.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(items.value));
    ul.appendChild(li);
    console.log(items.value);
    items.value = ""; // This would ensure placeholder resets after value entered    
}

function mouseClick(){
    if(getTotalLength() > 0){
        createListElement()
    } 
}

function keypressTrigger(event){
    /*  Added a key Event listerner to add to list when  the enter key is triggered
    https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    */
    // console.log(event.which);
    if(getTotalLength() > 0 && event.keyCode === 13){
        createListElement()
    } 
}

/* Trigger Mouse events */
button.addEventListener("click", mouseClick);

/* Trigger Key Events */
button.addEventListener("keypress", keypressTrigger);

/* Exercise */
/*Using the Shopping List files from the previous videos update the shopping list app to do the following:

1. If you click on the list item, it toggles the .done  class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

Good Luck!

Please note that: 

In the browser most code is event driven and writing interactive applications in JavaScript is often about waiting for and reacting to events, to alter the behaviour of the browser in some way. Events occur whenever something happens on a page based on user interaction. These are all defined by w3c.

To react to an event you listen for it and supply a function which will be called by the browser when the event occurs. This function is known as a callback. To read more, check out this link: https://blog.codeanalogies.com/2016/04/11/javascript-callbacks-explained-using-minions/ */

// Add cross line to all children inside the ul element
function toggleOnOF(){
    for (var i = 0, len = ul.children.length; i < len; i++){
        (function(index){
            ul.children[i].onclick = function(){
                ul.children[index].classList.toggle("done");
            }
        })(i);
    }
}

// Adding event listener to trigger off and on
ul.addEventListener("click", toggleOnOF);