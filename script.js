// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// var user_obj = {
//     username: "John",
//     password: "secret"
// };

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [{
    username: "john",
    password: "test1"
},
{
    username: "michael",
    password: "secret"
},
{
    username: "jose",
    password: "supersecret"
}];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [{
    username: "michael",
    timeline: "Been working on this object today"
},
{
    username: "john",
    timeline: "Started working on this array object lastweek"
},
{
    username: "jose",
    timeline: "Yesterday, I picked up the wip job from John"
}];

/* Creating an alert to get inputs from users */
var user_prompt = prompt("What's your username");
var user_pwd_prompt = prompt("What's your password?");

/*  Creating the signin prompt. 
    Validate against database record.
    Display Newsfeed for specific user
*/
function signIn(usr, psw){
    if (usr == database[0].username && psw == database[0].password){
        console.log("Hi "+ newsfeed[1].username.toUpperCase()+", " + newsfeed[1].timeline);
    }
    else if (usr == database[1].username && psw == database[1].password){
        // console.log(newsfeed[0].timeline);
        console.log("Hi "+ newsfeed[0].username.toUpperCase()+", " + newsfeed[0].timeline);
    }
    else if (usr == database[2].username && psw == database[2].password){
        // console.log(newsfeed[2].timeline);
        console.log("Hi "+ newsfeed[2].username.toUpperCase()+", " + newsfeed[2].timeline);
    }
    else{
        alert("Sorry, wrong username and password");
    }
}

signIn(user_prompt, user_pwd_prompt);