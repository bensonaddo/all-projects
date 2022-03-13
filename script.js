// //Define a list of arrays
// let array = [1,2,3,4,5];

// // store value from the below array
// let double = [];

// // Double the value of each array
// let newArray = array.forEach(num => {
//      double.push(num * 2);
// });
// // console.log(newArray);
// console.log('forEachDouble', double);

// // map, filter, reduce

// // map
// // Map is preffered more than forEach because it expects a return value and always creates a new array
// /*  
//     // Same as below
//     let mapArray = array.map((num) => {
//         return num * 5
//     });
// */
// // Increase array Items by 5
// let mapArray = array.map(num => num * 5);
// console.log('mapArrayTimes5', mapArray);

// // filter
// // Filter all items greater than 5
// let filterArray = mapArray.filter(num => num > 5);
// console.log('FilterArray', filterArray);

// // reduce
// let reduceArray = mapArray.reduce((accumulator, num) => {
//     // Accumulator stores the previous stored value of the return statement starting from zero which is defined at the end of the return statement
//     // This also means the starting number would be 0 for accumulator
//     return accumulator + num;
// }, 0);
// console.log('ReduceArray', reduceArray);

// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  let storeArray = [];
  let addExclamation = array.forEach(usr => {
    usr.username = usr.username + "!";
    return storeArray.push(usr);
  });
  console.log(storeArray);
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  
  
  //Filter the array to only include users who are on team: red
  
  
  //Find out the total score of all users using reduce
  
  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      console.log(num, i);
      alert(num);
      return num * 2;
  })
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  