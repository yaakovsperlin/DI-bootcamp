 // Exercise 1 : List Of People
let people = ["Greg", "Mary", "Devon", "James"];
let newPeople = people.shift()
people[2] = "jason"
people.push("yaakov")
let index = people.indexOf("Mary")
let favorite = people.slice("Devon",2);
let last = people.slice(-1);

// 🌟 Exercise 2 : Your Favorite Colors
let colors = ["red","blue","green","yellow","purple"]

for (i =0;  i < colors.length; i++) {
 console.log(`my #${i+1} color is ${colors[i]}`)
}

// 🌟 Exercise 3 : Repeat The Question
let user = prompt("please type");{
    if (typeof user == "number"){
        console.log("epic")
    }
}    
// need to finish the above wasnt working

 // Exercise 4 : Building Management

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        Sarah: [3, 990],
        Dan :  [4, 1000],
        David : [1, 500],
    },
} 
console.log (building["numberOfFloors"])
console.log (building.numberOfRoomsAndRent[building.nameOfTenants[1]]);
// console.log (building.numberOfRoomsAndRent[building])

let danRent = building.numberOfRoomsAndRent.Dan[1]
let Sarah = building.numberOfRoomsAndRent.Sarah[1]
let david = building.numberOfRoomsAndRent.David[1]
if(Sarah + david > danRent){
     danRent +=200  
}
console.log(danRent)



// 🌟 Exercise 5 : Family

let family = {
 brother:1,
 sister:2,
 mom:3,
 father:4,
}
for (let property in family) {
  console.log(`${property}: ${family[property]}`);
}
