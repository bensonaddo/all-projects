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