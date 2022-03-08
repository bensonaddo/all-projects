var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];
var todosLength = todos.length;
// This shows index of each item in the array
for (var i=0; i < todosLength; i++){
    // console.log(todos[i] + "!");
    // todos[i] = todos[i] + "!";
    // todos[i] += "!";
    console.log(i);
}

// forEach function shows values of each item in the array
todos.forEach(function(i){
    console.log(i);
})