
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

const fullStack = users.filter((element) => element["role"] === "Full Stack Resident").map((element) => element["firstName"])

console.log(fullStack)



// Using the map() method, push into a new array the firstname of the user and a welcome message. 
// You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", etc..


// 🌟 Exercise 3 : Star Wars
// Instructions
// Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const string = epic.reduce((accumulator,currentValue) => {
    return accumulator+" "+currentValue
})
console.log(string)

// // 🌟 Exercise 4 : Employees #2
// // Instructions
// // Using this object:

let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

     const passed = students.filter((element,) => element["isPassed"] == true)
     console.log(passed)


// // Using the filter() method, create a new array, containing the students that passed the course.
// // Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name 
// // (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

// const 