// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is a copy of the groceries object. (Tip : make the shopping variable equal to the groceries variable)
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?



let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
console.log(groceries.fruits)



const displayGroceries = () => {
    groceries.fruits.forEach((fruit) => console.log(fruit))
}
displayGroceries()

const cloneGroceries = () => {
    let user = client 
    user = "betty"
    // you will not see it in the original variable because your making a new data holder
    let shopping = groceries;
    groceries.totalPrice = "35$";
    // yes the orinal will change cause your not putting it in a new variable your changing groceries
    groceries.other.payed = false
    // yes for the same reason as by the price
//    
console.log(shopping)
} 
  cloneGroceries()
