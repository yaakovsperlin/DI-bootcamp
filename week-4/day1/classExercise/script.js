
// // let text = "Hello";

// // function checkText (){
// // 	console.log("In the function",text); 
// // 	// will read hello
// // 	text += " World";
// // 	console.log("Still in the function",text);
// // 	// will read helo world
// // }

// // console.log("before the function", text); 
// // // text will say hello

// // checkText()

// // console.log("after the function", text);
// // // now it will say hello world 


// let friend = "Harry";
// // will read harry

// function checkfriend (){
// 	let friend = "Alice";
// 	// will read alice
// 	console.log("In the function",friend);
// 	// will read alice 
// 	friend += " Smith";
// 	console.log("Still in the function",friend);
// }  
//  // will read alice smith

// console.log("before the function", friend);
// // will read alice beacuse the let was redfined in the function

// checkfriend()

// console.log("after the function", friend);
// // got it wrong its gonna be harry


// 1. Greet the user with his name, the user's name is a parameter. Do this exercise,
// * first by using function declarations
// * then function expression,
// * then arrow function


// function sayHello(username){
// 	alert(hello, username)
// }
// sayHello("john")


// const welcometwo = function (userName) {
// 	alert(`alert, ${userName}`)
// }









// 1. Check if the user's age is higher than 18. Use ternary operator.
// - if the user's age is higher than 18, return "You can drive"
// - else, return "You cannot drive"
// Do this exercise,
// * first by using function declarations
// * then function expression,
// * then arrow function




// function ageLimit(age){
//     const ageLimit = age > 18 ? "u can drive" : "you cannot drive"
//     alert(ageLimit)
// }

// ageLimit(21)
// console.log(ageLimit)







// const ageLimit = (age) => age > 18 ? alert("u can drive") : alert("you cannot drive")
// ageLimit(12)


// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.


 // Exercise 2 : Ternary Operator
// const winBattle = () => true;

// const experiencePoints = winBattle() === true ? 10 : 1 
// console.log(experiencePoints)



 // Exercise 3 : Is It A String ?
// const numberString = (string) => typeof(string) == "string" ? false : true

// console.log(numberString ("hey"))  



 // Exercise 4 : Colors
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// code
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach(function(element,index){
// 	console.log(`#${index+1} choise is ${element}`)
// })

// colors.forEach((element, index) => element === "Violet" ? console.log("yes") : console.log("no...."))




//  Exercise 5 : Colors #2
//  Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

// code
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];

// // color.forEach((element, index) => console.log(` ${index+1}st choise is ${element}`))
// color.forEach((element, index) => index <= 2 ? console.log(`${index+1}${ordinal[index+1]} choice is ${element}`) : console.log(`${(index+1)+ordinal[0]} choice is ${element}`))


 



const gameInfo = [
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






















































