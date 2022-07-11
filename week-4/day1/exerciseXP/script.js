/ Exercise 2 : Ternary Operator
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.


// const winBattle = () => true;
// const experiencePoints = winBattle() === true ? 10 : 1 
// console.log(experiencePoints)


 Exercise 3 : Is It A String ?
// const numberString = (string) => typeof(string) == "string" ? false : true

// console.log(numberString ("hey"))  



 Exercise 4 : Colors
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// code
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach(function(element,index){
// 	console.log(`#${index+1} choise is ${element}`)
// })

// colors.forEach((element, index) => element === "Violet" ? console.log("yes") : console.log("no...."))




 Exercise 5 : Colors #2
//  Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

// code
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];

// // color.forEach((element, index) => console.log(` ${index+1}st choise is ${element}`))
// color.forEach((element, index) => index <= 2 ? console.log(`${index+1}${ordinal[index+1]} choice is ${element}`) : console.log(`${(index+1)+ordinal[0]} choice is ${element}`))
