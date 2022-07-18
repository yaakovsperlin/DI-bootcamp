// const students = [
//      {name: "rich", score: 33},
//      {name: "peter", score: 55}
// ];




// const scores = students.map((student) => students["score"])
// console.log(scores)







// let famousPeople = [
//     {
//         name: "Angelina Jolie",
//         job: "actor",
//         age: 80
//     },
//     {
//         name: "George Clooney",
//         job: "actor",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         job: "actor",
//         age: 5
//     },
// ]

// const names = famousPeople.map((firstNames) => firstNames["name"])

// const jobs = famousPeople.map((firstNames) => {
// 	let object = {
// 		name:firstNames["name"],
// 		job: firstNames["job"]
// 	}
// 	return object;
// })

// const somePeopleOneLine = famousPeople.map((person) => ({name:person["name"],job:person["job"]}

// ))



// console.log(jobs)





// const numberArr  = numbers.filter()

// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

// function positiveNumbers (){
//   let onlyPositive = numbers.filter((number) => number >=0 )
//   return onlyPositive
// }
// positiveNumbers()
// console.log(positiveNumbers())



// const people = ["john", "lily", "tom"]
//                                          // element
// const secret = people.reduce((accumulator, name) => {
// 	return accumulator.charAt(0) +name.charAt(0)
//   }
  
// )
// console.log(secret)



// const students = [
//  	{name: 'Rich', score: 33}, 
//  	{name: 'Peter', score: 55},
//  	{name: 'John', score: 75}
// ];

// const finalSum = students.reduce((acc, currentValue) =>
//      acc+currentValue["score"], 0)



// console.log(finalSum)

// let voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Bob' , age: 30, voted: true},
// ];
// const numVoters = voters.reduce((acc, person) => {
// 	if (person["voted"] == true) {
// 		return ++acc
// 	}else{
// 		return acc;
// 	}
// },0)
// console.log(numVoters)




// 🌟 Exercise 2 : Employees
// Instructions
// Using this array:

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const newArray = users.map((element) => "hello "+element["firstName"])
console.log(newArray)



// Using the map() method, push into a new array the firstname of the user and a welcome message. 
// You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", etc..

// 🌟 Exercise 3 : Star Wars
// Instructions
// Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.





// Part I

// Create a function getCarHonda(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
// The function should
// loop through the array of object and return the first car with the name “Honda”.
// then, return a string in the format This is a {car_make} {car_model} from {car_year}.
// Hint : Find an array method that returns the value of the first element in an array that pass a test.
// Use the cars inventory below:
let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

const getCarHonda = function (element) {
    const first = inventory.find((object) => object["car_make"] === "Honda")


}


// Part II

// Create a function sortCarInventoryByYear(carInventory) that takes a single parameter.
// carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
// the function should return an inventory that is sorted by car_year, ascending.
// Hint : Check out this tutorial on the sort method
// Use the cars inventory below:

// let inventory = [
//   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//   { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//   { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//   { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
// ];




// [
//   { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//   { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
//   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//   { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
// ];


















































































































