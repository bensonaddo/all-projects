var button = document.querySelector("button");
var items = document.querySelector("input");
var ul = document.querySelector("ul");

/* Mouse Keys */
button.addEventListener("click", function(){
    if(items.value.length > 0){
        console.log(items.value);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(items.value));
        ul.appendChild(li);
        items.value = ""; // This would ensure placeholder resets after value entered
    }
    
});

/*  Added a key Event listerner to add to list when the enter key is triggered
    https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/
button.addEventListener("keypress", function(event){
    // console.log(event.which);
    if(items.value.length > 0 && event.keyCode === 13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(items.value));
        ul.appendChild(li);
        items.value = ""; // This would ensure placeholder resets after value entered
    }
    
});